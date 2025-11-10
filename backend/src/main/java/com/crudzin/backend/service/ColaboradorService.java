package com.crudzin.backend.service;

import com.crudzin.backend.model.Colaborador;
import com.crudzin.backend.repository.ColaboradorRepository;

import java.util.List;
import java.util.Optional;

public class ColaboradorService {

    private final ColaboradorRepository repository;

    //Construtor
    public ColaboradorService(ColaboradorRepository repository) {
        this.repository = repository;
    }

    //Ações ou queries para buscar ou fazer alguma ação no banco
    public List<Colaborador> listarTodos() {
        return repository.findAll();
    }

    public Optional<Colaborador> buscarPorId(Integer id) {
        return repository.findById(id);
    }

    public Colaborador salvar(Colaborador colaborador) {
        return repository.save(colaborador);
    }

    public void deletar(Integer id) {
        repository.deleteById(id);
    }

    public List<Colaborador> buscarPorNome(String nome) {
        return repository.buscarPorNome(nome);
    }

    public List<Colaborador> buscarPorStatus(Boolean status) {
        return repository.buscarPorStatus(status);
    }

    public List<Colaborador> buscarPorCpf(String cpf) {
        return repository.buscarPorCPF(cpf);
    }

    public List<Colaborador> buscarPorCargo(Integer idCargo) {
        return repository.buscarPorCargo_id(idCargo);
    }

    public List<Colaborador> buscarPorDepartamento(Integer idDepartamento) {
        return repository.buscarPorDepartamento_id(idDepartamento);
    }
}

