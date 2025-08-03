 package com.sunbeam.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.sunbeam.dto.AddVillaDto;
import com.sunbeam.dto.VillaDto;
import com.sunbeam.services.VillaService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

public class VillaController {
	private final VillaService villaService = null;
	
	//get method
	@GetMapping
	public ResponseEntity<?> getAllAvailableVillas()
	{
		System.out.println("in get all");
		List<VillaDto> villas= villaService.getAvailableVillas();
		if (villas.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		return ResponseEntity.ok(villas);
				
	}
	
	//post method
	@PostMapping
	public ResponseEntity<?> addVilla(@RequestBody AddVillaDto newVilla)
	{
		System.out.println("In add " + newVilla);
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.body(villaService.addNewVilla(newVilla));
	}
	
	
	//delete method
	@DeleteMapping("/{villaId}")
	public ResponseEntity<?> deleteVillaDetails(@PathVariable Long villaId)
	{
		System.out.println("In delete" +villaId);
		
		return ResponseEntity.ok(villaService.deleteDetails(villaId));
	}
 
	

}
