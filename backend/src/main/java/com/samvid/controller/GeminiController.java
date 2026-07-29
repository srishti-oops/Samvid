package com.samvid.controller;

import com.samvid.service.GeminiService;
import org.springframework.web.bind.annotation.*;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
@Tag(
        name = "AI Services",
        description = "Endpoints for testing and interacting with the Gemini AI service."
)
@RestController
@RequestMapping("/api/gemini")
public class GeminiController {

    private final GeminiService geminiService;

    public GeminiController(GeminiService geminiService) {
        this.geminiService = geminiService;
    }
    @Operation(
            summary = "Test Gemini AI",
            description = "Sends sample contract text to the Gemini AI service and returns the generated analysis."
    )
    @ApiResponse(
            responseCode = "200",
            description = "Gemini AI responded successfully."
    )
    @PostMapping("/test")
    public String test(@RequestBody String contract) {
        return geminiService.analyzeContract(contract);
    }
}