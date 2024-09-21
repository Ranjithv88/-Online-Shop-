package com.SpringBoot.Online_springBoot_BackEnd.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class TestingController {

        @GetMapping("/test")
        public String test (){
            return " Testing Api .......!  ";
        }

}

