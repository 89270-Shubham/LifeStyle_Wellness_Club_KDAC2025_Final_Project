package com.sunbeam.services;

import com.sunbeam.dto.AdminLoginDto;
import com.sunbeam.dto.AdminRegisterDto;

import com.sunbeam.entities.Admin;


public interface AdminService {

	Admin register(AdminRegisterDto dto);
	

	Admin Login(AdminLoginDto dto);

	
}

