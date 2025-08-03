package com.sunbeam.services;


import com.sunbeam.dto.ProfileDto;
import com.sunbeam.dto.UserDto;
import com.sunbeam.dto.UserLoginDto;
import com.sunbeam.entities.User;



public interface UserService {

	User register(UserDto dto);

	User userLogin(UserLoginDto dto);

	ProfileDto getMyProfile(Long id);
	
	

}
