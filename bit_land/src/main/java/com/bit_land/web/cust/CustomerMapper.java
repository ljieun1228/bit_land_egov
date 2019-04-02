package com.bit_land.web.cust;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.bit_land.web.cmm.Proxy;

@Repository 
public interface CustomerMapper {

	public void insertCustomer(Customer cus);
	
	public List<Customer> selectCustomerList(Proxy pxy);
	public List<Customer> selectCustomers(Proxy pxy);
	public Customer selectCustomer(Customer cus);
	public Customer selectCustomerOne(Customer cus);
	public Map<String, Object> selectProfile(Map<?,?> m);

	public int countCustomer(Map<?,?> m);
	
	public void updateCustomer(Customer cus);
	
	public void deleteCustomer(Customer cus);
	
	public Map<String,Object> selectPhone(Map<?,?> m);
	
}