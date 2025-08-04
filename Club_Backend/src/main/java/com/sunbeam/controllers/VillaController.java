 package com.sunbeam.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
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
@RequestMapping("/admin/villa")
@CrossOrigin(origins = "http://localhost:4000")  // update to match actual frontend port
@AllArgsConstructor
public class VillaController {

	private final VillaServiceImpl villaServiceImpl;

	@GetMapping // GET /admin/villa
	public ResponseEntity<?> getAllAvailableVillas() {
		System.out.println("in get all");
		List<Villa> villas = villaServiceImpl.getAllVillas();
		if (villas.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(villas);
	}
	
	
	
//	@GetMapping("/{villaId}")
//	//swagger annotation
//	@Operation(description = "Get restaurant details by id")
//	public ResponseEntity<?> getRestaurantDetails(
//			@PathVariable @NotNull @Min(1) @Max(100)  Long villaId)
//	{
//		System.out.println("in get "+villaId);
//
//			return ResponseEntity.ok(
//						villaServiceImpl.getVillaDetails(villaId));
//
//	}

	@PostMapping("/add")
	public ResponseEntity<?> addNewVilla(@RequestBody AddVillaDto newVilla) {
	    System.out.println("In controller, newVilla.name = " + newVilla.getName());
	    return ResponseEntity
	            .status(HttpStatus.CREATED)
	            .body(villaServiceImpl.addNewVilla(newVilla));
	}


	@DeleteMapping("/{villaId}")
	public ResponseEntity<?> deleteVillaDetails(@PathVariable Long villaId) {
		System.out.println("In delete " + villaId);
		return ResponseEntity.ok(villaServiceImpl.deleteDetails(villaId));
	}
}
