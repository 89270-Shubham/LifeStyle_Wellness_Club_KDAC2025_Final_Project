package com.sunbeam.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.BookingDto;
import com.sunbeam.entities.Booking;
import com.sunbeam.globalexceptionhandler.ResourceNotFoundException;
import com.sunbeam.serviceimpl.BookingServiceImp;


import lombok.AllArgsConstructor;

@RestController

@AllArgsConstructor

@RequestMapping("/booking")


public class BookingController {

	@PostMapping("/create")
    public ResponseEntity<BookingDto> createBooking(@RequestBody BookingDto bookingDto) {
        BookingDto createdBooking = bookingserviceimp.createBooking(bookingDto);
        return new ResponseEntity<>(createdBooking, HttpStatus.CREATED);
    }
	
	
	
	private BookingServiceImp bookingserviceimp;
	
    @GetMapping("/{id}")
    public ResponseEntity<BookingDto> getBookingById(@PathVariable int id) {
    	 BookingDto dto = bookingserviceimp.getBookingById(id);
    	    if (dto == null) {
    	        throw new ResourceNotFoundException("Booking with ID " + id + " not found");
    	    }
    	    return ResponseEntity.ok(dto);
    }
    
    @GetMapping("/all")
    public ResponseEntity<List<BookingDto>> getAllBookings() {
        List<BookingDto> bookings = bookingserviceimp.getAllBookings();
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }
    
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable int id) {
        bookingserviceimp.deleteBooking(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
    
    
    
    
    
    
    
    
    
    
    
}
