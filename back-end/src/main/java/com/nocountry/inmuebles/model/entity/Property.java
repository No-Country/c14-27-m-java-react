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
@EqualsAndHashCode(of = "id_property")
public class Property {

    //Class attributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_property;
    private String propertyType;
    @Embedded
    private Address address;
    private String price;
    private String squareMeter;
    private String bedrooms;
    private String bathrooms;
    private String contractType;
    private String state;
    private String userRegistration;
    private String propertyImage;
    private String registrationDate;
    private String registrationTime;
    private String name;
    private String description;
    private Boolean noted;

    //-------------------------------------------------- Constructor ---------------------------------------------------
    public Property(DTORegisterProperty dtoRegisterProperty) {
        this.propertyType = dtoRegisterProperty.propertyType();
        this.address = new Address(dtoRegisterProperty.address());
        this.price = dtoRegisterProperty.price();
        this.squareMeter = dtoRegisterProperty.squareMeter();
        this.bedrooms = dtoRegisterProperty.bedrooms();
        this.bathrooms = dtoRegisterProperty.bathrooms();
        this.contractType = dtoRegisterProperty.contractType();
        this.state = dtoRegisterProperty.state();
        this.userRegistration = dtoRegisterProperty.userRegistration();
        this.propertyImage = dtoRegisterProperty.propertyImage();
        this.registrationDate = dtoRegisterProperty.registrationDate();
        this.registrationTime = dtoRegisterProperty.registrationTime();
        this.name = dtoRegisterProperty.name();
        this.description = dtoRegisterProperty.description();
    }

}
