package com.ravenclaw.events.dto;

import java.time.LocalDate;
import java.util.List;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EventRequestDTO {
    private String name;
    private String type;
    private String description;
    private String address;
    private List<String> images; 
    private LocalDate eventDate;
}