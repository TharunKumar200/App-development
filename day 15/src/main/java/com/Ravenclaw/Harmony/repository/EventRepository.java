package com.ravenclaw.harmony.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ravenclaw.harmony.model.Events;

public interface EventRepository extends JpaRepository<Events, String>{
    Events findByEventid(String id);
}
