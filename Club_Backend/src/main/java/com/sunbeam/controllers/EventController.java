package com.sunbeam.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dao.AddEventDao;
import com.sunbeam.dto.AddEventDto;
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
	 
	 
	 @PostMapping("/add")
	 public ResponseEntity<?> addEvent(@RequestBody AddEventDto addeventdto)
	 {
	     System.out.println(addeventdto);
	     
	     return ResponseEntity.status(HttpStatus.CREATED).body(addeventserviceImp.addNewEvent(addeventdto));
	 }
	 
}
