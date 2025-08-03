package com.sunbeam.dto;

import com.sunbeam.enums.Status;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class VillaDto {
	 private String name;
	    
	    private String description;
	    
	    private String location;
	    
	    private int capacity;
	    
	    private int bedrooms;
	    
	    private int bathrooms;
	    
	    private double price_per_night;
	    
	    private Status status;
	    
}
