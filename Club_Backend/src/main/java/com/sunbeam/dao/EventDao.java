package com.sunbeam.dao;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sunbeam.dto.GetUserEventDto;
import com.sunbeam.entities.Events;

@Repository
public interface EventDao extends JpaRepository<Events, Long>{
	
		
	
}
