package com.nocountry.inmuebles.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/property")
public class PropertyController {

    //-------------------------------------------- Register Property Method --------------------------------------------
    @PostMapping
    public void registerProperty(@RequestBody String parametro) {
        System.out.println(parametro);
    }
}
