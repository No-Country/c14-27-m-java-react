package com.nocountry.inmuebles.model.mapper;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

import java.util.List;

@Builder
public record DTORegisterProperty(
        Long id,
        @NotBlank DTOPropertyType property_type_id,
        @NotNull @Valid DTOAddress address,
        @NotBlank DTOProvince province,
        @NotBlank DTOCity city,
        @NotBlank String price,
        @NotBlank String squareMeter,
        @NotBlank String bedrooms,
        @NotBlank String bathrooms,
        @NotBlank String contractType,
        @NotBlank String state,
        @NotBlank DTOUser userRegistration,
        @NotBlank List<DTOImage> propertyImage,
        @NotBlank String registrationDate,
        @NotBlank String registrationTime,
        @NotBlank String name,
        @NotBlank String description,
        @NotBlank Boolean noted
        ) {
}
