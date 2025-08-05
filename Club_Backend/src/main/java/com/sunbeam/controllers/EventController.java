package com.sunbeam.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dao.AddEventDao;
import com.sunbeam.dto.AddEventDto;
import com.sunbeam.dto.GetUserEventDto;
import com.sunbeam.services.AddEventService;
import com.sunbeam.services.EventService;
import com.sunbeam.services.UserService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/events")
@CrossOrigin(origins = "http://localhost:4000")
@AllArgsConstructor
public class EventController {

	 private AddEventService addeventserviceImp;
	 private EventService eventService;
	 
	 
	 @PostMapping("/add")
	 public ResponseEntity<?> addEvent(@RequestBody AddEventDto addeventdto)
	 {
	     System.out.println(addeventdto);
	     
	     return ResponseEntity.status(HttpStatus.CREATED).body(addeventserviceImp.addNewEvent(addeventdto));
	 }
	 
	 
	@GetMapping("/all")
	public ResponseEntity<?> getAllEvents(){
			
	List<GetUserEventDto> list = eventService.getAllAvailableEvents();
			
	if(list.isEmpty())
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
			
	return ResponseEntity.ok(list);
	}
		
	
	
	@GetMapping("/getbyid/{id}")
	public GetUserEventDto getEventById(Long id){
		 
	GetUserEventDto event = eventService.getEventById(id);
		 
	return event; 
	}
}
