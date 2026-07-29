package com.samvid.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.Map;

@Tag(
        name = "System Health",
        description = "Endpoints for monitoring the health and availability of the Samvid backend."
)
@RestController
public class HealthController {
    @Operation(
            summary = "Health check",
            description = "Returns the current health status, application name, and version of the Samvid backend."
    )
    @ApiResponse(
            responseCode = "200",
            description = "Backend is running successfully."
    )
    @GetMapping("/api/health")
    public Map<String, String> health() {
        return Map.of(
                "status", "UP",
                "application", "Samvid Backend",
                "version", "1.0.0"
        );
    }
}