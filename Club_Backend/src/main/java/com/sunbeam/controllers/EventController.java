package com.sunbeam.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dao.AddEventDao;
import com.sunbeam.dto.AddEventDto;
import com.sunbeam.serviceimpl.AddEventServiceImp;
import com.sunbeam.services.AddEventService;
import com.sunbeam.services.EventService;
import com.sunbeam.services.UserService;

import lombok.AllArgsConstructor;

@RestController

@RequestMapping("/events")

@CrossOrigin(origins = "http://localhost:4000")



public class EventController {

    private AddEventServiceImp addEventServiceImp;

	private AddEventService addeventserviceImp;

	

    EventController(AddEventServiceImp addEventServiceImp) {
        this.addEventServiceImp = addEventServiceImp;
    }

	@PostMapping("/add")
	public ResponseEntity<?> addEvent(@RequestBody AddEventDto addeventdto) {
		System.out.println(addeventdto);

		return ResponseEntity.status(HttpStatus.CREATED).body(addeventserviceImp.addNewEvent(addeventdto));
	}
	
	
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
					.ok(addEventServiceImp.deleteDetails(eventid));

	}
	

}
