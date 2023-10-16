package com.ravenclaw.harmony.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.ravenclaw.harmony.config.AuthenticationResponse;
import com.ravenclaw.harmony.dto.UserListResponseDTO;
import com.ravenclaw.harmony.model.User;
import com.ravenclaw.harmony.service.AuthenticationService;

import lombok.RequiredArgsConstructor;
@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {
	private final AuthenticationService service;
@PostMapping("/register")
public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) throws Exception
{
	return ResponseEntity.ok(service.register(request));
}
@PostMapping("/authenticate")
public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) throws Exception
{
	return ResponseEntity.ok(service.authenticate(request));
}

@PutMapping("/isNewUser")
public void update(@RequestParam boolean isNewUser )
{
	service.UpdateNewUser(isNewUser);
}
@GetMapping("/user/{userId}")
public ResponseEntity<UserListResponseDTO> getUserById(@PathVariable Integer userId) {
    User user = service.getUserById(userId);

    if (user != null) {
        UserListResponseDTO UserListResponseDTO = mapUserToUserListResponseDTO(user);
        return ResponseEntity.ok(UserListResponseDTO);
    } else {
        return ResponseEntity.notFound().build();
    }
}

private UserListResponseDTO mapUserToUserListResponseDTO(User user) {
    UserListResponseDTO UserListResponseDTO = new UserListResponseDTO();
    UserListResponseDTO.setId(user.getOrgID());
    UserListResponseDTO.setUsername(user.getUsername());
    UserListResponseDTO.setDescription(user.getDescription());
   UserListResponseDTO.setName(user.getName());
    return UserListResponseDTO;
}

}
