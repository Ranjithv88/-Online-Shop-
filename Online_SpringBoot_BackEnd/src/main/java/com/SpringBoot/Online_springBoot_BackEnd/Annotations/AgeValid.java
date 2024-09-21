package com.SpringBoot.Online_springBoot_BackEnd.Annotations;

import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class AgeValid implements ConstraintValidator<Decimal, Integer> {

    @Override
    public boolean isValid(Integer age, ConstraintValidatorContext constraintValidatorContext) {
        return age == null || (age > 1 && age < 2) ;
    }

}

