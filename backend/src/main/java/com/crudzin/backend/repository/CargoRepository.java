package com.crudzin.backend.repository;

import com.crudzin.backend.model.Cargo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CargoRepository extends JpaRepository<Cargo, Integer> {

 //Metodos para o banco de dados do Cargo
    List<Cargo> buscarPorNome(String nome);
}
