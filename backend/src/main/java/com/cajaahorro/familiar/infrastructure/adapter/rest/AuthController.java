package com.cajaahorro.familiar.infrastructure.adapter.rest;

import com.cajaahorro.familiar.application.dto.AuthRequest;
import com.cajaahorro.familiar.application.dto.AuthResponse;
import com.cajaahorro.familiar.infrastructure.adapter.persistence.UserEntity;
import com.cajaahorro.familiar.infrastructure.adapter.persistence.UserRepository;
import com.cajaahorro.familiar.infrastructure.config.JwtService;
import com.cajaahorro.familiar.domain.model.Role;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody AuthRequest request) {
        var user = UserEntity.builder()
                .username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.USUARIO) // Por defecto
                .build();
        userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return ResponseEntity.ok(AuthResponse.builder().token(jwtToken).build());
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()));
        var user = userRepository.findByUsername(request.getUsername())
                .orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return ResponseEntity.ok(AuthResponse.builder().token(jwtToken).build());
    }
}
