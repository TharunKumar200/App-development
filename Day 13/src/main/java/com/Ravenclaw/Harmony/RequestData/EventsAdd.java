package com.ravenclaw.harmony.RequestData;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EventsAdd {
    private String eventid;
    private String eventname;
    private String eventdate;
    private String eventlocation;
}