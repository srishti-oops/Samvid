package com.samvid.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI samvidOpenAPI() {

        return new OpenAPI()
                .info(
                        new Info()
                                .title("Samvid API")
                                .version("v1.0")
                                .description(
                                        "AI-powered legal document intelligence platform for analyzing contracts, identifying risks, explaining legal clauses, and generating professional contract reports."
                                )
                                .contact(
                                        new Contact()
                                                .name("Srishti Singh")
                                                .email("your-email@example.com")
                                )
                );
    }
}