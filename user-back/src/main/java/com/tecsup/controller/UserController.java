package com.tecsup.controller;

import com.tecsup.model.User;
import com.tecsup.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> body) {
        User user = userService.login(body.get("email"), body.get("password"));
        if (user != null) {
            user.setPassword(null); // Seguridad básica: no enviar el hash al front
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.status(401).body("Error en credenciales");
    }

    @GetMapping("/profile/{email}")
    public ResponseEntity<User> profile(@PathVariable String email) {
        return userService.obtenerPerfil(email)
                .map(user -> {
                    user.setPassword(null);
                    return ResponseEntity.ok(user);
                })
                .orElse(ResponseEntity.notFound().build());
    }
}