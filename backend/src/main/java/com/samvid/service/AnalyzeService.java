package com.samvid.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.samvid.model.AnalysisResult;
import org.springframework.stereotype.Service;

@Service
public class AnalyzeService {

    private final GeminiService geminiService;
    private final ObjectMapper mapper = new ObjectMapper();

    public AnalyzeService(GeminiService geminiService) {
        this.geminiService = geminiService;
    }

    public AnalysisResult analyze(String contractText) {

        try {

            String json = geminiService.analyzeContract(contractText);

            json = json
                    .replace("```json", "")
                    .replace("```", "")
                    .trim();

            return mapper.readValue(json, AnalysisResult.class);

        } catch (Exception e) {
            throw new RuntimeException("Failed to analyse contract.", e);
        }
    }
}