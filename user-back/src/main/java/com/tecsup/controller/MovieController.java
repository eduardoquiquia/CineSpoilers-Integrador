package com.tecsup.controller;

import com.tecsup.model.Movie;
import com.tecsup.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping
    public List<Movie> listar() {
        return movieService.obtenerCartelera();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Movie> detalle(@PathVariable Long id) {
        return movieService.obtenerPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}