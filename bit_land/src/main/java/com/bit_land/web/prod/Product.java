package com.bit_land.web.prod;

import java.util.List;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Component @Lazy
public class Product {

	private String rownum, productId, productName, supplierId, categoryId, unit, price;
	private List<String> freebies;

}
