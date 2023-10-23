package com.nocountry.inmuebles.controller;

import com.nocountry.inmuebles.InmueblesApplication;
import com.nocountry.inmuebles.model.entity.City;
import com.nocountry.inmuebles.model.entity.Image;
import com.nocountry.inmuebles.model.entity.Property;
import com.nocountry.inmuebles.model.mapper.DTORegisterProperty;
import com.nocountry.inmuebles.model.request.PropertyRequest;
import com.nocountry.inmuebles.model.response.PropertyResponse;
import com.nocountry.inmuebles.repository.PropertyRepository;
import com.nocountry.inmuebles.service.abstraction.AwsService;
import com.nocountry.inmuebles.service.abstraction.PropertyService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("/property")
public class PropertyController {
    private static final Logger logger = LoggerFactory.getLogger(InmueblesApplication.class);
    private final PropertyService propertyService;
    private final AwsService awsService;

    //-------------------------------------------- Register Property Method --------------------------------------------
    @PostMapping("/add")
    public PropertyResponse registerProperty(@RequestPart(value = "img", required = false)List<MultipartFile> img,
                                             @RequestPart PropertyRequest propertyRequest) {
        return propertyService.createProperty(img, propertyRequest);
    }
    @GetMapping("/all")
    public List<PropertyResponse> getAll(){
        return propertyService.getAll();
    }
    @GetMapping("{id}")
    public PropertyResponse getById(@PathVariable("id") Long id){
        return propertyService.getById(id);
    }
    @PutMapping("{id}")
    public void updateProperty(@PathVariable("id") Long id,@RequestBody PropertyRequest propertyRequest) throws Exception {
        propertyService.update(id, propertyRequest);
    }
    @DeleteMapping("{id}")
    public void deleteProperty(@PathVariable("id") Long id){
        propertyService.delete(id);
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
