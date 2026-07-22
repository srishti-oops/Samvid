package com.samvid.controller;

import com.samvid.service.GeminiService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/gemini")
public class GeminiController {

    private final GeminiService geminiService;

    public GeminiController(GeminiService geminiService) {
        this.geminiService = geminiService;
    }

    @PostMapping("/test")
    public String test(@RequestBody String contract) {
        return geminiService.analyzeContract(contract);
    }
}