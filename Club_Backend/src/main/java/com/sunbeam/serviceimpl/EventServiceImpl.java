package com.sunbeam.serviceimpl;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import com.sunbeam.dao.EventDao;
import com.sunbeam.dto.GetUserEventDto;
import com.sunbeam.services.EventService;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class EventServiceImpl implements EventService{

	
	
	private final EventDao eventDao;
	
	private final ModelMapper modelMapper;

	
	

	@Override
	public List<GetUserEventDto> getAllAvailableEvents() {
		
		return eventDao.findAll().stream().map(entity->modelMapper.map(entity,GetUserEventDto.class)).toList();
	}



	

}
