package com.nocountry.inmuebles.model.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Table(name = "property_type")
@EqualsAndHashCode(of = "id")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor @Builder
public class PropertyType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String description;
    @OneToMany(mappedBy = "property_type", cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    private List<Property> properties;
}
