package com.samvid.model;

import java.util.List;

public class AnalysisResult {

    private String overallRisk;
    private List<Clause> clauses;

    public AnalysisResult() {
    }

    public AnalysisResult(String overallRisk, List<Clause> clauses) {
        this.overallRisk = overallRisk;
        this.clauses = clauses;
    }

    public String getOverallRisk() {
        return overallRisk;
    }

    public void setOverallRisk(String overallRisk) {
        this.overallRisk = overallRisk;
    }

    public List<Clause> getClauses() {
        return clauses;
    }

    public void setClauses(List<Clause> clauses) {
        this.clauses = clauses;
    }
}