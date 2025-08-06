package com.sunbeam.services;

import java.util.List;

import com.sunbeam.dto.BookingDto;
import com.sunbeam.entities.Booking;


	 public interface BookingService {
		    BookingDto createBooking(BookingDto bookingDto);
		    BookingDto getBookingById(int id);
		    List<BookingDto> getAllBookings();
		    void deleteBooking(int id);
		}
