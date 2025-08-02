package com.sunbeam.entities;

import java.time.LocalDate;

import com.sunbeam.enums.Gender;
import com.sunbeam.enums.Status;
import com.sunbeam.supperclass.SupperClass;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;




@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "users", schema = "club")
public class User extends SupperClass{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    @Column(nullable = false, length = 100)
    private String email;

    @Column(nullable = false, length = 255)
    private String password;

    @Column(name = "first_name", nullable = false, length = 50)
    private String firstName;

    @Column(name = "last_name", length = 50)
    private String lastName;
    
    @Column(name = "Dob", length = 50)
    private LocalDate dob;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(length = 15)
    private String phone;

    @Column(columnDefinition = "TEXT")
    private String address;

    @Column(nullable = false, length = 100)
    private String occupation;


    @Column(name = "profile_picture", length = 255)
    private String profilePicture;

    @Column(name = "is_verified", columnDefinition = "TINYINT(1)")
    private Boolean isVerified = false;

    @Enumerated(EnumType.STRING)
    private Status status = Status.ACTIVE;




    


    
    



	
	
 

    
}