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
                    "This contract renews automatically.",
                    "Review the renewal terms and consider adding a cancellation notice period."
            ));
        }

        if (text.contains("terminate")) {
            clauses.add(new Clause(
                    "Termination",
                    "High",
                    "The contract contains a termination clause.",
                    "Ensure the termination conditions are fair and clearly defined."
            ));
        }

        if (text.contains("penalty")) {
            clauses.add(new Clause(
                    "Penalty",
                    "High",
                    "A penalty clause has been identified.",
                    "Negotiate to reduce or remove excessive penalties."
            ));
        }

        if (clauses.isEmpty()) {
            clauses.add(new Clause(
                    "General Review",
                    "Low",
                    "No obvious risky clauses detected.",
                    "Consider a full legal review before signing."
            ));
        }

        String overallRisk = "Low";

        for (Clause clause : clauses) {
            if ("High".equalsIgnoreCase(clause.getRisk())) {
                overallRisk = "High";
                break;
            } else if ("Medium".equalsIgnoreCase(clause.getRisk())) {
                overallRisk = "Medium";
            }
        }

        List<String> missingClauses = List.of(
                "Confidentiality",
                "Dispute Resolution"
        );

        List<String> negotiationTips = List.of(
                "Clarify ambiguous terms.",
                "Limit liability where possible."
        );

        return new AnalysisResult(
                overallRisk,
                "Basic keyword-based analysis completed.",
                clauses,
                missingClauses,
                negotiationTips
        );
    }
}