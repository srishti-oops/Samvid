package com.samvid.model;

import java.util.List;

public class AnalysisResult {

    private String fileName;
    private String overallRisk;
    private int riskScore;
    private int confidence;
    private String summary;
    private List<Clause> clauses;
    private List<String> missingClauses;
    private List<String> negotiationTips;

    public AnalysisResult() {
    }

    public AnalysisResult(
            String fileName,
            String overallRisk,
            int riskScore,
            int confidence,
            String summary,
            List<Clause> clauses,
            List<String> missingClauses,
            List<String> negotiationTips
    ) {
        this.fileName = fileName;
        this.overallRisk = overallRisk;
        this.riskScore = riskScore;
        this.confidence = confidence;
        this.summary = summary;
        this.clauses = clauses;
        this.missingClauses = missingClauses;
        this.negotiationTips = negotiationTips;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getOverallRisk() {
        return overallRisk;
    }

    public void setOverallRisk(String overallRisk) {
        this.overallRisk = overallRisk;
    }

    public int getRiskScore() {
        return riskScore;
    }

    public void setRiskScore(int riskScore) {
        this.riskScore = riskScore;
    }

    public int getConfidence() {
        return confidence;
    }

    public void setConfidence(int confidence) {
        this.confidence = confidence;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public List<Clause> getClauses() {
        return clauses;
    }

    public void setClauses(List<Clause> clauses) {
        this.clauses = clauses;
    }

    public List<String> getMissingClauses() {
        return missingClauses;
    }

    public void setMissingClauses(List<String> missingClauses) {
        this.missingClauses = missingClauses;
    }

    public List<String> getNegotiationTips() {
        return negotiationTips;
    }

    public void setNegotiationTips(List<String> negotiationTips) {
        this.negotiationTips = negotiationTips;
    }
}