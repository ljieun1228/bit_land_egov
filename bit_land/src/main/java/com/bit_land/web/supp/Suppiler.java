package com.bit_land.web.supp;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class Suppiler {

	private String supplierId, 
	supplierName,
	contactName,
	address,
	city,
	postalCode,
	country,
	phone;
	
	

}
