package com.samvid.controller;

import com.samvid.dto.AnalyzeRequest;
import com.samvid.service.AnalyzeService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class AnalyzeController {

    private final AnalyzeService analyzeService;

    public AnalyzeController(AnalyzeService analyzeService) {
        this.analyzeService = analyzeService;
    }

    @PostMapping("/analyze")
    public Map<String, String> analyze(@RequestBody AnalyzeRequest request) {

        String result = analyzeService.analyze(request.getContractText());

        return Map.of(
                "message", result
        );
    }
}