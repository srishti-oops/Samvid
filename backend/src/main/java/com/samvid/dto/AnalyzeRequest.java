package com.samvid.dto;

import jakarta.validation.constraints.NotBlank;

public class AnalyzeRequest {

    @NotBlank(message = "Contract text cannot be empty")
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