package com.crudzin.backend.service;

import com.crudzin.backend.model.Cargo;
import java.util.List;
import java.util.Optional;

import com.crudzin.backend.repository.CargoRepository;
import org.springframework.stereotype.Service;

@Service
public class CargoService {

    private final CargoRepository repository;

    //Construtor
    public CargoService(CargoRepository repository) {
        this.repository = repository;
    }

    //Ações ou queries para buscar ou fazer alguma ação no banco
    public List<Cargo> listarTodos() {
        return repository.findAll();
    }

    public Optional<Cargo> buscarPorId(Integer id) {
        return repository.findById(id);
    }

    public Cargo salvar(Cargo cargo) {
        return repository.save(cargo);
    }

    public void deletar(Integer id) {
        repository.deleteById(id);
    }

    public List<Cargo> buscarPorNome(String cargo) {
        return repository.findByNome(cargo);
    }

}

