package com.sunbeam.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sunbeam.entities.Villa;

public interface VillaDao extends JpaRepository<Villa, Long>{

//	List<Villa> findByStatusTrue();
//	boolean existsByname(String name);
//	@Query("select v from Villa v left join fetch v.villaitems where v.id=:id")
//	Optional<Villa> findById(Long id);
}
