package com.sunbeam.dto;

import java.time.LocalDate;

import org.springframework.stereotype.Service;

import com.sunbeam.enums.Gender;

import lombok.Getter;
@Getter
@Service
public class ProfileDto {
	
	private String id;
	
	private String email;

    private String password;

    private String firstName;

    private String lastName;
    
    private LocalDate dob;

    private Gender gender;

    private String phone;

    private String address;

    private String occupation;
}
