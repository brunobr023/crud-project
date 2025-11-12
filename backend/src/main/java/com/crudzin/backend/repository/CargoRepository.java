package com.crudzin.backend.repository;

import com.crudzin.backend.model.Cargo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CargoRepository extends JpaRepository<Cargo, Integer> {

 //Metodos para o banco de dados do Cargo
    List<Cargo> findByNome(String nome);
}
