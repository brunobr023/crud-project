package com.crudzin.backend;

import com.crudzin.backend.Model.Departamento;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);


		Departamento dp = new Departamento(1, "PCP");

		System.out.println(dp);
	}

}
