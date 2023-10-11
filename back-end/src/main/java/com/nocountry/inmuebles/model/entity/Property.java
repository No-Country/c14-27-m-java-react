package com.nocountry.inmuebles.model.entity;

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
    private Long id_building;
    private String buildingType;
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

}
