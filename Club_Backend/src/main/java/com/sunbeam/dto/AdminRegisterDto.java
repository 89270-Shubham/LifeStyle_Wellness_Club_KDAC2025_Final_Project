package com.sunbeam.dto;

import org.springframework.data.annotation.Id;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AdminRegisterDto {

	
     
	 
	 private  String admin_name;
	 
	 private String email;
	 
	 private String password;
	 
}
