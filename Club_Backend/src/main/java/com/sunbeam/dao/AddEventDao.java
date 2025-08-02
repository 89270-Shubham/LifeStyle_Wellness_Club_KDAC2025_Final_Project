package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Events;

public interface AddEventDao extends JpaRepository<Events, Long>
{
	
	boolean existsByName(String eventName);
	
}
