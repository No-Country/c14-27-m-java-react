package com.nocountry.inmuebles.model.mapper;

public record DTORegisterProperty(
        String propertyType,
        DTOAddress address,
        String price,
        String squareMeter,
        String bedrooms,
        String bathrooms,
        String contractType,
        String state,
        String userRegistration,
        String propertyImage,
        String registrationDate,
        String registrationTime,
        String name,
        String description) {
}
