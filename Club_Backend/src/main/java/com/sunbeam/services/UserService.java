package com.sunbeam.services;


import org.springframework.http.ResponseEntity;

import com.sunbeam.apiresponse.ApiResponse;
import com.sunbeam.dto.ProfileDto;
import com.sunbeam.dto.UserDto;
import com.sunbeam.dto.UserLoginDto;
import com.sunbeam.entities.User;



public interface UserService {

	User register(UserDto dto);

	UserLoginDto userLogin(UserLoginDto dto);

	ProfileDto getMyProfile(Long id);

	ResponseEntity<?> updateProfile(Long id, ProfileDto dto);
	
	
}
