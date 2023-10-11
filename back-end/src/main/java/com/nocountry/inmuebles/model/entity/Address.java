package com.nocountry.inmuebles.model.entity;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Embeddable
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Address {

    //Class attributes
    private String street;
    private String number;
    private String complement;
    private String province;
    private String city;
    private String locationLat;
    private String locationLen;
}
