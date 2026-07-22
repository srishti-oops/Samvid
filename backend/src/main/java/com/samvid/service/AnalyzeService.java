package com.samvid.service;

import com.samvid.model.AnalysisResult;
import com.samvid.model.Clause;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AnalyzeService {

    public AnalysisResult analyze(String contractText) {

        String text = contractText.toLowerCase();

        List<Clause> clauses = new ArrayList<>();

        if (text.contains("automatically renew")) {
            clauses.add(new Clause(
                    "Automatic Renewal",
                    "Medium",
                    "This contract renews automatically every year."
            ));
        }

        if (text.contains("terminate")) {
            clauses.add(new Clause(
                    "Termination",
                    "High",
                    "This contract contains a termination clause."
            ));
        }

        if (text.contains("penalty")) {
            clauses.add(new Clause(
                    "Penalty",
                    "High",
                    "This contract contains a penalty clause."
            ));
        }

        if (clauses.isEmpty()) {
            clauses.add(new Clause(
                    "None",
                    "Low",
                    "No obvious risky clauses detected."
            ));
        }

        String overallRisk = "Low";

        for (Clause clause : clauses) {
            if ("High".equals(clause.getRiskLevel())) {
                overallRisk = "High";
                break;
            } else if ("Medium".equals(clause.getRiskLevel())) {
                overallRisk = "Medium";
            }
        }

        return new AnalysisResult(overallRisk, clauses);
    }
}