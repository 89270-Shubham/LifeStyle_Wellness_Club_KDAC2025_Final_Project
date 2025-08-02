package com.sunbeam.controllers;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.AdminRegisterDto;
import com.sunbeam.serviceimpl.AdminServiceImpl;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:4000")
public class AdminController {
	
	
	private AdminServiceImpl adminserviceImp;

	
	public AdminController(AdminServiceImpl adminServiceImpl)
	{
	   	this.adminserviceImp=adminServiceImpl;
	}
	
	
	@PostMapping("/register")
	public ResponseEntity<?> registerUser (@RequestBody AdminRegisterDto dto )
	{
		
		return ResponseEntity.ok(adminserviceImp.register(dto));
	}
}
