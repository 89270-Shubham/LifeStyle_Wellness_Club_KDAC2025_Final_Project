package com.sunbeam.services;

import java.util.List;

import com.sunbeam.dto.GetUserEventDto;
import com.sunbeam.dto.ProfileDto;

public interface EventService {
	
	List<GetUserEventDto> getAllAvailableEvents();
	
	
}
