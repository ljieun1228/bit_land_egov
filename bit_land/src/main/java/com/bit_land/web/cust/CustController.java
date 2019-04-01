package com.bit_land.web.cust;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bit_land.web.cmm.IConsumer;
import com.bit_land.web.cmm.IFunction;
import com.bit_land.web.cmm.ISupplier;
import com.bit_land.web.cmm.PrintService;
import com.bit_land.web.cmm.Proxy;

@RestController
public class CustController {

	private static final Logger logger = LoggerFactory.getLogger(CustController.class);

	@Autowired	Customer cust;
	@Autowired	PrintService ps;
	@Autowired	CustomerMapper custMap;
	@Autowired	Map<String, Object> map;
	@Autowired  Proxy pxy;

	//유저 가입
	@PostMapping("/customers")
	public Map<?, ?> join(@RequestBody Customer param) {
		logger.info("Welcome home! CustController=join");
		IConsumer i = (Object o) -> custMap.insertCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}

	//유저 로그인
	@PostMapping("/customers/{userId}")
	public Map<?, ?> login(@PathVariable String userId, @RequestBody Customer param) {
		logger.info("Welcome home! CustController=login");
		IFunction i = (Object o) -> custMap.selectCustomer(param);
		i.apply(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}

	//유저 리스트
	@SuppressWarnings("unchecked")
	@GetMapping("/customers/page/{page}")
	public List<Customer> list(@PathVariable String page) {
		logger.info("Welcome home! CustController=list");
		map.clear();
		map.put("page_num", "1");
		map.put("page_size", "5");
		map.put("block_Size", "5");
		map.put("total_count", "10");
		pxy.carryOut(map);
		IFunction  i = (Object o) ->  custMap.selectCustomers();
		List<Customer> ls = (List<Customer>) i.apply(pxy);
		
		return ls;
	}


	//유저 업데이트
	@PutMapping("/customers/{userId}")
	public Map<?, ?> update(@PathVariable String userId, @RequestBody Customer param) {
		logger.info("Welcome home! CustController=update");
		IConsumer i = (Object o) -> custMap.updateCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}

	//유저 딜리트
	@DeleteMapping("/customers/{userId}")
	public Map<?, ?> delete(@PathVariable String userId, @RequestBody Customer param) {
		logger.info("Welcome home! CustController=delete");
		IConsumer i = (Object o) -> custMap.deleteCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}

}
// @RestController--> @ResponseBody = Default