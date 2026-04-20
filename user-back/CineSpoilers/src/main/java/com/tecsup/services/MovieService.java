package com.tecsup.services;

import com.tecsup.model.Movie;
import com.tecsup.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> obtenerCartelera() {
        return movieRepository.findAll();
    }

    public Optional<Movie> obtenerPorId(Long id) {
        return movieRepository.findById(id);
    }
}