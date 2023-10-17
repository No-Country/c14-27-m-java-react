package com.nocountry.inmuebles.util;


import com.nocountry.inmuebles.model.entity.Property;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import lombok.AllArgsConstructor;
import org.springframework.data.jpa.domain.Specification;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
public class PropertySpecification implements Specification<Property> {

    private Boolean noted;
    private String province;
    private String city;

    @Override
    public Predicate toPredicate(Root<Property> root, CriteriaQuery<?> query, CriteriaBuilder cb) {
        List<Predicate> lista = new ArrayList<>();
        if(noted!=null){
            lista.add(cb.equal(root.get("noted"),noted));
        }
        if(province!=null){
            lista.add(cb.equal(root.get("address").get("province"),province));
        }
        if(city!=null){
            lista.add(cb.equal(root.get("address").get("city"),city));
        }
        return cb.and(lista.toArray(new Predicate[lista.size()]));
    }
}
