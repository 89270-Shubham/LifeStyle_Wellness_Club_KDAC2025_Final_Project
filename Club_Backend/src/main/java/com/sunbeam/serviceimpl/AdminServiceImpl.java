
package com.sunbeam.serviceimpl;

import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.AdminDao;
import com.sunbeam.dto.AdminLoginDto;
import com.sunbeam.dto.AdminRegisterDto;
import com.sunbeam.entities.Admin;
import com.sunbeam.entities.User;
import com.sunbeam.globalexceptionhandler.AuthenticationFailureException;
import com.sunbeam.services.AdminService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
@Transactional
@Service
@AllArgsConstructor
public class AdminServiceImpl implements AdminService {

	private AdminDao admindao;
	private ModelMapper modelMapper;
	
   
    
      
	@Override
	public ResponseEntity<?> register(AdminRegisterDto dto) {
		Admin admin=new Admin();
		
		admin.setEmail(dto.getEmail());
		admin.setPassword(dto.getPassword());
		admin.setAdmin_name(dto.getAdmin_name());
		
		  return ResponseEntity.ok(admindao.save(admin));
	}


	@Override
	public ResponseEntity<?> Login(AdminLoginDto dto) {
		
		
		 Admin entity = admindao.findByEmailAndPassword(dto.getEmail(), dto.getPassword())
			        .orElseThrow(() -> new AuthenticationFailureException("Invalid email or password"));
//		        modelMapper.map(entity, AdminLoginDto))
			    
			    return ResponseEntity.ok().body(entity);
	}


	

	

	


	
	
	

}
