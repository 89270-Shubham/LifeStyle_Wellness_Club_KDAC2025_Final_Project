package com.sunbeam.dto;

import java.time.LocalDate;


import com.sunbeam.enums.Gender;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
public class ProfileDto {
	

	  private Long userId;

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
