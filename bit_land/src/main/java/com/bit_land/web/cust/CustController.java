package com.bit_land.web.cust;

import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bit_land.web.cmm.IConsumer;
import com.bit_land.web.cmm.IFunction;
import com.bit_land.web.cmm.PrintService;
import com.bit_land.web.cmm.Users;

@RestController
@RequestMapping("/users")
public class CustController {

	private static final Logger logger = LoggerFactory.getLogger(CustController.class);

	@Autowired	Customer cust;
	@Autowired	PrintService ps;
	@Autowired	CustomerMapper custMap;
	@Autowired	Map<String, Object> map;

	//유저 가입
	@PostMapping("/join")
	public Map<?, ?> join(@RequestBody Customer param) {
		logger.info("Welcome home! CustController=join");
		IConsumer i = (Object o) -> custMap.insertCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}

	//유저 로그인
	@PostMapping("/login/{userId}")
	public Customer login(@PathVariable String userid, @RequestBody Customer param) {
		logger.info("Welcome home! CustController=login");
		IFunction i = (Object o) -> custMap.selectCustomer(param);
		return (Customer) i.apply(param);
	}

	//유저 리스트
	@SuppressWarnings("unchecked")
	@PostMapping("/list")
	public List<Users<?>> list(@PathVariable String user, @RequestBody Map<?, ?> param) {
		logger.info("Welcome home! CustController=list");
		IFunction i = (Object o) -> custMap.selectCustomers(param);
		return (List<Users<?>>) i.apply(param);
	}

	//유저 업데이트
	@PutMapping("/update")
	public Map<?, ?> update(@PathVariable String user, @PathVariable String userid, @RequestBody Customer param) {
		logger.info("Welcome home! CustController=update");
		IConsumer i = (Object o) -> custMap.updateCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}

	//유저 딜리트
	@DeleteMapping("/delete")
	public Map<?, ?> delete(@PathVariable String user, @PathVariable String userid, @RequestBody Customer param) {
		logger.info("Welcome home! CustController=delete");
		IConsumer i = (Object o) -> custMap.deleteCustomer(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}

}
// @RestController--> @ResponseBody = Default