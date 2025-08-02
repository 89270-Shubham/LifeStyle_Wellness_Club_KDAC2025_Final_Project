package com.sunbeam.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.UserDto;
import com.sunbeam.dto.UserLoginDto;
import com.sunbeam.entities.Events;
import com.sunbeam.services.UserService;

import lombok.AllArgsConstructor;

import com.sunbeam.services.EventService;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:4000")
@AllArgsConstructor
public class UserController {
	
	
	private UserService userServiceImpl;
	
	
	private EventService eventService;
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody UserDto dto){
		return ResponseEntity.ok(userServiceImpl.register(dto));
	}
	
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody UserLoginDto dto){
		return ResponseEntity.ok(
				userServiceImpl.userLogin(dto));
		
	}
	
	
	@GetMapping("/events")
	public ResponseEntity<?> getAllEvents(){
		
		List<Events> list = eventService.getAllAvailableEvents();
		
		if(list.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		
		return ResponseEntity.ok(list);
	}
}