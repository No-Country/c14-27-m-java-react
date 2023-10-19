package com.nocountry.inmuebles.controller;

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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@RequiredArgsConstructor
@RestController
@RequestMapping("/property")
public class PropertyController {

    private final PropertyService propertyService;
    private final AwsService awsService;

    /*Método de prueba: funciona*/
    @PostMapping("/addImage")
    public Image registerProperty(@RequestParam(value = "img", required = false)MultipartFile img) throws IOException {
        return awsService.uploadImage(img);
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
