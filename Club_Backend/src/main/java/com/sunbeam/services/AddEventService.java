package com.sunbeam.services;

import com.sunbeam.apiresponse.ApiResponse;
import com.sunbeam.dto.AddEventDto;
import com.sunbeam.entities.Events;

public interface AddEventService {

	
	ApiResponse addNewEvent(AddEventDto addeventdto);
	
	ApiResponse updateEvent (Long id, AddEventDto dto);
	
	ApiResponse deleteDetails(Long id);
	
	AddEventDto getEventDetails(Long id);
	
	
	
}
