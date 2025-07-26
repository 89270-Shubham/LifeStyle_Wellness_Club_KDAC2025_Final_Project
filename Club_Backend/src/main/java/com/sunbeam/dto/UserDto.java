package com.sunbeam.dto;

import java.time.LocalDate;

import com.sunbeam.enums.Gender;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class UserDto {

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
