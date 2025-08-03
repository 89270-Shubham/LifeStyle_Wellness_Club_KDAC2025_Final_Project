package com.sunbeam.serviceimpl;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ProfileDto;
import com.sunbeam.dto.UserDto;
import com.sunbeam.dto.UserLoginDto;
import com.sunbeam.entities.User;
import com.sunbeam.globalexceptionhandler.AuthenticationFailureException;
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
	public User userLogin(UserLoginDto dto) {
		User entity=
				userDao.findByEmailAndPassword(dto.getEmail(), dto.getPassword())
				.orElseThrow(() -> new AuthenticationFailureException("Invalid email or password"));
				return entity;
	}
	
	
	@Override
	public ProfileDto getMyProfile(Long id) {
		
		User profile =  userDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("No User FOUND"));
		System.out.println(profile);
		
		ProfileDto dto = modelMapper.map(profile,ProfileDto.class);
		
		return dto;
		
	}

}
