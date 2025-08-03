package com.sunbeam.entities;

import java.time.LocalDate;

import com.sunbeam.enums.Status;
import com.sunbeam.supperclass.SupperClass;

import jakarta.persistence.Entity;
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
public class Booking extends SupperClass {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int booking_id;
	 
	 private int user_id;
	 
	 private int villa_id;
	 
	 private LocalDate booking_date;
	 
	 private LocalDate check_in;
	 
	 private LocalDate check_out;
	 
	 private int no_of_guests;
	 
	 private double total_amount;
	 
	 private Status payment_status;
	 
	 private Status booking_status;
	 
	
}
