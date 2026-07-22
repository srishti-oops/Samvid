package com.samvid.service;

import com.samvid.model.AnalysisResult;
import org.springframework.stereotype.Service;

@Service
public class AnalyzeService {

    public AnalysisResult analyze(String contractText) {

        String text = contractText.toLowerCase();

        if (text.contains("automatically renew")) {
            return new AnalysisResult(
                    "Medium",
                    "Automatic Renewal",
                    "This contract renews automatically every year."
            );
        }

        if (text.contains("terminate")) {
            return new AnalysisResult(
                    "High",
                    "Termination",
                    "This contract contains a termination clause."
            );
        }

        if (text.contains("penalty")) {
            return new AnalysisResult(
                    "High",
                    "Penalty",
                    "This contract contains a penalty clause."
            );
        }

        return new AnalysisResult(
                "Low",
                "None",
                "No obvious risky clauses detected."
        );
    }
}