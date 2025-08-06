package com.sunbeam.entities;



import com.sunbeam.enums.Status;
import com.sunbeam.supperclass.SupperClass;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table

public class Villa extends SupperClass {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    
    private String description;
    
    private String location;
    
    private int capacity;
    
    private int bedrooms;
    
    private int bathrooms;
    
    private double price_per_night;
    
    private Status status;
    
    private String image_url;
    
    
  @ManyToOne(fetch=FetchType.LAZY) 
  @JoinColumn(name="user_id", nullable=false)   
  private User myusers;    
    
     
}
