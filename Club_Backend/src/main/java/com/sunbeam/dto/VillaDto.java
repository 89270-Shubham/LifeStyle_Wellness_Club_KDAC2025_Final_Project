package com.sunbeam.dto;

import com.sunbeam.enums.Status;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class VillaDto {
    private String name;

    private String location;
    private int rent_Per_Night;
    private int number_Of_Bedrooms;
    private int number_Of_Bathrooms;
    private int capacity;
    private String details;
  
	

}
