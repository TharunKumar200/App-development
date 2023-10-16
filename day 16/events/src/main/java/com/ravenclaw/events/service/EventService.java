package com.ravenclaw.events.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ravenclaw.events.dto.EventRequestDTO;
import com.ravenclaw.events.dto.EventResponseDTO;
import com.ravenclaw.events.model.Event;
import com.ravenclaw.events.repository.EventRepository;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;
 
    public List<EventResponseDTO> getAllEventsAsResponseDTOs() {
        List<Event> events = eventRepository.findAll();

        return events.stream()
                .map(this::mapEventToEventResponseDTO)
                .collect(Collectors.toList());
    }

    public EventResponseDTO updateEvent(Integer eventID, EventRequestDTO eventRequestDTO) {
        Event existingEvent = eventRepository.findById(eventID).orElse(null);

        if (existingEvent == null) {
            return null;
        }

        existingEvent.setName(eventRequestDTO.getName());
        existingEvent.setType(eventRequestDTO.getType());
        existingEvent.setDescription(eventRequestDTO.getDescription());
        existingEvent.setAddress(eventRequestDTO.getAddress());
        existingEvent.setEventDate(eventRequestDTO.getEventDate());

        Event updatedEvent = eventRepository.save(existingEvent);

        EventResponseDTO responseDTO = mapEventToEventResponseDTO(updatedEvent);

        return responseDTO;
    }

    public EventResponseDTO getEvent(Integer eventID) {
        Event event = eventRepository.findById(eventID).orElse(null);

        if (event == null) {
            return null;
        }

        EventResponseDTO responseDTO = new EventResponseDTO();
        responseDTO.setEventID(event.getEventID());
        responseDTO.setName(event.getName());
        responseDTO.setType(event.getType());
        responseDTO.setDescription(event.getDescription());

        return responseDTO;
    }

    public EventResponseDTO createEvent(EventRequestDTO eventRequestDTO) {

        Event event = new Event();
        event.setName(eventRequestDTO.getName());
        event.setType(eventRequestDTO.getType());
        event.setDescription(eventRequestDTO.getDescription());
        event.setAddress(eventRequestDTO.getAddress());
        event.setEventDate(eventRequestDTO.getEventDate());

        Event createdEvent = eventRepository.save(event);

        EventResponseDTO responseDTO = new EventResponseDTO();
        responseDTO.setEventID(createdEvent.getEventID());
        responseDTO.setName(createdEvent.getName());
        responseDTO.setType(createdEvent.getType());
        responseDTO.setDescription(createdEvent.getDescription());
        responseDTO.setAddress(createdEvent.getAddress());
        responseDTO.setEventDate(createdEvent.getEventDate());

        return responseDTO;
    }
    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    public Event getEventById(Integer eventId) {
        Optional<Event> eventOptional = eventRepository.findById(eventId);
        return eventOptional.orElse(null);
    }

    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public Event updateEvent(Event event) {
        return eventRepository.save(event);
    }

    public void deleteEvent(Integer eventId) {
        eventRepository.deleteById(eventId);
    }


    private EventResponseDTO mapEventToEventResponseDTO(Event event) {
        EventResponseDTO responseDTO = new EventResponseDTO();
        responseDTO.setEventID(event.getEventID());
        responseDTO.setName(event.getName());
        responseDTO.setType(event.getType());
        responseDTO.setDescription(event.getDescription());
        responseDTO.setAddress(event.getAddress());
        responseDTO.setEventDate(event.getEventDate());

        return responseDTO;
    }
}