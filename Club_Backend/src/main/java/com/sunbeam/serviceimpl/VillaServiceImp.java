package com.sunbeam.serviceimpl;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import com.sunbeam.apiresponse.ApiResponse;
import com.sunbeam.dao.VillaDao;
import com.sunbeam.dto.VillaDto;
import com.sunbeam.entities.Villa;
import com.sunbeam.enums.Status;
import com.sunbeam.globalexceptionhandler.InvalidInputException;
import com.sunbeam.globalexceptionhandler.ResourceNotFoundException;
import com.sunbeam.services.VillaService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.AllArgsConstructor;


@Service

@Transactional

@AllArgsConstructor
public class VillaServiceImp  implements VillaService{

	private final VillaDao villadao;
	private final ModelMapper modelMapper;
	
	@Override
	public VillaDto getVillaDetails(@PathVariable Long id) {
		Villa entity = villadao.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid restaurant ID!!!!"));
		// map entity -> dto
		/*
		 * API of ModelMapper public <D> D map(Object src, Class<D> destinationClass);
		 * 1. create dest class instance - using def constructor 2. calls getter on src
		 * -> calls MATCHING setter on dest obj *
		 */
		return modelMapper.map(entity, VillaDto.class);
	
	}

	@Override
	public ApiResponse addNewVilla(@RequestBody VillaDto dto) {
	   if(villadao.existsByName(dto.getName()))
		   throw new InvalidInputException("Duplicate rest name !!!");
	   
	   
	     Villa entity = modelMapper.map(dto, Villa.class);
		// set status - true
		entity.setStatus(Status.ACTIVE);
		// invoke dao's - inherited API
		Villa persistentEntity = villadao.save(entity);
		return new ApiResponse("Added new villa with Id"+ persistentEntity.getId());
		
	}
	
	
	
	

}
