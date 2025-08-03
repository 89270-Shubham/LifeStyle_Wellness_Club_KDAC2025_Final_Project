package com.sunbeam.services;

import com.sunbeam.apiresponse.ApiResponse;
import com.sunbeam.dto.VillaDto;




public interface VillaService {

   VillaDto getVillaDetails(Long id);
   
   ApiResponse addNewVilla(VillaDto dto);
   
   
	
}
