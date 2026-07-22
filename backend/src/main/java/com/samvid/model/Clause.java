package com.samvid.model;

public class Clause {

    private String name;
    private String risk;
    private String explanation;
    private String recommendation;

    public Clause() {
    }

    public Clause(String name, String risk, String explanation, String recommendation) {
        this.name = name;
        this.risk = risk;
        this.explanation = explanation;
        this.recommendation = recommendation;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRisk() {
        return risk;
    }

    public void setRisk(String risk) {
        this.risk = risk;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public String getRecommendation() {
        return recommendation;
    }

    public void setRecommendation(String recommendation) {
        this.recommendation = recommendation;
    }
}