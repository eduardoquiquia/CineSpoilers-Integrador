package com.tecsup.repository;

import com.tecsup.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByState(String state); // Para filtrar solo lo "DISPONIBLE"
}