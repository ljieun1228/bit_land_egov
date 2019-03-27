package com.bit_land.web.cmm;

@FunctionalInterface
public interface IPredicate {
	public abstract boolean test(Object o);
}
