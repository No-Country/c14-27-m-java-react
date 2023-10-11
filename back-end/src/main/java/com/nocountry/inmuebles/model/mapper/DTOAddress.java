package com.nocountry.inmuebles.model.mapper;

public record DTOAddress(
        String street,
        String number,
        String complement,
        String province,
        String city,
        String locationLat,
        String locationLen) {
}
