package com.SpringBoot.Online_springBoot_BackEnd.Service;

import com.SpringBoot.Online_springBoot_BackEnd.Model.Enum.Role;
import com.SpringBoot.Online_springBoot_BackEnd.Model.Login;
import com.SpringBoot.Online_springBoot_BackEnd.Model.User;
import com.SpringBoot.Online_springBoot_BackEnd.Repository.UserRepository;
import com.SpringBoot.Online_springBoot_BackEnd.Security.JwtUtils;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.HashMap;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthenticationService implements UserDetailsService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;

    public ResponseEntity<String > register(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        if (user.getRole() == null)
            user.setRole(Role.USER);
        userRepository.save(user);
        return new ResponseEntity<>("Registered Successfully...",HttpStatus.CREATED);
    }

    public ResponseEntity<?> login (Login login){
        try{
            Authentication authentication = new UsernamePasswordAuthenticationToken(login.getEmail(),login.getPassword());
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }catch (BadCredentialsException ex){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(" UserName And Password is inValid ......! ");
        }
        Optional<User> username = userRepository.findByEmail(login.getEmail());
        if(username.isPresent()){
            String Token = jwtUtils.generateToken(new HashMap<>(),username.get());
            return ResponseEntity.ok(Token);
        }else{
            return ResponseEntity.noContent().build();
        }
    }

    public String update(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole(Role.USER);
        userRepository.save(user);
        return " User Update Successfully .....! ";
    }

    public String delete (long id) {
        userRepository.deleteById(id);
        return " User Delete Successfully .....! ";
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException(" User Not Found with UserName : " + email));
    }

}

