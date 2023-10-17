package com.nocountry.inmuebles.service.impl;

import com.nocountry.inmuebles.model.mapper.DTORegisterProperty;
import com.nocountry.inmuebles.model.mapper.PropertyMapper;
import com.nocountry.inmuebles.repository.PropertyRepository;
import com.nocountry.inmuebles.service.abstraction.PropertyService;
import com.nocountry.inmuebles.util.PropertySpecification;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class PropertyServiceImpl implements PropertyService {

    private final PropertyRepository propertyRepository;

    private final PropertyMapper propertyMapper;
    @Override
    public Page<DTORegisterProperty> findAll(String province, String city, Boolean noted, Pageable pageable) {
        PropertySpecification specification = new PropertySpecification(noted,province,city);
        return propertyRepository.findAll(specification,pageable).map(propertyMapper::toDto);
    }
}
