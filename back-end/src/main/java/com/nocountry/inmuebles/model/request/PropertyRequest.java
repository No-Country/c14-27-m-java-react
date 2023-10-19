package com.nocountry.inmuebles.model.request;

import com.nocountry.inmuebles.model.entity.Address;
import com.nocountry.inmuebles.model.entity.Image;
import com.nocountry.inmuebles.model.entity.PropertyType;
import com.nocountry.inmuebles.model.entity.User;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Builder
public class PropertyRequest {
    @NotBlank private Long property_type_id;
    @NotBlank private Address address;
    @NotBlank private Long province_id;
    @NotBlank private Long city_id;
    @NotBlank private String price;
    @NotBlank private String square_meter;
    @NotBlank private String bedrooms;
    @NotBlank private String contract_type;
    @NotBlank private String state;
    @NotBlank private Long user_id;
    @NotBlank private String registration_date;
    @NotBlank private String registration_time;
    @NotBlank private String name;
    private String description;
    @NotBlank private Boolean noted;
}
