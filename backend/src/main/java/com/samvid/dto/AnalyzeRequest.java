package com.samvid.dto;

public class AnalyzeRequest {

    private String contractText;

    public AnalyzeRequest() {
    }

    public AnalyzeRequest(String contractText) {
        this.contractText = contractText;
    }

    public String getContractText() {
        return contractText;
    }

    public void setContractText(String contractText) {
        this.contractText = contractText;
    }
}