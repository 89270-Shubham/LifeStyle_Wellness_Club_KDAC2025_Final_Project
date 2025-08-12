package com.sunbeam.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BookingDto {

    private Long booking_id;

    private  Long user_id;

    private Long villa_id;

    private LocalDate booking_date;

    private LocalDateTime check_in;

    private LocalDateTime check_out;

    private int no_of_guests;

    private double total_amount;
}
