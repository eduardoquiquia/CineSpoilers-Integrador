package com.tecsup.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        System.out.println("Cargando Configuración de Seguridad...");

        http
                .csrf(csrf -> csrf.disable())
                .cors(cors -> {}) // Activa el soporte de CORS
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().permitAll()
                )
                // DESACTIVA el login por defecto que te está bloqueando
                .formLogin(form -> form.disable())
                .httpBasic(basic -> basic.disable());

        return http.build();
    }
}