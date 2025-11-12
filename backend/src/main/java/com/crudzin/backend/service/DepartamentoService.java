package com.crudzin.backend.service;

import com.crudzin.backend.model.Departamento;
import java.util.List;
import java.util.Optional;
import com.crudzin.backend.repository.DepartamentoRepository;
import org.springframework.stereotype.Service;

@Service
public class DepartamentoService {

    private final DepartamentoRepository repository;

    //Construtor
    public DepartamentoService(DepartamentoRepository repository) {
        this.repository = repository;
    }

    //Ações ou queries para buscar ou fazer alguma ação no banco
    public List<Departamento> listarTodos() {
        return repository.findAll();
    }

    public Optional<Departamento> buscarPorId(Integer id) {
        return repository.findById(id);
    }

    public Departamento salvar(Departamento departamento) {
        return repository.save(departamento);
    }

    public void deletar(Integer id) {
        repository.deleteById(id);
    }

    public List<Departamento> buscarPorNome(String nome) {
        return repository.findByNome(nome);
    }

}
