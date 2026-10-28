package com.portfolio.service;

import com.portfolio.dto.AuthResponse;
import com.portfolio.dto.LoginRequest;
import com.portfolio.entity.Admin;
import com.portfolio.repository.AdminRepository;
import com.portfolio.security.AdminUserDetails;
import com.portfolio.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final AdminRepository adminRepository;

    public AuthResponse login(LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );

        AdminUserDetails userDetails = (AdminUserDetails) authentication.getPrincipal();
        String token = jwtService.generateToken(userDetails);
        Admin admin = userDetails.getAdmin();

        return AuthResponse.builder()
                .token(token)
                .type("Bearer")
                .user(AuthResponse.UserDto.builder()
                        .id(admin.getId())
                        .name(admin.getName())
                        .email(admin.getEmail())
                        .role(admin.getRole())
                        .build())
                .build();
    }
}
