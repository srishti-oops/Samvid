package com.samvid.model;

public class AnalysisResult {

    private String riskLevel;
    private String clause;
    private String message;

    public AnalysisResult() {
    }

    public AnalysisResult(String riskLevel, String clause, String message) {
        this.riskLevel = riskLevel;
        this.clause = clause;
        this.message = message;
    }

    public String getRiskLevel() {
        return riskLevel;
    }

    public void setRiskLevel(String riskLevel) {
        this.riskLevel = riskLevel;
    }

    public String getClause() {
        return clause;
    }

    public void setClause(String clause) {
        this.clause = clause;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}