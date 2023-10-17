package com.nocountry.inmuebles.model.mapper;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;

@Builder
public record DTORegisterProperty(
        Long id,
        @NotBlank String propertyType,
        @NotNull @Valid DTOAddress address,
        @NotBlank String price,
        @NotBlank String squareMeter,
        @NotBlank String bedrooms,
        @NotBlank String bathrooms,
        @NotBlank String contractType,
        @NotBlank String state,
        @NotBlank String userRegistration,
        @NotBlank String propertyImage,
        @NotBlank String registrationDate,
        @NotBlank String registrationTime,
        @NotBlank String name,
        @NotBlank String description,
        @NotBlank Boolean noted
        ) {
}
