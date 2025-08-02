package com.sunbeam.dto;

import java.time.LocalDate;

import com.sunbeam.enums.Status;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter


public class AddEventDto {

	

	
	private String name;

	private String description;

	private String location;

	private LocalDate start_time;
	
	private LocalDate end_time;

	private String organiser_name;

	private String event_type;

	private Long fee;
	
	private Status status;
	
	private String created_by;
}
