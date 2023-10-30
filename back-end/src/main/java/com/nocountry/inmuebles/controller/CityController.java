package com.nocountry.inmuebles.controller;

import com.nocountry.inmuebles.model.entity.City;
import com.nocountry.inmuebles.service.abstraction.CityService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/city")
@RequiredArgsConstructor
public class CityController {
    private final CityService cityService;
    @GetMapping("{id}")
    public List<City> getAllCities(@PathVariable("id") Long idProvince){
        return cityService.getAllCities(idProvince);
    }
}
