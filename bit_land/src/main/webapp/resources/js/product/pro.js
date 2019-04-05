"use strict";

var pro = pro ||{}
pro =(()=>{
	let _,js,compojs,custjs,prdjs,r_cnt, l_cnt;
	
	let init =()=>{
		_ = $.ctx();
		js = $.js();
		compojs = js+'/cmp/compo.js';
		custjs = js+'/cst/cust.js';
		prdjs = js+'/prd/prd.js';
		r_cnt = '#right_content';
		l_cnt = '#left_content';
	};	
	
	let onCreate =()=>{
		$.when(
				$.getScript(custjs),
				$.getScript(compojs),
				$.getScript(prdjs)	
			).done(()=>{
				setContentView();
			}).fail(()=>{
				alert(WHEN_ERR);
			});
		};
	let setContentView =()=>{
		$(r_cnt).empty();
		$(compo.cust_carousel())
		.appendTo(r_cnt);
	};	
	
	let prodList =x=>{
			init();
			$(r_cnt).empty();
			$.getJSON($.ctx()+'/products/page/'+x, d=>{
	
				$('#right_content').html(compo.prod_serch_list());
			
				$.each(d.ls,(i,j)=>{
					$('#prodcontent').append('<tr>'
							+'<td>'+j.rownum+'</td>'
							+'<td>'+j.productId+'</td>'
							+'<td>'+j.productName+'</td>'
							+'<td>'+j.supplierId+'</td>'
							+'<td>'+j.categoryId+'</td>'
							+'<td>'+j.unit+'</td>'
							+'<td>'+j.price+'</td>'
							+'</tr>');
				});
				
				$('#prolist').append('<ul id="pagi" class="pagination">');
						
				if(d.pxy.existPrev){
					$('<li><a>&laquo;</a></li>')
					.appendTo('#pagi')
					.click(function(){
						prodList(d.pxy.prevBlock);
					 });
				}
				let i = 0;
				for(i=d.pxy.startPage; i<d.pxy.endPage; i++){
					if(d.pxy.pageNum == i){
						$('<li><a class="page active">'+i+'</a></li>')
					    .appendTo('#pagi')
						.attr('href',$.ctx()+'/product/page/'+i)
						.click(function(){
							prodList($(this).text());
						 });
						}else{
						$('<li><a class="page">'+i+'</a></li>')
						.appendTo('#pagi')	
						.attr('href',$.ctx()+'/product/page/'+i)
						.click(function(){
							prodList($(this).text());
						 });
					};
				};
				if(d.pxy.existNext){
					$('<li><a>&raquo;</a></li>')
					.appendTo('#pagi')
					.click(function(){
						prodList(d.pxy.nextBlock);
					 });
				}
				$('#prolist').append('</ul>');
			});
		};
	
	let prodCheck =()=>{
	init();
	$().html(compo.prod_post_aa());
	$('#prd_post_btn').click(function(e){
		e.preventDefault();

		alert("#prd_post_btn 클릭~");
		let freebies = [];

		 $(".checks:checked")
		 .each(function(i){
			 freebies.push($(this).val());
		 });
		 
		 let pname =$('#produce_name').val();
		 let price =$('#price').val();
		 let unit =$('#unit').val();
		 let comment =$('#comment').val();

		 if($.fn.nullChecker([pname,price,unit])){
			 alert('빈칸을 입력해주세요.');
		 }else{
			 alert('성공 널이 아닙니다.');
		 }
			 	 
		
		 let data = {category_id:$('#category_name option:selected').val(),
	 				product_name:pname,
					price:price,
					unit:unit,
					supplier_id:$('supplier_name').val(),
					color:$('input[name=color]:checked').val(),
					freebies:freebies,
		 			comment:comment};
		
		 $.ajax({
			url:_+'/products',
			type:'post',
			data:JSON.stringify(data),
			dataType:'json',
			contentType:'application/json',
			
			success:d=>{
				alert('성공');
				//prodList(1);
			},
			error:e=>{
				alert('에러');
			}
		})
	});
	
	$('#img_upload_btn').click(function(){
		alert("업로드 버튼 클릭");
		e.preventDefault();
		
		let ok = (this.files[0].name.match(/jpg|gif|png|jpg/i))?true:false;
		if(ok){
			
		/*	let fd = new formData();
			fd.append('form',this.files[0]);
			*/
			$('#img_upload').attr('action',$.ctx()+'/products/file');
			$.ajax({
				url :$('#img_upload').attr('action'),//게터처럼
				type : 'text',
				enctype : "multipart/form-data",
				beforeSubmit : function(){
					alert('로딩');
				},
				success : d =>{
					alert("파일 업로드 성공");
				},
				error : e =>{
					alert("파일 업로드 실패");
				}
			}).submit();
		}else{
			alert('파일 형식이 올바르지 않습니다.');
		};
	});
}	
	
	

	return {init:init
		,prodList:prodList
		,prodCheck:prodCheck
		}; 
})();


