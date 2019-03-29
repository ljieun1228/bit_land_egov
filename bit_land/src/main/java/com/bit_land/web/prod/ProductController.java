package com.bit_land.web.prod;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_land.web.cmm.IConsumer;
import com.bit_land.web.cmm.IFunction;

@RestController

public class ProductController {
	
	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);

	@Autowired ProductMapper proMap;
	@Autowired Product prod;
	@Autowired	Map<String, Object> map;
	
	//Insert//
		@PostMapping("/products")
		public Map<?, ?> creat(@RequestBody Product param) {
			logger.info("Welcome home! empController=register");
			IConsumer i = (Object o) -> proMap.insertProduct(param);
			i.accept(param);
			map.clear();
			map.put("msg", "SUCCESS");
			return map;
		}
		
	//Select
		@SuppressWarnings("unchecked")
		@GetMapping("/products")
		public List<Product> read(@RequestBody Product param ) {
			IFunction i = (Object o) -> proMap.selectProducts(param);
			return (List<Product>) i.apply(param);
		}
	
	// Update(PUT)
		
	// Delete(DELETE)	
		
	
		
		
		
}
