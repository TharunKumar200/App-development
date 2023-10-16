package com.ravenclaw.events.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ravenclaw.events.dto.EventRequestDTO;
import com.ravenclaw.events.dto.EventResponseDTO;
import com.ravenclaw.events.service.EventService;


@RestController
@RequestMapping("/ev")
@CrossOrigin(origins = "http://localhost:3000") 
public class EventController {

    @Autowired
    private EventService eventService;
   
  @GetMapping("/week")
  public String Sure()
  {
	  return "hello";
  }

    @PostMapping("/post")
    public ResponseEntity<EventResponseDTO> createEvent(@RequestBody EventRequestDTO eventRequestDTO) {
        EventResponseDTO responseDTO = eventService.createEvent(eventRequestDTO);

        return ResponseEntity.ok(responseDTO);
    }


    @GetMapping("/get/{eventID}")
    public ResponseEntity<EventResponseDTO> getEvent(@PathVariable Integer eventID) {
        EventResponseDTO responseDTO = eventService.getEvent(eventID);


        return ResponseEntity.ok(responseDTO);
    }

    @GetMapping("/get")
    public ResponseEntity<List<EventResponseDTO>> getAllEvents() {
        List<EventResponseDTO> responseDTOs = eventService.getAllEventsAsResponseDTOs();


        return ResponseEntity.ok(responseDTOs);
    }

    @PutMapping("/put/{eventID}")
    public ResponseEntity<EventResponseDTO> updateEvent(@PathVariable Integer eventID, @RequestBody EventRequestDTO eventRequestDTO) {
        EventResponseDTO responseDTO = eventService.updateEvent(eventID, eventRequestDTO);

        return ResponseEntity.ok(responseDTO);
    }

    @DeleteMapping("/del/{eventID}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Integer eventID) {
        eventService.deleteEvent(eventID);

        return ResponseEntity.noContent().build();
    }


}
