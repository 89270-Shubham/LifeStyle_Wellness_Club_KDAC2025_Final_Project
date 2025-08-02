package com.sunbeam.services;

import java.util.List;

import com.sunbeam.dto.GetUserEventDto;

public interface EventService {
	
	List<GetUserEventDto> getAllAvailableEvents();
	
}
