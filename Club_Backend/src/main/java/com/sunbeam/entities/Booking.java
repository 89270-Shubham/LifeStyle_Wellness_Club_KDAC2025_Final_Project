package com.sunbeam.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.sunbeam.enums.Status;
import com.sunbeam.supperclass.SupperClass;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
	 private Long booking_id;
	 
	 private Long user_id;
	 
	 private Long villa_id;
	 
	 private LocalDate booking_date;
	 
	 private LocalDateTime check_in;
	 
	 private LocalDateTime check_out;
	 
	 private int no_of_guests;
	 
	 private double total_amount;
	 
	 private Status payment_status;
	 
	 private Status booking_status;
	 
	 
//	 @ManyToOne
//	    @JoinColumn(name = "user_id", nullable = false)
//	    private User user;  // DON'T declare a separate Long user_id
//
//	    @ManyToOne
//	    @JoinColumn(name = "villa_id", nullable = false)
//	    private Villa villa;

	 
	 
	
}
