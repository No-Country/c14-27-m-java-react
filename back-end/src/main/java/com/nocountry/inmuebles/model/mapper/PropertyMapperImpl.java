package com.nocountry.inmuebles.model.mapper;


import com.nocountry.inmuebles.model.entity.Address;
import com.nocountry.inmuebles.model.entity.Property;
import org.springframework.stereotype.Component;

@Component
public class PropertyMapperImpl implements PropertyMapper{
    @Override
    public Address toEntityAddress(DTOAddress address) {
        return Address.builder()
                .city(address.city())
                .complement(address.complement())
                .location_lat(address.locationLat())
                .location_len(address.locationLen())
                .street(address.street())
                .province(address.province())
                .number(address.number())
                .build();
    }

    @Override
    public DTOAddress toDtoAddress(Address entity) {
        return DTOAddress.builder()
                .city(entity.getCity())
                .complement(entity.getComplement())
                .locationLat(entity.getLocation_lat())
                .locationLen(entity.getLocation_len())
                .number(entity.getNumber())
                .province(entity.getProvince())
                .street(entity.getStreet())
                .build();
    }

    @Override
    public Property toEntity(DTORegisterProperty dto) {
        return Property.builder()
                .id(dto.id())
                .noted(dto.noted())
                .description(dto.description())
                .name(dto.name())
                .price(dto.price())
                .property_image(dto.propertyImage())
                .state(dto.state())
                .bathrooms(dto.bathrooms())
                .bedrooms(dto.bedrooms())
                .contract_type(dto.contractType())
                .property_type(dto.propertyType())
                .registration_date(dto.registrationDate())
                .registration_time(dto.registrationTime())
                .square_meter(dto.squareMeter())
                .user_registration(dto.userRegistration())
                .address(toEntityAddress(dto.address()))
                .build();
    }

    @Override
    public DTORegisterProperty toDto(Property entity) {
        return DTORegisterProperty.builder()
                .id(entity.getId())
                .noted(entity.getNoted())
                .description(entity.getDescription())
                .name(entity.getName())
                .price(entity.getPrice())
                .propertyImage(entity.getProperty_image())
                .state(entity.getState())
                .bathrooms(entity.getBathrooms())
                .bedrooms(entity.getBedrooms())
                .contractType(entity.getContract_type())
                .propertyType(entity.getProperty_type())
                .registrationDate(entity.getRegistration_date())
                .registrationTime(entity.getRegistration_time())
                .squareMeter(entity.getSquare_meter())
                .userRegistration(entity.getUser_registration())
                .address(toDtoAddress(entity.getAddress()))
                .build();
    }
}
