package com.bit_land.web.cmm;

import java.util.ArrayList;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.bit_land.web.cust.Customer;
import com.bit_land.web.emp.Employee;

import lombok.Data;

@Data @Lazy
@Component
public class Users<T> {
	ArrayList<T> users = new ArrayList<>();
	
	void add(T item) {users.add(item);}
	T get(int i) {return users.get(i);}
	int size() {return users.size();}
	
	public Object ls(Object p){
		Object o = null;
		
		if (p instanceof Customer){
			o = new Customer(); 
			
		}else if(p instanceof Employee){
			o = new Employee();
		}
		return o;
	}
}
