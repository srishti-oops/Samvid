package com.samvid.model;

public class Clause {

    private String type;
    private String riskLevel;
    private String message;

    public Clause() {
    }

    public Clause(String type, String riskLevel, String message) {
        this.type = type;
        this.riskLevel = riskLevel;
        this.message = message;
    }

    public String getType() {
        return type;
    }

    public String getRiskLevel() {
        return riskLevel;
    }

    public String getMessage() {
        return message;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setRiskLevel(String riskLevel) {
        this.riskLevel = riskLevel;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}