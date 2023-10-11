package com.nocountry.inmuebles.controller;

import com.nocountry.inmuebles.model.entity.Property;
import com.nocountry.inmuebles.model.entity.PropertyRepository;
import com.nocountry.inmuebles.model.mapper.DTORegisterProperty;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/property")
public class PropertyController {

    @Autowired
    private PropertyRepository propertyRepository;

    //-------------------------------------------- Register Property Method --------------------------------------------
    @PostMapping
    public void registerProperty(@RequestBody DTORegisterProperty dtoRegisterProperty) {
        propertyRepository.save(new Property(dtoRegisterProperty));
        System.out.println("\n" + dtoRegisterProperty);
    }

}
