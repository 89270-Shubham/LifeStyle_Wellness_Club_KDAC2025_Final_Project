package com.sunbeam.serviceimpl;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.sunbeam.apiresponse.ApiResponse;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ProfileDto;
import com.sunbeam.dto.UserDto;
import com.sunbeam.dto.UserLoginDto;
import com.sunbeam.entities.User;
import com.sunbeam.globalexceptionhandler.AuthenticationFailureException;
import com.sunbeam.globalexceptionhandler.InvalidInputException;
import com.sunbeam.globalexceptionhandler.ResourceNotFoundException;
import com.sunbeam.services.UserService;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;

@Transactional
@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
	
	
	private UserDao userDao;
	private final ModelMapper modelMapper;

	@Override
	public User register(UserDto data) {
		User user = new User();
		
		user.setFirstName(data.getFirstName());
		user.setLastName(data.getLastName());
		user.setEmail(data.getEmail());
		user.setPassword(data.getPassword());
		user.setDob(data.getDob());
		user.setGender(data.getGender());
		user.setPhone(data.getPhone());
		user.setAddress(data.getAddress());
		user.setOccupation(data.getOccupation());
		
		return userDao.save(user);
		
	}

	@Override
	public UserLoginDto userLogin(UserLoginDto dto) {
		User entity=
				userDao.findByEmailAndPassword(dto.getEmail(), dto.getPassword())
				.orElseThrow(() -> new AuthenticationFailureException("Invalid email or password"));
				return modelMapper.map(entity, UserLoginDto.class);
	}
	
	
	@Override
	public ProfileDto getMyProfile(Long id) {
		
		 User profile = userDao.findById(id)
		            .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
		    
		 ProfileDto userDto = modelMapper.map(profile, ProfileDto.class);
		 userDto.setUserId(profile.getUserId());
		     
		    return userDto;
	}

	@Override
	public ResponseEntity<?> updateProfile(Long id, ProfileDto dto) {
		
		if (userDao.existsByEmail(dto.getEmail()))
			throw new InvalidInputException("Duplicate User found by same !!!!!!!!!!");
		
		User entity = userDao.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid user ID!!!!"));
		
		modelMapper.map(dto, entity);
		return ResponseEntity.status(HttpStatusCode.valueOf(200)).body(dto);
	}
	
	
	

}
