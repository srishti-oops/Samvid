package com.samvid.controller;

import com.samvid.model.AnalysisResult;
import com.samvid.service.AnalyzeService;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.io.IOException;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
@Tag(
        name = "Contract Analysis",
        description = "AI-powered endpoints for analyzing legal contracts."
)
@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class AnalyzeController {

    private final AnalyzeService analyzeService;

    public AnalyzeController(AnalyzeService analyzeService) {
        this.analyzeService = analyzeService;
    }
    @Operation(
            summary = "Analyze a legal contract",
            description = "Uploads a PDF contract, extracts the text, analyzes it using Gemini AI, and returns the contract summary, risk score, clause analysis, missing clauses, negotiation suggestions, and confidence score."
    )
    @ApiResponse(
            responseCode = "200",
            description = "Contract analyzed successfully."
    )
    @PostMapping(
            value = "/analyze",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public AnalysisResult analyze(
            @RequestParam("file") MultipartFile file
    ) throws IOException {

        if (file == null || file.isEmpty()) {
            throw new RuntimeException("No file uploaded.");
        }

        String text;

        try (PDDocument document = PDDocument.load(file.getInputStream())) {
            PDFTextStripper stripper = new PDFTextStripper();
            text = stripper.getText(document);
        }

        return analyzeService.analyze(text);
    }
}