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

            String prompt = """
You are Samvid.

You are an expert contract lawyer.

Analyze the legal agreement.

Return ONLY valid JSON.

Do not return markdown.

Do not wrap JSON inside ```.

Return EXACTLY this structure.

{
  "fileName":"Uploaded Agreement",
  "overallRisk":"Low",
  "riskScore":0,
  "confidence":0,
  "summary":"",
  "clauses":[
    {
      "name":"",
      "risk":"Low",
      "explanation":"",
      "recommendation":""
    }
  ],
  "missingClauses":[
    ""
  ],
  "negotiationTips":[
    ""
  ]
}

Rules:

1. overallRisk must be Low, Moderate or High.

2. riskScore must be an integer from 0 to 100.

3. confidence must be an integer from 0 to 100.

4. Explain every clause in simple English.

5. Give practical recommendations.

6. Mention only genuinely missing clauses.

7. Keep the summary under 120 words.

8. Return ONLY JSON.

Contract:

""" + contract;

            Map<String, Object> body = Map.of(
                    "contents",
                    List.of(
                            Map.of(
                                    "parts",
                                    List.of(
                                            Map.of(
                                                    "text",
                                                    prompt
                                            )
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

            JsonNode candidates = root.path("candidates");

            if (!candidates.isArray() || candidates.isEmpty()) {
                throw new RuntimeException("Gemini returned no candidates.");
            }

            JsonNode textNode = candidates
                    .get(0)
                    .path("content")
                    .path("parts")
                    .get(0)
                    .path("text");

            if (textNode.isMissingNode()) {
                throw new RuntimeException("Gemini response did not contain text.");
            }

            String json = textNode.asText();

            json = json
                    .replace("```json", "")
                    .replace("```", "")
                    .trim();

            mapper.readTree(json);

            return json;

        } catch (Exception e) {
            throw new RuntimeException("Gemini API Error", e);
        }

    }

}