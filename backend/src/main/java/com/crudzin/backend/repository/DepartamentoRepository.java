package com.crudzin.backend.repository;

import java.util.List;

import com.crudzin.backend.model.Departamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartamentoRepository extends JpaRepository<Departamento, Integer> {

    //Metodos para o banco de dados do Departamento
    List<Departamento> findByNome(String nome);

}
