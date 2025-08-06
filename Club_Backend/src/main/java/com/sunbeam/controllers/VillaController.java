 package com.sunbeam.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.AddVillaDto;
import com.sunbeam.dto.VillaDto;
import com.sunbeam.entities.Villa;
import com.sunbeam.serviceimpl.VillaServiceImpl;
import com.sunbeam.services.VillaService;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:4000")  // update to match actual frontend port
@AllArgsConstructor
public class VillaController {

	private final VillaService villaService;

	@GetMapping("/villas/get")
	public ResponseEntity<?> getAllAvailableVillas() {
		System.out.println("in get all");
		List<Villa> villas = villaService.getAllVillas();
		if (villas.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(villas);
	}
	
	
	
	//get villa by id
	@GetMapping("/villas/{id}")
	
   
   public ResponseEntity<VillaDto> getVillaById(
	@PathVariable @NotNull @Min(1) @Max(100)  Long id)
	{
		VillaDto villa = villaService.getById(id);
		return ResponseEntity.ok(villa);
	}
 
	//update villa by id
	@PutMapping("/villas/{id}")
	public ResponseEntity<VillaDto> updateVilla(@PathVariable Long id, @RequestBody VillaDto updateVilla)
	{
		VillaDto villa = villaService.update(id, updateVilla);
		return ResponseEntity.ok(villa);
	}
	
	
	@PostMapping("/add")
	public ResponseEntity<?> addNewVilla(@RequestBody AddVillaDto newVilla) {
	    System.out.println("In controller, newVilla.name = " + newVilla.getName());
	    return ResponseEntity
	            .status(HttpStatus.CREATED)
	            .body(villaService.addNewVilla(newVilla));
	}


	@DeleteMapping("/villa/{id}")
	public ResponseEntity<?> deleteVillaDetails(@PathVariable("id") Long villaId) {
		System.out.println("In delete " + villaId);
		return ResponseEntity.ok(villaService.deleteDetails(villaId));
	}
}
