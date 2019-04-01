package com.bit_land.web.emp;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeMapper {

	public void insertEmployee(Employee emp);
	
	public List<Employee> selectEmployeeList(Map<?,?> m);
	public List<Employee> selectEmployees();
	public Employee selectEmployee(Employee emp);
	public Employee findOneEmployee();
	public int countEmployees(Map<?,?> m);
	public boolean existsEmployees(Employee emp);
	
	public void updateEmployee(Employee emp);
	
	public void deleteEmployee(Employee emp);
	
}