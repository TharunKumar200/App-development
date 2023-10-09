package com.ravenclaw.harmony.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ravenclaw.harmony.RequestData.EventsAdd;
import com.ravenclaw.harmony.model.Events;
import com.ravenclaw.harmony.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/org")
@RequiredArgsConstructor
public class EventController {
    
    private final AuthenticationService authservice;

    @GetMapping("/event/get")
    public List<Events> getEvents(){
        return authservice.getAllEvents();
    }

    @PostMapping("/event/post")
    public String AddEvents(@RequestBody EventsAdd events){
        return authservice.AddEvents(events);
    }

    @PutMapping("/event/put/{eventid}")
   public String UpdateEvent(@PathVariable String eventid, @RequestBody Events events){
    authservice.updateEvents(eventid, events);
    String updatedmessage = "Event Updated";
    return updatedmessage;
   }

    @DeleteMapping("/event/delete/{id}")
    public String deleteEvents(@PathVariable String id){
        authservice.deleteEvents(id);
        return "Event Deleted";
    }

}
