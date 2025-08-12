package com.sunbeam.dto;

import com.sunbeam.entities.User;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AdminLoginDto {
	
	private String email;

    private String password;

	
}
