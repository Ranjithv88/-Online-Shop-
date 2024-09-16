package com.App.Login.Log;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Aspect
@Component
@Slf4j
public class LogAspect {

    @After("execution(* com.App.Login.Security.JwtUtils.extractEmail(..))")
    public void logExtractEmail () {
        log.info(" ExtractEmail SuccessFully ....! ");
    }

    @After("execution(* com.App.Login.Security.JwtUtils.key(..))")
    public void logKey () {
        log.info(" Key Generate SuccessFully ....! ");
    }

    @After("execution(* com.App.Login.Security.JwtUtils.extractClaims(..))")
    public void logExtractClaims () {
        log.info(" ExtractClaims SuccessFully ....! ");
    }

    @After("execution(* com.App.Login.Security.JwtUtils.extractRole(..))")
    public void logExtractRole () {
        log.info(" ExtractRole SuccessFully ....! ");
    }

    @After("execution(* com.App.Login.Security.JwtUtils.extractExpiration(..))")
    public void logExtractExpiration () {
        log.info(" ExtractExpiration SuccessFully ....! ");
    }

    @After("execution(* com.App.Login.Security.JwtUtils.validateExpiration(..))")
    public void logValidateExpiration () {
        log.info(" ValidateExpiration SuccessFully ....! ");
    }

    @After("execution(* com.App.Login.Security.JwtUtils.tokenValidation(..))")
    public void logTokenValidation () {
        log.info(" TokenValidation SuccessFully ....! ");
    }

    @Around("execution(*com.App.Login.Security.JwtUtils.*(..))")
    public void logJetUtils () {
        log.info(" Enter the JwtUtils Class  ....! ");
    }

    @Before("execution(* com.App.Login.Security.doFilterInternal(..))")
    public void logDoFilterInternal () {
        log.info(" Enter the Security Filter ....! ");
    }

    @Before("execution(* com.App.Login.Security.securityFilterChain(..))")
    public void logInSecurityFilterChain () {
        log.info(" Entry The SecurityConfiguration .......! ");
    }

    @After("execution(* com.App.Login.Security.securityFilterChain(..))")
    public void logOutSecurityFilterChain () {
        log.info(" Exit The SecurityConfiguration .......! ");
    }

}

