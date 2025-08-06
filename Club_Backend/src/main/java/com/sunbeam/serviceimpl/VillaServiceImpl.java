package com.sunbeam.serviceimpl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.apiresponse.ApiResponse;
import com.sunbeam.dao.VillaDao;
import com.sunbeam.dto.VillaDto;
import com.sunbeam.entities.Villa;
import com.sunbeam.enums.Status;
import com.sunbeam.globalexceptionhandler.InvalidInputException;
import com.sunbeam.globalexceptionhandler.ResourceNotFoundException;
import com.sunbeam.services.VillaService;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;

@Service // class level annotation to declare spring bean - B.L
@Transactional // for auto tx management - import from o.s
@AllArgsConstructor

public class VillaServiceImpl implements VillaService {

//    private final WebConfig webConfig;

	
	private final VillaDao villadao;
	private final ModelMapper modelMapper;

  
	
	@Override
	public List<Villa> getAllVillas()
	{
		return villadao.findAll()
				.stream()
				.toList();
	}
	
	@Override
	public ApiResponse addNewVilla(VillaDto newVillaDto) {
	    if (villadao.existsByName(newVillaDto.getName()))
	        throw new InvalidInputException("Duplicate Villa name");

	    System.out.println("DTO received: " + newVillaDto);

	    // Corrected variable name in mapping
	    Villa entity = modelMapper.map(newVillaDto, Villa.class);

	    System.out.println("Entity after mapping: " + entity); 

	    entity.setStatus(Status.ACTIVE);

	    Villa persistentEntity = villadao.save(entity);
	    return new ApiResponse("Added new Villa with id " + persistentEntity.getId());
	}

	
	



	@Override
	public ApiResponse deleteDetails(Long id) {
	     Villa villa = villadao.findById(id).orElseThrow(()-> new ResourceNotFoundException("Villa not Found"));
	     villa.setStatus(Status.INACTIVE);
	     return new ApiResponse("soft deleted");
	
	}

	@Override
	public VillaDto getVillaDetails(Long id) {
		Villa entity = villadao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Not found"));
		return modelMapper.map(entity, VillaDto.class);
	}

	@Override
	public ApiResponse updateVilla(Long id, VillaDto dto) {
		if (villadao.existsById(id))
			throw new InvalidInputException("Duplicate villa name ");
		
		Villa entity = modelMapper.map(dto, Villa.class);
		Villa persistentEntity = villadao.save(entity);
		return new ApiResponse("Updated new Villa with id" + persistentEntity.getId());
		
		
		
	}
	
	//find villa by status true
	@Override
	public List<VillaDto> getAllAvaliableVillas()
	{
		return villadao.findByStatusTrue()
				.stream()
				.map(entity -> modelMapper.map(entity, VillaDto.class))
				.toList();
	}

	@Override
	public VillaDto getById(@NotNull @Min(1) @Max(100) Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public VillaDto update(Long id, VillaDto updateVilla) {
		// TODO Auto-generated method stub
		return null;
	}



	
}
