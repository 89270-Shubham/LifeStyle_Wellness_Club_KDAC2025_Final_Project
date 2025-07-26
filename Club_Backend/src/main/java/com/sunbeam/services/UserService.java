package com.sunbeam.services;

import com.sunbeam.dto.UserDto;
import com.sunbeam.entities.User;

public interface UserService {

	User register(UserDto dto);

}
