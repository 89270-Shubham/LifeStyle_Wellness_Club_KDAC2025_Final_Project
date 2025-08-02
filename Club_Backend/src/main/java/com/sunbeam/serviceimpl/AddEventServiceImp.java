package com.sunbeam.serviceimpl;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import com.sunbeam.apiresponse.ApiResponse;
import com.sunbeam.dao.AddEventDao;
import com.sunbeam.dto.AddEventDto;
import com.sunbeam.entities.Events;
import com.sunbeam.enums.Status;
import com.sunbeam.globalexceptionhandler.InvalidInputException;
import com.sunbeam.services.AddEventService;
import lombok.AllArgsConstructor;


@Service

@Transactional

@AllArgsConstructor

public class AddEventServiceImp implements AddEventService {
	
	private AddEventDao addeventdao;
	private ModelMapper modelmapper;

	
	@Override
	public ApiResponse addNewEvent(AddEventDto addeventdto) {
		
		if(addeventdao.existsByName(addeventdto.getName()))
		
			throw new InvalidInputException("duplicate event name exits!!!!!!");
		
		    Events entity=modelmapper.map(addeventdto, Events.class);
		    
		    entity.setStatus(Status.ACTIVE);
		    
		    Events persistentEntity = addeventdao.save(entity);
		     
		return new ApiResponse("Addes new event with Id "+ persistentEntity.getId());
	}

}
