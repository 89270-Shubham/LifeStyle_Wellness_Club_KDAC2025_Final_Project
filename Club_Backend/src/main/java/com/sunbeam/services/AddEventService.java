package com.sunbeam.services;

import java.util.List;

import com.sunbeam.apiresponse.ApiResponse;
import com.sunbeam.dto.AddEventDto;
import com.sunbeam.dto.GetUserEventDto;
import com.sunbeam.entities.Events;

public interface AddEventService {

	
	ApiResponse addNewEvent(AddEventDto addeventdto);
	
	ApiResponse updateEvent (Long id, AddEventDto dto);
	
	ApiResponse deleteDetails(Long id);
	
	AddEventDto getEventDetails(Long id);
	
	List<GetUserEventDto> getAllAvailableEvents();
	
	GetUserEventDto getEventById(Long id);
	
	
	
}
