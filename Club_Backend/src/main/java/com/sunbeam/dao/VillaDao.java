package com.sunbeam.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.sunbeam.entities.Villa;
import com.sunbeam.enums.Status;
@Repository
public interface VillaDao extends JpaRepository<Villa, Long>{

	List<Villa> findByStatus(Status status);
	boolean existsByName(String name);
	
	
}
