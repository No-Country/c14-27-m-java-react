package com.nocountry.inmuebles.model.entity;

import com.nocountry.inmuebles.model.mapper.DTORegisterProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "property")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Property {

    //Class attributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String property_type;
    @Embedded
    private Address address;
    private String price;
    private String square_meter;
    private String bedrooms;
    private String bathrooms;
    private String contract_type;
    private String state;
    private String user_registration;
    private String property_image;
    private String registration_date;
    private String registration_time;
    private String name;
    private String description;
//    private Boolean noted;

    //-------------------------------------------------- Constructor ---------------------------------------------------
    public Property(DTORegisterProperty dtoRegisterProperty) {
        property_type = dtoRegisterProperty.propertyType();
        this.address = new Address(dtoRegisterProperty.address());
        this.price = dtoRegisterProperty.price();
        square_meter = dtoRegisterProperty.squareMeter();
        this.bedrooms = dtoRegisterProperty.bedrooms();
        this.bathrooms = dtoRegisterProperty.bathrooms();
        contract_type = dtoRegisterProperty.contractType();
        this.state = dtoRegisterProperty.state();
        user_registration = dtoRegisterProperty.userRegistration();
        property_image = dtoRegisterProperty.propertyImage();
        registration_date = dtoRegisterProperty.registrationDate();
        registration_time = dtoRegisterProperty.registrationTime();
        this.name = dtoRegisterProperty.name();
        this.description = dtoRegisterProperty.description();
    }

}
