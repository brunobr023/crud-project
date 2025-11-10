package com.crudzin.backend.repository;

import com.crudzin.backend.model.Colaborador;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ColaboradorRepository extends JpaRepository<Colaborador, Integer> {

    //Metodos para o banco de dados do Colaborador
    List<Colaborador> buscarPorNome(String nome);
    List<Colaborador> buscarPorStatus(Boolean status);
    List<Colaborador> buscarPorCPF(String cpf);
    List<Colaborador> buscarPorCargo_id(Integer idCargo);
    List<Colaborador> buscarPorDepartamento_id(Integer idDepartamento);
}
