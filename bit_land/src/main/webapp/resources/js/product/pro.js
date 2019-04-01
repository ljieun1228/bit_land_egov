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
	//cust_carousel
	//cust_mypage
	/*let post=()=>{
		//1. Create(Insert : POST)  
		$.ajax({
			url:_+'/products',
			type:'POST',
			data: JSON.stringify(data),
			dataType: 'json',
			contentType:'application/json',
				
			success: d=>{
				
				
			},
			error: e=>{}
		});
		
	};
	
	let get=()=>{
		//2. Read(Select : GET)
		$.ajax({
			url:_+'/products',
			type:'GET',
			data: JSON.stringify(data),
			dataType: 'json',
			contentType:'application/json',
				
			success: d=>{},
			error: e=>{}
		});
	};	
	
	let put=()=>{
		//3. Update(PUT)
		$.ajax({
			url:_+'/products',
			type:'PUT',
			data: JSON.stringify(data),
			dataType: 'json',
			contentType:'application/json',
				
			success: d=>{},
			error: e=>{}
		});
	};
	
	let del =()=>{
		//4. Delete(DELETE)
		$.ajax({
			url:_+'/products',
			type:'DELETE',
			data: JSON.stringify(data),
			dataType: 'json',
			contentType:'application/json',
				
			success: d=>{},
			error: e=>{}
		});
	};		*/

	return {init:init}; 
})();


