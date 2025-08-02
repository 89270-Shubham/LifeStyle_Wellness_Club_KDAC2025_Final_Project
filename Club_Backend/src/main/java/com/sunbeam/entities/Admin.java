package com.sunbeam.entities;


import com.sunbeam.supperclass.SupperClass;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name="admin")
public class Admin extends SupperClass{
	
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long UserId;
	 
	 private  String admin_name;
	 
	 private String email;
	 
	 private String password;
	 
	
	
}
