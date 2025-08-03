package com.sunbeam.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.apiresponse.ApiResponse;
import com.sunbeam.dao.VillaDao;
import com.sunbeam.dto.AddVillaDto;
import com.sunbeam.dto.VillaDto;
import com.sunbeam.entities.Villa;
import com.sunbeam.globalexceptionhandler.InvalidInputException;
import com.sunbeam.globalexceptionhandler.ResourceNotFoundException;
import com.sunbeam.services.VillaService;

import lombok.AllArgsConstructor;

@Service // class level annotation to declare spring bean - B.L
@Transactional // for auto tx management - import from o.s
@AllArgsConstructor

public class VillaServiceImpl implements VillaService {

	
	private final VillaDao villadao;
	private final ModelMapper modelMapper;
	
	@Override
	public List<VillaDto> getAvailableVillas()
	{
		return villadao.findByStatusTrue()
				.stream()
				.map(entity -> modelMapper.map(entity, VillaDto.class))
				.toList();
	}
	
	@Override
	public ApiResponse addNewVilla(AddVillaDto dto)
	{
		if (villadao.existsByname(dto.getName()))
			throw new InvalidInputException("Dupliacte Villa name ");
		
		Villa entity = modelMapper.map(dto,  Villa.class);
		
		entity.setStatus(true);
		
		Villa persistentEntity = villadao.save(entity);
		return new ApiResponse("Added new Villa with id" + persistentEntity.getId());
	}

//	@Override
//	public ApiResponse deleteDetails(Long id) {
//	     Optional<Villa> villa = villadao.findById(id)
//	    		 .orElseThrow(() -> new ResourceNotFoundException("Villa not found "));
//	     villa.setStatus(false);
//	     return new ApiResponse("soft deleted");
//	
//	}

	@Override
	public VillaDto getVillaDetailas(Long id) {
		Villa entity = villadao.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid villa id"));
		return modelMapper.map(entity, VillaDto.class);
	}

	@Override
	public ApiResponse updateVilla(Long id, AddVillaDto dto) {
		if (villadao.existsByname(dto.getName()))
			throw new InvalidInputException("Duplicate villa name ");
		Villa entity = villadao.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid villa id"));
		modelMapper.map(dto, entity);
		
		return new ApiResponse("updated villa details ");
	}

	@Override
	public ApiResponse deleteDetails(Long id) {
		// TODO Auto-generated method stub
		return null;
	}
}
