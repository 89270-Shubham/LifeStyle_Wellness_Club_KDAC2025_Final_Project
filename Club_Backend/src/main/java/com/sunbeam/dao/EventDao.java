package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Events;

public interface EventDao extends JpaRepository<Events, Long>{

	List<Events> findAll();
}
