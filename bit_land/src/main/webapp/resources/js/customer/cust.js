"use strict";

var cust = cust || {}

cust =(()=>{
	
	
	let _,js,compojs,custjs,projs,r_cnt,l_cnt;
		
	let init =()=>{
		_=$.ctx();
		js=$.js();
		projs = js +'/product/pro.js';
		compojs = js +'/component/compo.js';
		custjs = js +'/customer/cust.js';
		r_cnt = '#right_content';
		l_cnt = '#left_content';
		onCreat();
	};
		
	let onCreat =()=>{
		setContentView();
	};
	let setContentView =()=>{
		
		$(r_cnt).html(compo.cust_mypage());
		$(l_cnt+' ul li').remove();
		
		let custnav = [
			{name: 'mypage', txt: '마이페이지'},
			{name: 'modify', txt: '정보수정'},
			{name: 'custdelete', txt: '회원탈퇴'},
			{name: 'shop', txt: '쇼핑몰'},
			{name: 'details', txt: '구매내역'},
			{name: 'cart', txt: '장바구니'},
			];
		
		$.each(custnav,(i,j)=>{
			$('<li><a href="#">'+j.txt+'</a></li>')
			.attr('id', j.name)
			.attr('name', j.name)
			.appendTo(l_cnt+' ul')
			
			.click(function(e){
				e.preventDefault();
				let that = $(this).attr('name')
				$(this).addClass('active');
				$(this).siblings().removeClass('active'); 
				
				switch(that){
				case 'mypage':
					$(r_cnt).empty();
					$(compo.cust_mypage()).appendTo(r_cnt);
					$('form button[type=submit]').click(e=>{
						e.preventDefault();
						login();
					});
					break;
					
				case 'modify':
					$(r_cnt).empty();
					$(compo.prd_post()).appendTo(r_cnt);
					$('form button[type=submit]').click(e=>{
						e.preventDefault();
					});
					break;
					
				case 'custdelete':
					break;
					
				case 'shop':
					$.getScript(projs,()=>{pro.init();}).fail(()=>{});				

					break;
			     }
			});	
		})
		$('#search_de')
        .append('<div class="input-group">'
                +'<input id="search_input" type="text" class="form-control" placeholder="상품 검색..">'
                +'  <span class="input-group-btn">'
                +'  <button id="search_btn" class="btn btn-default" type="button">'
                +'    <span class="glyphicon glyphicon-search"></span>'
                +'  </button>'
                +' </span>'
                +'  </div>');
			
		$('#search_btn').on('click',()=>{
			
			let data ={page: '1' , keyword:$("#serch_input").val()};
			
			alert("넘어온 데이터 ::"+data.keyword);

			if($.fn.nullChecker(data.keyword)){
				 alert('검색어를 입력해주세요.');
			 }else{
				 alert('널이 아닙니다.');
					searchCheck(data);
			 }
		});
		
	};
	
	//상품 검색 체크 
	let searchCheck =(x)=>{
			
			alert("검색을 시작합니다.");
			
			
				 $.getJSON($.ctx()+'/products/'+x.page+'/'+x.keyword, d=>{
					 alert('성공');

					 $('#right_content').html(compo.prod_search_list());
						
						$.each(d.ls,(i,j)=>{
							$('#prodcontent').append('<tr>'
									+'<td>'+j.rownum+'</td>'
									+'<td>'+j.productName+'</td>'
									+'<td>'+j.supplierId+'</td>'
									+'<td>'+j.unit+'</td>'
									+'<td>'+j.price+'</td>'
									+'</tr>');
							
						});
						$('#prolist').append('<ul id="pagi" class="pagination">');
						
						if(d.pxy.existPrev){
							$('<li><a>&laquo;</a></li>')
							.appendTo('#pagi')
							.click(function(){
								searchCheck(d.pxy.prevBlock);
							 });
						}
						let i = 0;
						for(i=d.pxy.startPage; i<=d.pxy.endPage; i++){
							if(d.pxy.pageNum == i){
								$('<li><a class="page active">'+i+'</a></li>')
							    .appendTo('#pagi')
								.attr('href',$.ctx()+'/product/page/'+i)
								.click(function(){
									let data1 ={page: $(this).text(), keyword:x.keyword};
									searchCheck(data1);
								 });
								}else{
								$('<li><a class="page">'+i+'</a></li>')
								.appendTo('#pagi')	
								.attr('href',$.ctx()+'/product/page/'+i)
								.click(function(){
									let data2 ={page: $(this).text(), keyword:x.keyword};
									searchCheck(data2);
								 });
							};
						};
						if(d.pxy.existNext){
							$('<li><a>&raquo;</a></li>')
							.appendTo('#pagi')
							.click(function(){
								searchCheck(d.pxy.nextBlock);
							 });
						};
						$('#prolist').append('</ul>');

						$('#grid_btn').click(function(e){
							e.preventDefault();
							alert('그리드클릭');
							
							
							
							let url = $.ctx()+'/products/'+x.page+'/grid/'+x.keyword;
							
							$.getJSON(url,d=>{
								
						        alert('그리드 클릭 겟제이슨 성공');
						        
								let i = 0;
								  $('<div id="grid" />').appendTo('#content_2');
									
									 $.each(d.ls,(x,y)=>{
									 $('<div class="col-md-4">'
						                      +'<div class="thumbnail">'
						                        +'<a href="#" target="_blank">'
						                          +'<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanydDprvV35nlbHP2RwvjdyPrYgOgjevy7W_efJ2tTEVZvKKF" alt="Lights" style="width:100%">'
						                          +'<div class="caption">'
						                            +'<p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>'
						                          +'</div>'
						                        +'</a>'
						                      +'</div>').appendTo('#grid')
						        }); 
						});
							//('#grid_btn').text('리스트 보기');
					});
				 });
			 };
		
	
	let list =x=>{
	
		$.getJSON($.ctx()+'/customers/page/'+x, d=>{

			$('#right_content').html(compo.cust_list());
			
			$.each(d.ls,(i,j)=>{
				$('#custcontent').append('<tr>'
						+'<td>'+j.rownum+'</td>'
						+'<td>'+j.customerId+'</td>'
						+'<td>'+j.customerName+'</td>'
						+'<td>남</td>'
						+'<td>'+j.address+'</td>'
						+'<td>'+j.city+'</td>'
						+'<td>'+j.postalCode+'</td>'
						+'<td>'+j.phone+'</td>'
						+'</tr>');
			});
			$('#cuslist').append('<ul id="pagi" class="pagination">');
					
			if(d.pxy.existPrev){
				$('<li><a>&laquo;</a></li>')
				.appendTo('#pagi')
				.click(function(){
					list(d.pxy.prevBlock);
				 });
			}
			let i = 0;
			for(i=d.pxy.startPage; i<=d.pxy.endPage; i++){
				if(d.pxy.pageNum == i){
					$('<li><a class="page active">'+i+'</a></li>')
					.appendTo('#pagi')
					.attr('href',$.ctx()+'/customers/page/'+i)
					.click(function(){
						list($(this).text());
					 });
					}else{
					$('<li><a class="page">'+i+'</a></li>')
					.appendTo('#pagi')	
					.attr('href',$.ctx()+'/customers/page/'+i)
					.click(function(){
						list($(this).text());
					 });
				};
			};
			if(d.pxy.existNext){
				$('<li><a>&raquo;</a></li>')
				.appendTo('#pagi')
				.click(function(){
					list(d.pxy.nextBlock);
				 });
			};
			$('#cuslist').append('</ul>');
			
		});
	};
	
	return {init:init, list:list};
})();

