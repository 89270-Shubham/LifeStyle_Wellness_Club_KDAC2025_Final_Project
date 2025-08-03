package com.sunbeam.entities;

import java.time.LocalDate;

import com.sunbeam.enums.Gender;
import com.sunbeam.enums.Status;
import com.sunbeam.supperclass.SupperClass;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table
public class Events extends SupperClass {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

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
