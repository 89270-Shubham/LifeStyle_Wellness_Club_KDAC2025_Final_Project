package com.sunbeam.services;

import java.util.List;

import com.sunbeam.apiresponse.ApiResponse;
import com.sunbeam.dto.AddVillaDto;
import com.sunbeam.dto.VillaDto;

public interface VillaService {
	//list all available villas
	
	List<VillaDto> getAvailableVillas();
	
	ApiResponse deleteDetails(Long id);
	
	ApiResponse addNewVilla(AddVillaDto dto);
	
	VillaDto getVillaDetailas(Long id);
	
	ApiResponse updateVilla(Long id, AddVillaDto dto);

}
