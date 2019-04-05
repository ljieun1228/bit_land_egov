package com.bit_land.web.cmm;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.bit_land.web.cate.Category;

import lombok.Data;

@Data @Component @Lazy
public class Img {
	private String imgSeq, imgName, imgExtention, owner;
}
