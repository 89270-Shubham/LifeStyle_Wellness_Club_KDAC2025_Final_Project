
package com.sunbeam.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Admin;

public interface AdminDao extends JpaRepository<Admin, Integer>{

	Optional<Admin> findByEmailAndPassword(String email, String password);
	
	
	
}
