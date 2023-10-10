package com.nocountry.inmuebles.controller;

import com.nocountry.inmuebles.model.mapper.DTORegisterProperty;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/property")
public class PropertyController {

    //-------------------------------------------- Register Property Method --------------------------------------------
    @PostMapping
    public void registerProperty(@RequestBody DTORegisterProperty propertyController) {
        System.out.println("\n" + propertyController);
    }
}
