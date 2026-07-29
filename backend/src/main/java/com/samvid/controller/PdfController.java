package com.samvid.controller;

import com.samvid.model.AnalysisResult;
import com.samvid.service.AnalyzeService;
import com.samvid.service.PdfService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import java.io.IOException;
@Tag(
        name = "PDF Processing",
        description = "Endpoints for uploading and extracting text from PDF documents."
)
@RestController
@RequestMapping("/api/pdf")
public class PdfController {

    private final PdfService pdfService;
    private final AnalyzeService analyzeService;

    public PdfController(PdfService pdfService,
                         AnalyzeService analyzeService) {

        this.pdfService = pdfService;
        this.analyzeService = analyzeService;
    }
    @Operation(
            summary = "Analyze a PDF contract",
            description = "Uploads a PDF contract, extracts its text, sends it to Gemini AI for analysis, and returns the AI summary, risk score, clause analysis, missing clauses, negotiation suggestions, and confidence score."
    )
    @ApiResponse(
            responseCode = "200",
            description = "PDF analyzed successfully."
    )
    @PostMapping(
            value = "/analyze",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public AnalysisResult analyzePdf(
            @RequestParam("file") MultipartFile file
    ) throws IOException {

        String contractText = pdfService.extractText(file);

        return analyzeService.analyze(contractText);
    }
}