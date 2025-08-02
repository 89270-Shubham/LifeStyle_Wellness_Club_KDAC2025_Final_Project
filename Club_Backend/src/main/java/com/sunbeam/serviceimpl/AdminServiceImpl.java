
package com.sunbeam.serviceimpl;

import org.springframework.stereotype.Service;

import com.sunbeam.dao.AdminDao;
import com.sunbeam.dto.AdminRegisterDto;
import com.sunbeam.entities.Admin;
import com.sunbeam.services.AdminService;

@Service
public class AdminServiceImpl implements AdminService {

	private AdminDao admindao;
	
    public AdminServiceImpl(AdminDao admindao)
    {
        this.admindao=admindao;
    
    }
    
	@Override
	public Admin register(AdminRegisterDto dto) {
		Admin admin=new Admin();
		
		admin.setEmail(dto.getEmail());
		admin.setPassword(dto.getPassword());
		admin.setAdmin_name(dto.getAdmin_name());
		
		  return admindao.save(admin);
	}

	

}
