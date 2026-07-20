package com.samvid.service;

import org.springframework.stereotype.Service;

@Service
public class AnalyzeService {

    public String analyze(String contractText) {
        return "Analysis received successfully.";
    }
}