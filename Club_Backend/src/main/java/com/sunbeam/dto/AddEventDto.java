package com.sunbeam.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.sunbeam.enums.Status;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AddEventDto {

	private String name;

	private String description;

	private String location;

	private LocalDateTime start_time;
	
	private LocalDateTime end_time;

	private String organiser_name;

	private String event_type;

	private Long fee;
	
	private Status status;
	
	private String created_by;
}
