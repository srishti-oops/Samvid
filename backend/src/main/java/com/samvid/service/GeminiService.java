package com.samvid.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    private static final String URL =
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent";
    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper mapper = new ObjectMapper();

    public String analyzeContract(String contract) {

        try {

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            headers.set("x-goog-api-key", apiKey);

            String prompt =
                    """
                    Analyze the following contract.
                    
                    Return ONLY valid JSON in this format:
                    
                    {
                      "overallRisk":"",
                      "summary":"",
                      "clauses":[
                        {
                          "name":"",
                          "risk":"",
                          "explanation":"",
                          "recommendation":""
                        }
                      ],
                      "missingClauses":[],
                      "negotiationTips":[]
                    }

                    Contract:
                    """ + contract;

            Map<String, Object> body = Map.of(
                    "contents",
                    List.of(
                            Map.of(
                                    "parts",
                                    List.of(
                                            Map.of("text", prompt)
                                    )
                            )
                    )
            );

            HttpEntity<Map<String, Object>> entity =
                    new HttpEntity<>(body, headers);

            ResponseEntity<String> response =
                    restTemplate.exchange(
                            URL,
                            HttpMethod.POST,
                            entity,
                            String.class
                    );

            JsonNode root = mapper.readTree(response.getBody());

            return root.path("candidates")
                    .get(0)
                    .path("content")
                    .path("parts")
                    .get(0)
                    .path("text")
                    .asText();

        } catch (Exception e) {
            return "Gemini Error: " + e.getMessage();
        }
    }
}