package com.bit_land.web.prod;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_land.web.cate.Category;
import com.bit_land.web.cate.CategoryMapper;
import com.bit_land.web.cmm.IConsumer;
import com.bit_land.web.cmm.IFunction;
import com.bit_land.web.cmm.ISupplier;
import com.bit_land.web.cmm.PrintService;
import com.bit_land.web.cmm.Proxy;
import com.bit_land.web.supp.Suppiler;
import com.bit_land.web.supp.SuppilerMapper;

@RestController

public class ProductController {
	
	private static final Logger logger = LoggerFactory.getLogger(ProductController.class);

	@Autowired ProductMapper proMap;
	@Autowired CategoryMapper cateMap;
	@Autowired SuppilerMapper suppMap;
	
	@Autowired Category cate;
	@Autowired Suppiler supp;
	@Autowired Product prod;
	@Autowired	Map<String, Object> map;
	@Autowired  Proxy pxy;
	@Autowired	PrintService ps;
	
	
	//Insert//
		@Transactional //a-c에 트랜젝션 설정후 사용 (금융거래 등)
		@PostMapping("/products")
		public Map<?, ?> regist(@RequestBody Product param) {
			logger.info("Welcome home! prodController=register");
			
			List<String> ls = param.getFreebies();
			
			ps.accept("리스트>>"+ls);
			ps.accept("리스트>>"+prod.toString());

			IFunction f = (s) -> cateMap.txCategory((String) s); 
			IFunction f2 = (s) -> suppMap.txSuppiler((String)s);
			
			String cateID= (String)f.apply(prod.getCategoryId());
			String suppID = (String)f2.apply(prod.getSupplierId());
			
			param.setCategoryId(cateID);
			param.setSupplierId(suppID);
			
			IConsumer i = o -> proMap.insertProduct((Product)o);
			
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
		
		
	//serch  //은영언니
		@GetMapping("/products/{page}/{keyword}")
		public Map<?,?> serch(
				@PathVariable("page") String page,
				@PathVariable String keyword) {
			logger.info("Welcome home! productsController=serch");

			map.clear();
			map.put("page_num", page);
			map.put("page_size", "5");
			map.put("block_size", "5");
			
			String key = '%'+keyword+'%';
			
			logger.info("key>>"+key);
			
			map.put("keyword", key);
			
			int a = 5;
			
			ISupplier supp = () -> proMap.countserchProducts(key);
			
			map.put("total_count",supp.get());

			logger.info("total_count"+supp.get());
			
			pxy.carryOut(map);
			System.out.println(pxy.getKey());
			IFunction i = (Object o) -> proMap.serchProducts((Proxy) o);
			@SuppressWarnings("unchecked")
			List<Product> ls = (List<Product>) i.apply(pxy);
			System.out.println(ls.toString());
			map.clear();
			map.put("ls", ls);
			map.put("pxy", pxy);
			
			return  map;
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
			System.out.println(ls.toString());
			map.clear();
			map.put("ls", ls);
			map.put("pxy", pxy);
			
			return map;
		}	
		
		
		
		
	// Update(PUT)
		
	// Delete(DELETE)	
		
	
		
		
		
}
