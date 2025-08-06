package com.sunbeam.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import com.sunbeam.dao.EventDao;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.GetUserEventDto;
import com.sunbeam.dto.ProfileDto;
import com.sunbeam.entities.User;
import com.sunbeam.globalexceptionhandler.AuthenticationFailureException;
import com.sunbeam.globalexceptionhandler.ResourceNotFoundException;
import com.sunbeam.services.EventService;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor

public class EventServiceImpl implements EventService{

    private final UserDao userDao;

	
	
	private final EventDao eventDao;
	
	private final ModelMapper modelMapper;


  

	
	

	@Override
	public List<GetUserEventDto> getAllAvailableEvents() {
		
		return eventDao.findAll().stream().map(entity->modelMapper.map(entity,GetUserEventDto.class)).toList();
	}




	



	

}
