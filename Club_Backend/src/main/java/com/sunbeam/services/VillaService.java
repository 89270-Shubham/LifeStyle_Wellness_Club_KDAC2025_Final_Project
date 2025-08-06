package com.sunbeam.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sunbeam.apiresponse.ApiResponse;
import com.sunbeam.dto.VillaDto;
import com.sunbeam.entities.Villa;

import jakarta.transaction.Transactional;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
@Transactional
@Service
public interface VillaService {
	//list all available villas
	
	List<Villa> getAllVillas();
	
	ApiResponse deleteDetails(Long id);
	
	ApiResponse addNewVilla(VillaDto dto);
	
	VillaDto getVillaDetails(Long id);
	
	ApiResponse updateVilla(Long id, VillaDto dto);

	List<VillaDto> getAllAvaliableVillas();
	

	VillaDto getById(@NotNull @Min(1) @Max(100) Long id);

	VillaDto update(Long id, VillaDto updateVilla);

}
