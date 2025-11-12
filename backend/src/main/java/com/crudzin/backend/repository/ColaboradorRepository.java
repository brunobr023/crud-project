package com.crudzin.backend.repository;

import com.crudzin.backend.model.Colaborador;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ColaboradorRepository extends JpaRepository<Colaborador, Integer> {

    //Metodos para o banco de dados do Colaborador
    List<Colaborador> findByNome(String nome);
    List<Colaborador> findByStatus(Boolean status);
    List<Colaborador> findByCpf(String cpf);
    List<Colaborador> findByCargo_Id(Integer idCargo);
    List<Colaborador> findByDepartamento_Id(Integer idDepartamento);
}
