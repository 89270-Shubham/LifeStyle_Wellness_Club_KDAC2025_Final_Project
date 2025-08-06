package com.sunbeam.controllers;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sunbeam.dao.AdminDao;
import com.sunbeam.dto.AdminLoginDto;
import com.sunbeam.dto.AdminRegisterDto;
import com.sunbeam.dto.UserDto;
import com.sunbeam.dto.UserLoginDto;
import com.sunbeam.serviceimpl.AdminServiceImpl;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@AllArgsConstructor
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:4000")
public class AdminController {

   
	
	
	private AdminServiceImpl adminserviceImp;



	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody AdminLoginDto dto) {
	    return ResponseEntity.ok(adminserviceImp.Login(dto));
	}
    
	
	@PostMapping("/register")
	public ResponseEntity<?> register (@RequestBody AdminRegisterDto dto )
	{
		
		return ResponseEntity.ok(adminserviceImp.register(dto));
	}
}
