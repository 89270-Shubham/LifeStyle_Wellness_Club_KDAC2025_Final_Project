package com.sunbeam.dto;

import com.sunbeam.enums.Status;

import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddVillaDto {
	private String name;
	private String location;
	private int rentPerNight;
	private int numberOfBedrooms;
    @Column(name = "number_of_bathrooms", nullable = false)
    private int numberOfBathrooms = 1; // default value
	private int capacity;
	private String details;
//	private Status status;
	

}
