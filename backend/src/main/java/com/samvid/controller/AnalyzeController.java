package com.samvid.controller;
import jakarta.validation.Valid;
import com.samvid.dto.AnalyzeRequest;
import com.samvid.service.AnalyzeService;
import org.springframework.web.bind.annotation.*;
import com.samvid.model.AnalysisResult;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class AnalyzeController {

    private final AnalyzeService analyzeService;

    public AnalyzeController(AnalyzeService analyzeService) {
        this.analyzeService = analyzeService;
    }

    @PostMapping("/analyze")
    public AnalysisResult analyze(@Valid @RequestBody AnalyzeRequest request) {
        return analyzeService.analyze(request.getContractText());
    }
}