package com.crudzin.backend.service;

import com.crudzin.backend.model.Colaborador;
import com.crudzin.backend.repository.ColaboradorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
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
        return repository.findByNome(nome);
    }

    public List<Colaborador> buscarPorStatus(Boolean status) {
        return repository.findByStatus(status);
    }

    public List<Colaborador> buscarPorCpf(String cpf) {
        return repository.findByCpf(cpf);
    }

    public List<Colaborador> buscarPorCargo(Integer idCargo) {
        return repository.findByCargo_Id(idCargo);
    }

    public List<Colaborador> buscarPorDepartamento(Integer idDepartamento) {
        return repository.findByDepartamento_Id(idDepartamento);
    }
}

