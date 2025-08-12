package com.sunbeam.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;

import com.sunbeam.apiresponse.ApiResponse;
import com.sunbeam.dao.AddEventDao;
import com.sunbeam.dao.EventDao;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.AddEventDto;
import com.sunbeam.dto.GetUserEventDto;
import com.sunbeam.entities.Events;
import com.sunbeam.enums.Status;
import com.sunbeam.globalexceptionhandler.InvalidInputException;
import com.sunbeam.globalexceptionhandler.ResourceNotFoundException;
import com.sunbeam.services.AddEventService;
import lombok.AllArgsConstructor;


@Service

@Transactional

@AllArgsConstructor

public class AddEventServiceImp implements AddEventService {
	
	private AddEventDao addeventdao;
	private ModelMapper modelmapper;
	
	   private final UserDao userDao;

		
		
		private final AddEventDao eventDao;
		
		private final ModelMapper modelMapper;

	
	@Override
	public List<GetUserEventDto> getAllAvailableEvents() {
		
		return eventDao.findAll().stream().map(entity->modelMapper.map(entity,GetUserEventDto.class)).toList();
	}


	@Override
	public GetUserEventDto getEventById(Long id) {
		
		Events entity = eventDao.findById(id).orElseThrow(() ->new ResourceNotFoundException("Event Not Found"));
		
		return modelMapper.map(entity, GetUserEventDto.class);
				
	}

	
	
	
	
	
	
	
	
	@Override
	public ApiResponse addNewEvent(AddEventDto addeventdto) {
		
		if(addeventdao.existsByName(addeventdto.getName()))
		
			throw new InvalidInputException("duplicate event name exits!!!!!!");
		
		    Events entity=modelmapper.map(addeventdto, Events.class);
		    
		    entity.setStatus(Status.ACTIVE);
		    
		    Events persistentEntity = addeventdao.save(entity);
		     
		return new ApiResponse("Addes new event with Id "+ persistentEntity.getId());
	}


	@Override
	public ApiResponse updateEvent(Long id, AddEventDto dto) {
		if(addeventdao.existsByName(dto.getName()))
			throw new InvalidInputException("Duplicate event exists!!!! ");
		
		 Events entity=addeventdao.findById(id).orElseThrow(()-> new ResourceNotFoundException("Invalid event id !!!"));
		 
		 modelmapper.map(dto, entity);
		 
		return new ApiResponse("Updated restaurant details .....");
		
	}


	@Override
	public ApiResponse deleteDetails(Long id) {
	   Events event = addeventdao.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Restaurant not found - invalid ID!!!!"));
		// => restaurant : PERSISTENT
		// set status : false
		event.setStatus(Status.INACTIVE);
		return new ApiResponse("Soft deleted events details");

	}

	

	@Override
	public AddEventDto getEventDetails(Long id) {
	  Events entity= addeventdao.findById(id).orElseThrow(()-> new ResourceNotFoundException("Invalid Event Id !!!"));
		
		return modelmapper.map(entity, AddEventDto.class);
	}

}
