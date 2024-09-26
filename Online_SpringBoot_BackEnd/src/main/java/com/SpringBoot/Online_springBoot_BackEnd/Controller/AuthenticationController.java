package com.SpringBoot.Online_springBoot_BackEnd.Controller;

import com.SpringBoot.Online_springBoot_BackEnd.Model.Login;
import com.SpringBoot.Online_springBoot_BackEnd.Model.User;
import com.SpringBoot.Online_springBoot_BackEnd.Security.AuthenticationFilter;
import com.SpringBoot.Online_springBoot_BackEnd.Service.AuthenticationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins="http://localhost:5173",methods = {RequestMethod.GET,RequestMethod.POST})
@RestController
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;
    private final AuthenticationFilter filter;

    @PostMapping("/register")
    public ResponseEntity<?> register (@Valid @RequestBody User user) {
        return ResponseEntity.ok().body(service.register(user));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login ( @Valid @RequestBody Login login) {
        return service.login(login);
    }

    @PutMapping("/user/update")
    public ResponseEntity<String> update (@Valid  @RequestBody User user,@PathVariable long id) {
        user.setId(id);
        return ResponseEntity.ok().body(service.update(user));
    }

    @DeleteMapping("/user/delete")
    public ResponseEntity<String> delete (@Valid @PathVariable long id) {
        return ResponseEntity.ok().body(service.delete(id));
    }

    @GetMapping("/user/getByEmail")
    public String getByEmail () {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

}

