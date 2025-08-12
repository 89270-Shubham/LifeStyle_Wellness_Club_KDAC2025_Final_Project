package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.Events;

@Repository
public interface AddEventDao extends JpaRepository<Events, Long>
{
	
	boolean existsByName(String eventName);
	
    
	
}
