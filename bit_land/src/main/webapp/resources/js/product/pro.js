var pro = pro ||{}
pro =(()=>{
	let _,js,projs,l_cnt,r_cnt;

	let init =()=>{
		_ = $.ctx();
		l_cnt = '#left_content';
		r_cnt = '#right_content';
		js = $.js();
		projs = js +'/product/pro.js';
	
		onCreate();
	};
	let onCreate =()=>{
		setContentView();
	};
	let setContentView =()=>{
		$(r_cnt).empty();
		$(compo.cust_carousel())
		.appendTo(r_cnt);
	};	
	

	return {init:init}; 
})();


