package com.bit_land.web.prod;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_land.web.cmm.IConsumer;
import com.bit_land.web.cmm.IFunction;
import com.bit_land.web.cmm.ISupplier;
import com.bit_land.web.cmm.PrintService;
import com.bit_land.web.cmm.Proxy;

@RestController

public class ProductController {
	
	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);

	@Autowired ProductMapper proMap;
	@Autowired Product prod;
	@Autowired	Map<String, Object> map;
	@Autowired  Proxy pxy;
	@Autowired	PrintService ps;
	
	
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
	
		//상품 리스트
		@GetMapping("/product/page/{page}")
		public Map<?,?> list(@PathVariable String page) {
			logger.info("Welcome home! productController=list");

			map.clear();
			map.put("page_num", page);
			map.put("page_size", "5");
			map.put("block_Size", "5");
			ISupplier sup = () -> proMap.countProduct();
			map.put("total_count", sup.get());
			
			pxy.carryOut(map);
			
			ps.accept("시작값: "+pxy.getStartRow());
			ps.accept("마지막값: "+pxy.getEndRow());
			
			IFunction  i = (Object o) ->  proMap.selectProductList(pxy);
			List<?> ls = (List<?>) i.apply(pxy);
			
			ps.accept("리스트"+ls);
			map.clear();
			map.put("ls", ls);
			map.put("pxy", pxy);
			
			return map;
		}	
		
	// Update(PUT)
		
	// Delete(DELETE)	
		
	
		
		
		
}
