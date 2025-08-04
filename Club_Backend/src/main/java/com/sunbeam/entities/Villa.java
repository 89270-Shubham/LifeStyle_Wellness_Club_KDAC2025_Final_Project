package com.sunbeam.entities;




import com.sunbeam.enums.Status;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Villa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String location;
    private int rentPerNight;
    private int numberOfBedrooms;
    private int numberofBathrooms;
    private int capacity;
    private String details;
    private Status status;

//    @OneToMany(mappedBy = "myVilla", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
//    private List<VillaItem> villaitems = new ArrayList<>();
//
//    public Villa(String name, String location, int rentPerNight, int numberOfBedrooms, int numberOfBathrooms, int capacity, String details) {
//        this.name = name;
//        this.location = location;
//        this.rentPerNight = rentPerNight;
//        this.numberOfBedrooms = numberOfBedrooms;
//        this.numberofBathrooms = numberOfBathrooms;
//        this.capacity = capacity;
//        this.details = details;
//    }
//
//    // Optional helper methods:
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
