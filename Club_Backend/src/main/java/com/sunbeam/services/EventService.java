package com.sunbeam.services;

import java.util.List;
import java.util.Optional;

import com.sunbeam.dto.GetUserEventDto;

public interface EventService {
	
	List<GetUserEventDto> getAllAvailableEvents();

	GetUserEventDto getEventById(Long id);

	
}
