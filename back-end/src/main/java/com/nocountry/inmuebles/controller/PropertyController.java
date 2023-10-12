package com.nocountry.inmuebles.controller;

import com.nocountry.inmuebles.model.entity.Property;
import com.nocountry.inmuebles.model.mapper.DTORegisterProperty;
import com.nocountry.inmuebles.repository.PropertyRepository;
import com.nocountry.inmuebles.service.abstraction.PropertyService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RequiredArgsConstructor
@RestController
@RequestMapping("/property")
public class PropertyController {

    @Autowired
    private PropertyRepository propertyRepository;

    private final PropertyService propertyService;

    //-------------------------------------------- Register Property Method --------------------------------------------
    @PostMapping
    public void registerProperty(@RequestBody @Valid DTORegisterProperty dtoRegisterProperty) {
        propertyRepository.save(new Property(dtoRegisterProperty));
        System.out.println("\n" + dtoRegisterProperty);
    }

    //-------------------------------------------- FindAll with Filters ----------------------------------------------//
    @GetMapping
    public ResponseEntity<Page<DTORegisterProperty>> findAll(@RequestParam(required = false) Boolean noted,
                                                  @RequestParam(required = false) String province,
                                                  @RequestParam(required = false) String city,
                                                  Pageable pageable){
        return ResponseEntity.ok(propertyService.findAll(province,city,noted,pageable));
    }
}
