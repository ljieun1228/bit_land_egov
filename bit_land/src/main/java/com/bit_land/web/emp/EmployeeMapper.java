package com.bit_land.web.emp;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeMapper {

	public void insertEmployee(Employee emp);
	
	public List<Employee> selectEmployeeList();
	public List<Employee> selectEmployees(String searchWord);
	public Employee selectEmployee(Employee emp);
	public int countEmployees();
	public boolean existsEmployees(Employee emp);
	
	public void updateEmployee(Employee emp);
	
	public void deleteEmployee(Employee emp);
	
}