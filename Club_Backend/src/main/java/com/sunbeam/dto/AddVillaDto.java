package com.sunbeam.dto;

import com.sunbeam.enums.Status;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddVillaDto {
	private String name;
	private String location;
	private int rentPerNight;
	private int numberOfBedrooms;
	private int numberOfBathrooms;
	private int capacity;
	private String details;
//	private Status status;
	

}
