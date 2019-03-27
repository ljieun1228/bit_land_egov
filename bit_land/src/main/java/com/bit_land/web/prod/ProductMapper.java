package com.bit_land.web.prod;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface ProductMapper {

	public void insertProduct(Product product);
	
	public List<Product> selectProductList(Map<?,?> m);
	public List<Product> selectProducts(Product product);
	public Product selectProduct(Product product);
	public Product selectProductOne(Product product);
	
	public Map<String, Object> selectProfile(Map<?,?> m);
	
	public int countProduct(Map<?,?> m);
	
	public boolean existsProductID(Product product);

	public void updateProduct(Product product);
	
	public void deleteProduct(Product product);
	
	
}