package com.samvid.model;
import java.util.List;
public class AnalysisResult {
    private String overallRisk;
    private String summary;
    private List<Clause> clauses;
    private List<String> missingClauses;
    private List<String> negotiationTips;
    public AnalysisResult() {
    }
    public AnalysisResult(String overallRisk,
                          String summary,
                          List<Clause> clauses,
                          List<String> missingClauses,
                          List<String> negotiationTips) {
        this.overallRisk = overallRisk;
        this.summary = summary;
        this.clauses = clauses;
        this.missingClauses = missingClauses;
        this.negotiationTips = negotiationTips;
    }
    public String getOverallRisk() {
        return overallRisk;
    }
    public void setOverallRisk(String overallRisk) {
        this.overallRisk = overallRisk;
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