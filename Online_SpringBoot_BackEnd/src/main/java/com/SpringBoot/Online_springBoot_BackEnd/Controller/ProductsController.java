package com.SpringBoot.Online_springBoot_BackEnd.Controller;

import com.SpringBoot.Online_springBoot_BackEnd.Model.Products;
import com.SpringBoot.Online_springBoot_BackEnd.Model.User;
import com.SpringBoot.Online_springBoot_BackEnd.Service.ProductsService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class ProductsController {

    private final ProductsService service;

    @GetMapping("/product/list")
    public ResponseEntity<List<Products>> get () {
        return ResponseEntity.ok().body(service.productsList());
    }

    @PostMapping("/product/register")
    public ResponseEntity<String> post (@Valid @RequestBody Products product) {
        return ResponseEntity.ok().body(service.productsRegister(product));
    }

    @PutMapping("/product/update")
    public ResponseEntity<String> put (@Valid  @RequestBody Products products,@PathVariable long id) {
        products.setId(id);
        return ResponseEntity.ok().body(service.productsUpdate(products));
    }

    @DeleteMapping("/product//delete")
    public ResponseEntity<String> delete (@Valid @PathVariable long id) {
        return ResponseEntity.ok().body(service.productsDelete(id));
    }

}

