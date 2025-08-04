package com.sunbeam.entities;



import java.util.ArrayList;
import java.util.List;

import com.sunbeam.enums.Status;
import com.sunbeam.supperclass.SupperClass;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "villas")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Villa extends SupperClass{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

   
    private String name;

    private String location;
    private int rentPerNight;
    private int numberOfBedrooms;
    private int numberOfBathrooms;
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
}
