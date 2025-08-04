//package com.sunbeam.entities;
//
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.FetchType;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.ManyToOne;
//import jakarta.persistence.Table;
//import jakarta.persistence.UniqueConstraint;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//import lombok.ToString;
//
//@Entity
//@Table(name="villa_items", uniqueConstraints = @UniqueConstraint
//(columnNames = {"itesm_name", "villa_id"}))
//
//@NoArgsConstructor
//@ToString(callSuper = true,exclude = "myVilla")
//@Getter
//@Setter
//
//
//public class VillaItem {
//	@Id
//	
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long id;  // primary key
//	@Column(name="item_name")
//	private String name;
//	@Column(name="item_location", length= 100)
//	private String location;
//	@Column(name="item_rentpernight")
//	private int rentpernight;
//	@Column(name="item_numberofbedrooms")
//	private int  numberOfBedrooms;
//	@Column(name="item_numberofbathrooms")
//	private int  numberOfBathrooms;
//	@Column(name="item_capacity")
//	private int  capacity;
//	@Column(name="item_details")
//	private String  deatils;
//	
////	@ManyToOne(fetch = FetchType.LAZY)
//	
//	public VillaItem(String name, String location, int rentpernight, int numberOfBedrroms, int numberOfBathrooms, int capacity, String details )
//	{
//		super();
//		this.name = name;
//		this.location= location;
//		this.rentpernight = rentpernight;
//		this.numberOfBedrooms = numberOfBedrooms;
//		this.numberOfBathrooms = numberOfBathrooms;
//		this.capacity = capacity;
//		this.deatils = details;
//	}
//
//	public void setMyVilla(Villa villa) {
//		// TODO Auto-generated method stub
//		
//	}
//
//}
