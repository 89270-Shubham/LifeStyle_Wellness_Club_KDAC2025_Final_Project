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
    private int rentPerNight;
    private int numberOfBedrooms;
    private int numberOfBathrooms;
    private int capacity;
    private String details;
    private Status status;
	

}
