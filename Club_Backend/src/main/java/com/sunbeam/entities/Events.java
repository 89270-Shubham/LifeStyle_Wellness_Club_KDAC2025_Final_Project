package com.sunbeam.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.sunbeam.dto.UserDto;
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
import jakarta.persistence.JoinTable;
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
@ToString(exclude = "allUsers")
@Table
@EqualsAndHashCode(of = "name", callSuper = false)
public class Events extends SupperClass {
	
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;

	private String description;

	private String location;

	private LocalDateTime start_time;
	
	private LocalDateTime end_time;

	private String organiser_name;

	private String event_type;

	private Long fee;
	
	private Status status;
	
	private String created_by;
	
	
//	@ManyToMany(mappedBy = "myEvents", 
//			cascade = CascadeType.ALL)
//	List<User> allUsers = new ArrayList<>();
	
	 @OneToMany(mappedBy = "event", cascade = CascadeType.ALL, orphanRemoval = true)
	    private List<UserEvent> userEvents = new ArrayList<>();

	    // Helper methods
	    public void addUser(User user) {
	        if (user == null) {
	            throw new IllegalArgumentException("User cannot be null");
	        }
	        
	        UserEvent userEvent = new UserEvent(user, this);
	        if (!userEvents.contains(userEvent)) {
	            userEvents.add(userEvent);
	            user.getUserEvents().add(userEvent);
	        }
	    }

	    public void removeUser(User user) {
	        if (user == null) {
	            throw new IllegalArgumentException("User cannot be null");
	        }
	        
	        UserEvent userEvent = new UserEvent(user, this);
	        user.getUserEvents().remove(userEvent);
	        userEvents.remove(userEvent);
	    }
	    
	    // Get users through the join entity
	    public List<User> getUsers() {
	        return userEvents.stream()
	                .map(UserEvent::getUser)
	                .collect(Collectors.toList());
	    }
	    
	    
	    // Find specific UserEvent relationship
	    public Optional<UserEvent> getUserEvent(User user) {
	        return userEvents.stream()
	                .filter(ue -> ue.getUser().equals(user))
	                .findFirst();
	    }


}
