package com.samvid.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
@Tag(
        name = "Home",
        description = "Basic endpoints for the Samvid backend."
)
@RestController
public class HomeController {
    @Operation(
            summary = "Welcome endpoint",
            description = "Returns a welcome message indicating that the Samvid backend is running."
    )
    @ApiResponse(
            responseCode = "200",
            description = "Welcome message returned successfully."
    )
    @GetMapping("/")
    public String home() {
        return "Welcome to Samvid Backend!";
    }
}