package com.sunbeam.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class GetUserEventDto {
	
	private Long id;
	
	private String name;

	private String description;

	private String location;

	private LocalDateTime start_time;
	
	private LocalDateTime end_time;

	private String organiser_name;

	private String event_type;

	private Long fee;

}
