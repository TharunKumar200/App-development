package com.ravenclaw.harmony.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name="event_details")
public class Events {
    @Id
    private String eventid;
    private String eventname;
    private String eventdate;
    private String eventlocation;
}
