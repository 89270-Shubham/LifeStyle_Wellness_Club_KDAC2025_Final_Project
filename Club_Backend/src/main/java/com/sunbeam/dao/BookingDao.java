package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.Booking;

@Repository
public interface BookingDao extends JpaRepository<Booking, Long>  {
    
}
