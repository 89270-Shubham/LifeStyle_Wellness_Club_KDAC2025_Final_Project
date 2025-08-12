package com.sunbeam.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sunbeam.enums.Status;
import com.sunbeam.supperclass.SupperClass;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Villa extends SupperClass {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

   
    private String name;
    
    private String description;
    
    private String location;
    private int rent_Per_Night;
    private int number_Of_Bedrooms;
    @Column(name = "number_of_bathrooms", nullable = false)
    private int numberOfBathrooms = 1; // default value
    private int capacity;
    private String details;
    private Status status;

    
    
  

    // Optional helper methods:
//    public void addVillaItem(VillaItem villaitem) {
//        villaitems.add(villaitem);
//        villaitem.setMyVilla(this);
//    }
//
//    public void removeVillaItem(VillaItem villaitem) {
//        villaitems.remove(villaitem);
//        villaitem.setMyVilla(null);
//    }
    
    
    
  @ManyToOne(fetch=FetchType.LAZY) 
  @JoinColumn(name="user_id", nullable=false)   
  @JsonIgnore
  private User myusers;    
    
     
}
