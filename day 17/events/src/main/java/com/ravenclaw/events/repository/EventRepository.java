package com.ravenclaw.events.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ravenclaw.events.model.Event;


@Repository
public interface EventRepository  extends JpaRepository<Event, Integer>  {


}
