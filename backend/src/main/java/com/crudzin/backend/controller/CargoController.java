package com.crudzin.backend.controller;

import com.crudzin.backend.model.Cargo;
import com.crudzin.backend.service.CargoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cargos")
public class CargoController {

    private final CargoService service;

    public CargoController(CargoService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<List<Cargo>> listarTodos() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cargo> buscarPorId(@PathVariable Integer id) {
        return service.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Cargo> criar(@RequestBody Cargo cargo) {
        return ResponseEntity.ok(service.salvar(cargo));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cargo> atualizar(
            @PathVariable Integer id,
            @RequestBody Cargo cargo) {

        return service.buscarPorId(id)
                .map(existente -> {
                    cargo.setId(id);
                    return ResponseEntity.ok(service.salvar(cargo));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Integer id) {
        if (service.buscarPorId(id).isPresent()) {
            service.deletar(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
