package com.sunbeam.services;

import com.sunbeam.dto.AdminRegisterDto;
import com.sunbeam.entities.Admin;

public interface AdminService {

	Admin register(AdminRegisterDto dto);
}
