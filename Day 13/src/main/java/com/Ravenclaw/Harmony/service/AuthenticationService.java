package com.ravenclaw.harmony.service;



import java.util.List;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ravenclaw.harmony.RequestData.EventsAdd;
import com.ravenclaw.harmony.config.AuthenticationResponse;
import com.ravenclaw.harmony.controller.AuthenticationRequest;
import com.ravenclaw.harmony.controller.RegisterRequest;
import com.ravenclaw.harmony.model.Events;
import com.ravenclaw.harmony.model.User;
import com.ravenclaw.harmony.model.enumerate.Role;
import com.ravenclaw.harmony.repository.EventRepository;
import com.ravenclaw.harmony.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.var;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final PasswordEncoder passwordEncoder; // Use final here as well.
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final UserRepository repo; // Use final to indicate this field should not be reassigned.
    private final EventRepository eventRepo;


    public AuthenticationResponse register(RegisterRequest request) {
        var user =User.builder()
        		.firstname(request.getFirstname())
        		.lastname(request.getLastname())
        		.username(request.getUsername())
        		.password(passwordEncoder.encode(request.getPassword()))// Your code to save the user or perform other registration logic goes here.
        		.role(Role.USER)
        		.build();
        repo.save(user);
        var jwtToken=jwtService.generateToken(user);
        return AuthenticationResponse.builder()
        		.token(jwtToken)
        		.build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
      
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                    request.getUsername(), request.getPassword()
                )
            );
            System.out.println("apply");
            var user = repo.findByUsername(request.getUsername())
                .orElseThrow();
            var jwtToken = jwtService.generateToken(user);
            return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
     
    }

    //Events 

     public String AddEvents(EventsAdd request){
        var events = Events.builder()
        .eventid(request.getEventid())
        .eventname(request.getEventname())
        .eventdate(request.getEventdate())
        .eventlocation(request.getEventlocation())
        .build();
        eventRepo.save(events);

        return "Event Added";
    }

    public List<Events> getAllEvents(){
        return eventRepo.findAll();
    }

    public void updateEvents(String id, Events updateevents){
        Events event = eventRepo.findByEventid(id);
        if(event!=null){
            event.setEventid(updateevents.getEventid());
            event.setEventname(updateevents.getEventname());
            event.setEventlocation(updateevents.getEventlocation());
            event.setEventdate(updateevents.getEventdate());
            eventRepo.save(event);
        }
    }

    public void deleteEvents(String id){
        Events events = eventRepo.findByEventid(id);
        if(events!=null){
            eventRepo.deleteById(id);
        }
    }


}
