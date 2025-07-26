package com.sunbeam.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.UserDto;
import com.sunbeam.entities.User;
import com.sunbeam.services.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao userDao;

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

}
