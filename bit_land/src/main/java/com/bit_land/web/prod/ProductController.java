package com.bit_land.web.prod;

import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

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
	@Resource(name="uploadPath") private String uploadPath;
	
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
		
		
	//search  
		@GetMapping("/products/{page}/{keyword}")
		public Map<?,?> search(
				@PathVariable("page") String page,
				@PathVariable String keyword) {
			logger.info("Welcome home! productsController=search");

			map.clear();
			map.put("page_num", page);
			map.put("page_size", "5");
			map.put("block_size", "5");
			
			String key = '%'+keyword+'%';
			
			logger.info("key>>"+key);
			
			map.put("keyword", key);
				
			ISupplier supp = () -> proMap.countsearchProducts(key);
			
			map.put("total_count",supp.get());

			logger.info("total_count"+supp.get());
			
			pxy.carryOut(map);
			
			IFunction i = (Object o) -> proMap.searchProducts((Proxy) o);
			@SuppressWarnings("unchecked")
			List<Product> ls = (List<Product>) i.apply(pxy);
			
			map.clear();
			map.put("ls", ls);
			map.put("pxy", pxy);
			
			return  map;
		}
		
		//그리드search  
		@GetMapping("/products/{page}/grid/{keyword}")
		public Map<?,?> grid(
				@PathVariable("page") String page,
				@PathVariable String keyword) {
			logger.info("Welcome home! productsController=grid");

			map.clear();
			map.put("page_num", page);
			map.put("page_size", "9");
			map.put("block_size", "5");
			
			String key = '%'+keyword+'%';
			
			logger.info("key>>"+key);
			
			map.put("keyword", key);
				
			ISupplier supp = () -> proMap.countsearchProducts(key);
			
			map.put("total_count",supp.get());

			logger.info("total_count"+supp.get());
			
			pxy.carryOut(map);
			
			IFunction i = (Object o) -> proMap.searchProducts((Proxy) o);
			@SuppressWarnings("unchecked")
			List<Product> ls = (List<Product>) i.apply(pxy);
			
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
			ISupplier sup = () -> proMap.countsearchProducts();
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
		
		//파일 업로드
		@RequestMapping(value="/products/file",method=RequestMethod.POST)
		public Map<?,?> fileUpLoad(MultipartHttpServletRequest req)throws Exception{
			Iterator<String> it = req.getFileNames();
			if(it.hasNext()){
				MultipartFile mf = req.getFile(it.next());
				
				ps.accept("넘어온파일명"+mf.getName());
			}
			ps.accept("파일 저장경로 "+ uploadPath);
			
			return map;
		}
		
	// Update(PUT)
		
	// Delete(DELETE)	
		
	
		
		
		
}
