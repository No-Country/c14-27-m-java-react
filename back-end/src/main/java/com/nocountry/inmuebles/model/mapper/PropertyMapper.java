package com.nocountry.inmuebles.model.mapper;

import com.nocountry.inmuebles.model.entity.Address;
import com.nocountry.inmuebles.model.entity.Property;

public interface PropertyMapper {
    /**
     * DtoAddress to Entity
     * @param address DTO Address
     * @return Entity Address
     */
    Address toEntityAddress(DTOAddress address);

    /**
     * Entity Address to Dto
     * @param entity Entity Address
     * @return Dto Address
     */
    DTOAddress toDtoAddress(Address entity);

    /**
     * DtoProperty to Entity
     * @param dto DTO property
     * @return Entity Property
     */
    Property toEntity(DTORegisterProperty dto);

    /**
     * Entity Propery to DtoProperty
     * @param entity Entity Property
     * @return Dto Property
     */
    // Entity ---> DTO
    DTORegisterProperty toDto(Property entity);
}
