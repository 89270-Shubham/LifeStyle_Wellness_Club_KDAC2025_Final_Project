package com.sunbeam.services;

import com.sunbeam.apiresponse.ApiResponse;
import com.sunbeam.dto.AddEventDto;

public interface AddEventService {

	
	ApiResponse addNewEvent(AddEventDto addeventdto);
	
}
