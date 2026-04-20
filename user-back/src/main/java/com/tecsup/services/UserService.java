package com.tecsup.services;

import com.tecsup.model.User;
import com.tecsup.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User login(String email, String password) {
        return userRepository.findByEmail(email)
                .filter(u -> u.getPassword().equals(password))
                .orElse(null);
    }

    public Optional<User> obtenerPerfil(String email) {
        return userRepository.findByEmail(email);
    }
}