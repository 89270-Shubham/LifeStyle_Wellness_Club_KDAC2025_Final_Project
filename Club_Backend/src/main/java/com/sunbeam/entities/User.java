package com.sunbeam.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.sunbeam.enums.Gender;
import com.sunbeam.enums.Status;
import com.sunbeam.supperclass.SupperClass;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;




@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
//@ToString(exclude = "myEvents")
@Table(name = "users", schema = "club")
@ToString(callSuper = true, exclude = "villas")

@EqualsAndHashCode(of = "name", callSuper = false)
public class User extends SupperClass {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

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

    @Column(name = "phone")
    private String phone;

    @Column(columnDefinition = "TEXT")
    private String address;

    @Column(nullable = false, length = 100)
    private String occupation;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] profilePicture;

    @Column(name = "is_verified", columnDefinition = "TINYINT(1)")
    private Boolean isVerified = false;

    @Enumerated(EnumType.STRING)
    private Status status = Status.ACTIVE;

    
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<UserEvent> userEvents = new ArrayList<>();

    // Improved helper methods
    public void addEvent(Events event) {
        if (event == null) {
            throw new IllegalArgumentException("Event cannot be null");
        }
        
        UserEvent userEvent = new UserEvent(this, event);
        if (!userEvents.contains(userEvent)) {
            userEvents.add(userEvent);
            event.getUserEvents().add(userEvent);
        }
    }

    public void removeEvent(Events event) {
        if (event == null) {
            throw new IllegalArgumentException("Event cannot be null");
        }
        
        UserEvent userEvent = new UserEvent(this, event);
        event.getUserEvents().remove(userEvent);
        userEvents.remove(userEvent);
    }
    
    // Get events through the join entity
    public List<Events> getEvents() {
        return userEvents.stream()
                .map(UserEvent::getEvent)
                .collect(Collectors.toList());
    }
    
    // Find specific UserEvent relationship
    public Optional<UserEvent> getUserEvent(Events event) {
        return userEvents.stream()
                .filter(ue -> ue.getEvent().equals(event))
                .findFirst();
    }

     @OneToMany(mappedBy="myusers", cascade=CascadeType.ALL, orphanRemoval=true)
     private List<Villa> villalist=new ArrayList<>();

     public void addVillaItem(Villa villa)
     {
     this.villalist.add(villa);
     villa.setMyusers(this);
     }
    
     public void removeVillaItem(Villa villa)
     {
     this.villalist.remove(villa);
     villa.setMyusers(null);
     }

}