package com.sunbeam.dto;

import com.sunbeam.enums.Status;

import jakarta.persistence.Column;
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
    @Column(name = "number_of_bathrooms", nullable = false)
    private int numberOfBathrooms = 1; // default value
    private int capacity;
    private String details;
  
	

}
