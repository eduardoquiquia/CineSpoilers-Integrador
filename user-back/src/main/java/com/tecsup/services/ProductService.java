package com.tecsup.services;

import com.tecsup.model.Product;
import com.tecsup.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> listarDisponibles() {
        return productRepository.findByState("DISPONIBLE");
    }
}