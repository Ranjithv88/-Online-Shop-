package com.SpringBoot.Online_springBoot_BackEnd.Service;

import com.SpringBoot.Online_springBoot_BackEnd.Model.Products;
import com.SpringBoot.Online_springBoot_BackEnd.Repository.ProductsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductsService {

    private ProductsRepository repository;

    public List<Products> productsList() {
        return repository.findAll();
    }

    public String productsRegister(Products products) {
        repository.save(products);
        return " Product Register Successfully .....! ";
    }

    public String productsUpdate(Products products) {
        repository.save(products);
        return " Product Update Successfully .....! ";
    }

    public String productsDelete(long id) {
        repository.deleteById(id);
        return " Product Delete Successfully .....! ";
    }

}

