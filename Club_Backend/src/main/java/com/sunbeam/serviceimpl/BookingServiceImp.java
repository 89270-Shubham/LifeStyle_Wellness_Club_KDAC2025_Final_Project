package com.sunbeam.serviceimpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.BookingDao;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dao.VillaDao;
import com.sunbeam.dto.BookingDto;
import com.sunbeam.entities.Booking;
import com.sunbeam.entities.User;
import com.sunbeam.entities.Villa;
import com.sunbeam.services.BookingService;

import lombok.AllArgsConstructor;

@Service

@Transactional

@AllArgsConstructor

public class BookingServiceImp implements BookingService  {

	 
	    private BookingDao bookingDao;

	
	    private UserDao userDao;

	   
	    private VillaDao villaDao;

		@Override
		public BookingDto createBooking(BookingDto dto) {
			
			        Booking booking = new Booking();

			        booking.setBooking_date(dto.getBooking_date());
			        booking.setCheck_in(dto.getCheck_in());
			        booking.setCheck_in(dto.getCheck_out());
			        booking.setNo_of_guests(dto.getNo_of_guests());
			        booking.setTotal_amount(dto.getTotal_amount());

			     
			        User user = userDao.findById((dto.getUser_id()))
			                .orElseThrow(() -> new RuntimeException("User not found"));
			        booking.setUser_id(user.getUserId());

			      
			        Villa villa = villaDao.findById(( dto.getVilla_id()))
			                .orElseThrow(() -> new RuntimeException("Villa not found"));
			        booking.setVilla_id(villa.getId());

			        Booking saved = bookingDao.save(booking);
			        return mapToDto(saved);
			    }
		

		@Override
		public BookingDto getBookingById(int id) {
			   Booking booking = bookingDao.findById((long) id)
		                .orElseThrow(() -> new RuntimeException("Booking with ID " + id + " not found"));
		        return mapToDto(booking);
		}

		private BookingDto mapToDto(Booking booking) {
			 BookingDto dto = new BookingDto();

		        dto.setBooking_id(booking.getUser_id());
		        dto.setUser_id(booking.getUser_id());
		        dto.setVilla_id(booking.getVilla_id());
		        dto.setBooking_date(booking.getBooking_date());
		        dto.setCheck_in(booking.getCheck_in());
		        dto.setCheck_out(booking.getCheck_out());
		        dto.setNo_of_guests(booking.getNo_of_guests());
		        dto.setTotal_amount(booking.getTotal_amount());

		        return dto;
		}

		@Override
		public List<BookingDto> getAllBookings() {
			  List<Booking> bookings = bookingDao.findAll();
		        return bookings.stream()
		                .map(this::mapToDto)
		                .collect(Collectors.toList());
		    
		        
		}

		@Override
		public void deleteBooking(int id) {
			
			  if (!bookingDao.existsById((long) id)) {
		            throw new RuntimeException("Booking with ID " + id + " not found");
		        }
		        bookingDao.deleteById((long) id);
			
		}
	  

	 
	
	

	 

	
}
