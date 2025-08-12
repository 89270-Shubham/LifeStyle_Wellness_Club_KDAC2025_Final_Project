package com.sunbeam.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dao.AddEventDao;
import com.sunbeam.dto.AddEventDto;
import com.sunbeam.dto.GetUserEventDto;
import com.sunbeam.serviceimpl.AddEventServiceImp;
import com.sunbeam.serviceimpl.EventServiceImpl;
import com.sunbeam.services.AddEventService;
import com.sunbeam.services.EventService;
import com.sunbeam.services.UserService;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@RestController
@RequestMapping("/events")
@CrossOrigin(origins = "http://localhost:4000")
@AllArgsConstructor
@Transactional
public class EventController {

	 private final AddEventServiceImp addeventserviceImp;
	 
	 
	 private EventServiceImpl eventService;
	 
//	    @Autowired // not mandatory on constructor from Spring 4.3+, but safe
//	    public EventController(EventService eventService) {
//	        this.eventService = eventService;
//	    }

	 
	 @PostMapping("/add")
	 public ResponseEntity<?> addEvent(@RequestBody AddEventDto addeventdto)
	 {
	     System.out.println(addeventdto);
	     
	     return ResponseEntity.status(HttpStatus.CREATED).body(addeventserviceImp.addNewEvent(addeventdto));
	 }
	 
	 
	@GetMapping("/all")
	public ResponseEntity<?> getAllEvents(){
			
	List<GetUserEventDto> list = addeventserviceImp.getAllAvailableEvents();
			
	if(list.isEmpty())
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
			
	return ResponseEntity.ok(list);
	}
		
	
	
	@GetMapping("/getbyid/{id}")
	public GetUserEventDto getEventById(Long id){
		 
	GetUserEventDto event = addeventserviceImp.getEventById(id);
		 
	return event; 
	}


	
    @Autowired
   public EventController(AddEventServiceImp addEventServiceImp) {
        this.addeventserviceImp = addEventServiceImp;
    }

    @GetMapping("/{id}")
	// swagger annotation
	@Operation(description = "Get restaurant details by id")
	public ResponseEntity<?> getEventsDetails(
			@PathVariable @NotNull @Min(1) @Max(100) Long id) {
		System.out.println("in get " + id);

		return ResponseEntity.ok(addeventserviceImp.getEventDetails(id));

	}

    
	// @PostMapping("/add")
	// public ResponseEntity<?> addEvent(@RequestBody AddEventDto addeventdto) {
	// 	System.out.println(addeventdto);

	// 	return ResponseEntity.status(HttpStatus.CREATED).body(addEventServiceImp.addNewEvent(addeventdto));
	// }
	
	
	@PutMapping("/{eventid}")
	public ResponseEntity<?> updateEvent(@PathVariable Long eventid, @RequestBody AddEventDto addeventDto)
	{
		System.out.println("Inupdated " +addeventDto);
		return  ResponseEntity.ok(addeventserviceImp.updateEvent(eventid, addeventDto));
	}
	
	@DeleteMapping("/{eventid}")
	public ResponseEntity<?> deleteDetails(@PathVariable 
			Long eventid)
	{
		System.out.println("in delete "+eventid);
	
			//invoke servlice layer's method
			return ResponseEntity
					.ok(addeventserviceImp.deleteDetails(eventid));

	}


}