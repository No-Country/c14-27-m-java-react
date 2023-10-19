package com.nocountry.inmuebles.service.abstraction;

import com.nocountry.inmuebles.model.mapper.DTORegisterProperty;
import com.nocountry.inmuebles.model.request.PropertyRequest;
import com.nocountry.inmuebles.model.response.PropertyResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface PropertyService {
    Page<DTORegisterProperty> findAll(String province, String city, Boolean noted, Pageable pageable);
}
