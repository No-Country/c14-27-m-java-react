package com.nocountry.inmuebles.service.abstraction;

import com.nocountry.inmuebles.model.mapper.DTORegisterProperty;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface PropertyService {
    Page<DTORegisterProperty> findAll(String province, String city, Boolean noted, Pageable pageable);
}
