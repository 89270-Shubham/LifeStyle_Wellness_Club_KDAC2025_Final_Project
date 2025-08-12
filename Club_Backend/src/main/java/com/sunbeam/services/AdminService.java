package com.sunbeam.services;

import org.springframework.http.ResponseEntity;

import com.sunbeam.dto.AdminLoginDto;
import com.sunbeam.dto.AdminRegisterDto;

import com.sunbeam.entities.Admin;


public interface AdminService {

	ResponseEntity<?> register(AdminRegisterDto dto);
	

	ResponseEntity<?> Login(AdminLoginDto dto);

	
}

