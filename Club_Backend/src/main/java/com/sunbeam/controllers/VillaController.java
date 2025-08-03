package com.sunbeam.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sunbeam.dao.VillaDao;
import com.sunbeam.dto.VillaDto;
import com.sunbeam.serviceimpl.VillaServiceImp;
import com.sunbeam.services.VillaService;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController

@RequestMapping("/villa")

@CrossOrigin(origins = "http://localhost:3000")

public class VillaController {

   	  private VillaServiceImp villaservice;

    
	@Autowired
    VillaController(VillaServiceImp villaservice ) {
        this.villaservice=villaservice;
    }

	  
	@PostMapping("/add")
	public ResponseEntity<?> addVilla(@RequestBody VillaDto newVilla) {
		System.out.println("in add " + newVilla);
		
		return ResponseEntity
				.status(HttpStatus.CREATED)// SC 201
				.body(villaservice.addNewVilla(newVilla));

	}
	
	
	@GetMapping("/{villaId}")
	// swagger annotation
	@Operation(description = "Get Villa details by id")
	public ResponseEntity<?> getDetails(
			@PathVariable @NotNull @Min(1) @Max(100) Long villaId) {
		System.out.println("in get " + villaId);

		return ResponseEntity.ok(
				villaservice.getVillaDetails(villaId));

	}
	
	

}
