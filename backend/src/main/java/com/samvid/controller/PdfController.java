package com.samvid.controller;

import com.samvid.model.AnalysisResult;
import com.samvid.service.AnalyzeService;
import com.samvid.service.PdfService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

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