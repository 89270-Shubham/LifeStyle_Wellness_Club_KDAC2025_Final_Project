package com.sunbeam.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.EventDao;
import com.sunbeam.entities.Events;
import com.sunbeam.services.EventService;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class EventServiceImpl implements EventService{
	
	
	private EventDao eventDao;

	@Override
	public List<Events> getAllAvailableEvents() {
		
		return eventDao.findAll();
	}

}
