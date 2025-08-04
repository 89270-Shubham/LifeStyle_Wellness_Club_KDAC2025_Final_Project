package com.sunbeam.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.sunbeam.apiresponse.ApiResponse;
import com.sunbeam.dto.AddVillaDto;
import com.sunbeam.dto.VillaDto;
import com.sunbeam.entities.Villa;

import jakarta.transaction.Transactional;
@Transactional
@Service
public interface VillaService {
	//list all available villas
	
	List<Villa> getAllVillas();
	
	ApiResponse deleteDetails(Long id);
	
	ApiResponse addNewVilla(AddVillaDto dto);
	
	VillaDto getVillaDetails(Long id);
	
	ApiResponse updateVilla(Long id, AddVillaDto dto);

	List<VillaDto> getAllAvaliableVillas();

}
