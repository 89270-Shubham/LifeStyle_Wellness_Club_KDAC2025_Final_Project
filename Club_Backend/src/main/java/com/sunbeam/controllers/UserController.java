package com.sunbeam.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.GetUserEventDto;
import com.sunbeam.dto.ProfileDto;
import com.sunbeam.dto.UserDto;
import com.sunbeam.dto.UserLoginDto;
import com.sunbeam.entities.User;
import com.sunbeam.services.UserService;

import lombok.AllArgsConstructor;

import com.sunbeam.services.EventService;

@RestController
@RequestMapping("/user")
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
		System.out.println("in sign in "+dto);
		return ResponseEntity.ok(
				userServiceImpl.userLogin(dto));
		
	}
	
	@GetMapping("/events")
	public ResponseEntity<?> getAllEvents(){
		
		List<GetUserEventDto> list = eventService.getAllAvailableEvents();
		
		if(list.isEmpty())
			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
		
		return ResponseEntity.ok(list);
	}
	
	@GetMapping("/profile/{id}")
	public ResponseEntity<?> getMyProfile(@PathVariable Long id){
		
		
		ProfileDto profile = userServiceImpl.getMyProfile(id);
		
		
		return ResponseEntity.ok(profile);

	}
	
	@PutMapping("/profile/{id}")
	public ResponseEntity<?> updateDetails(@PathVariable 
			Long id, @RequestBody ProfileDto dto) {
		System.out.println("in update "+id+" dto");

			return ResponseEntity.ok(
					userServiceImpl.updateProfile(id, dto));

		
	}


	
}