package com.nocountry.inmuebles.model.mapper;

import jakarta.validation.constraints.NotBlank;

public record DTOAddress(
        @NotBlank String street,
        @NotBlank String number,
        @NotBlank String complement,
        @NotBlank String province,
        @NotBlank String city,
        @NotBlank String locationLat,
        @NotBlank String locationLen) {
}
