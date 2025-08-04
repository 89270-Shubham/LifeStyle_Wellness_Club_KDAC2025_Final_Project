package com.sunbeam.dto;

import java.time.LocalDate;

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

	private LocalDate start_time;
	
	private LocalDate end_time;

	private String organiser_name;

	private String event_type;

	private Long fee;

}
