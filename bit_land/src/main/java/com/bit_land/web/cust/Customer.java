package com.bit_land.web.cust;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class Customer {

	private String customerId, 
	customerPw, 
	customerName, 
	address, 
	city, 
	postalCode, 
	ssn, 
	phone, 
	gender, 
	photo;

}
