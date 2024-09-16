package com.SpringBoot.Online_springBoot_BackEnd.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "products")
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @NotBlank(message = " Image is Mandatory ......! ")
    private String image;

    @NotBlank(message = " Name is Mandatory ......! ")
    private String name;

    @DecimalMin(value = "0.01", message = " Price Minimum value is 0.01 ......!  ")
    private double price;

    @NotBlank(message = " Description is Mandatory ......! ")
    @Size(min = 100,message = " Description Minimum Required 100 Words ......! ")
    private String description;

}

