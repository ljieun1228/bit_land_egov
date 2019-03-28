package com.bit_land.web.emp;

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
@RequestMapping("/emps")
public class EmpController {

	private static final Logger logger = LoggerFactory.getLogger(EmpController.class);

	@Autowired	Employee emp;
	@Autowired	PrintService ps;
	@Autowired	EmployeeMapper empMap;
	@Autowired	Map<String, Object> map;

	//사원 가입
	@PostMapping("/register")
	public Map<?, ?> register(@RequestBody Employee param) {
		logger.info("Welcome home! empController=register");
		IConsumer i = (Object o) -> empMap.insertEmployee(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}

	//사원 로그인
	@PostMapping("/access/{empId}")
	public Employee access(@PathVariable String userid, @RequestBody Employee param) {
		logger.info("Welcome home! empController=login");
		IFunction i = (Object o) -> empMap.selectEmployee(param);
		return (Employee) i.apply(param);
	}

	//사원 리스트
	@SuppressWarnings("unchecked")
	@PostMapping("/list")
	public List<Users<?>> list(@PathVariable String user, @RequestBody Map<?, ?> param) {
		logger.info("Welcome home! empController=list");
		IFunction i = (Object o) -> empMap.selectEmployees(param);
		return (List<Users<?>>) i.apply(param);
	}

	//사원 업데이트
	@PutMapping("/update")
	public Map<?, ?> update(@PathVariable String user, @PathVariable String userid, @RequestBody Employee param) {
		logger.info("Welcome home! empController=update");
		IConsumer i = (Object o) -> empMap.updateEmployee(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}

	//사원 딜리트
	@DeleteMapping("/delete")
	public Map<?, ?> delete(@PathVariable String user, @PathVariable String userid, @RequestBody Employee param) {
		logger.info("Welcome home! empController=delete");
		IConsumer i = (Object o) -> empMap.deleteEmployee(param);
		i.accept(param);
		map.clear();
		map.put("msg", "SUCCESS");
		return map;
	}
}
