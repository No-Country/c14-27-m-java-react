package com.nocountry.inmuebles.model.entity;

import com.nocountry.inmuebles.model.mapper.DTOAddress;
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
    private String location_lat;
    private String location_len;

    //-------------------------------------------------- Constructor ---------------------------------------------------
    public Address(DTOAddress address) {
        this.street = address.street();
        this.number = address.number();
        this.complement = address.complement();
        this.province = address.province();
        this.city = address.city();
        location_lat = address.locationLat();
        location_len = address.locationLen();

    }
}
