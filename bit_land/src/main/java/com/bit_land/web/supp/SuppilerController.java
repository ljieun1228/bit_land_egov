package com.bit_land.web.supp;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.bit_land.web.cmm.PrintService;
import com.bit_land.web.cmm.Proxy;

@RestController

public class SuppilerController {
	
	private static final Logger logger = LoggerFactory.getLogger(SuppilerController.class);

	@Autowired  SuppilerMapper suppMap;
	@Autowired  Suppiler supp;
	@Autowired	Map<String, Object> map;
	@Autowired  Proxy pxy;
	@Autowired	PrintService ps;
	
	/*
	//Insert//
		@PostMapping("/products")
		public Map<?, ?> creat(@RequestBody Map<?, ?> param) {
			logger.info("Welcome home! prodController=register");
			List<String> ls = prod.getFreebies();
			ps.accept("리스트"+ls);
			ps.accept("리스트"+prod.toString());
			System.out.println(param.get("checkbox").toString());
			IConsumer i = (Object o) -> proMap.insertProduct((Product)param);
			i.accept(param);
			map.clear();
			map.put("msg", "SUCCESS");
			return map;
		}
		
	//Select
		@SuppressWarnings("unchecked")
		@GetMapping("/products")
		public List<Suppiler> read(@RequestBody Suppiler param ) {
			IFunction i = (Object o) -> proMap.selectProducts(param);
			return (List<Suppiler>) i.apply(param);
		}
	
	//상품 리스트
		@GetMapping("/products/page/{page}")
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
			
			map.clear();
			map.put("ls", ls);
			map.put("pxy", pxy);
			
			return map;
		}	
		
		*/
		
		
	// Update(PUT)
		
	// Delete(DELETE)	
		
	
		
		
		
}
