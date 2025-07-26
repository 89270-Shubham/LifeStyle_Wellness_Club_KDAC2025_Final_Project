package com.sunbeam.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.UserDto;
import com.sunbeam.services.UserService;

@RestController
@RequestMapping
@CrossOrigin(origins = "http://localhost:4000")
public class UserController {
	
	@Autowired
	private UserService userServiceImpl;
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@RequestBody UserDto dto){
		return ResponseEntity.ok(userServiceImpl.register(dto));
	}
	
	
	
//	public ResponseEntity<?> login(@RequestBody )
	

}
