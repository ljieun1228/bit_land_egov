var cust = cust || {}

cust =(()=>{
	
	
	let js,projs,l_cnt,r_cnt;
		
	let init =()=>{
		l_cnt = '#left_content';
		r_cnt = '#right_content';
		js=$.js();
		projs = js +'/product/pro.js';
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
			}
			$('#cuslist').append('</ul>');
		});
	};
	return {init:init, list:list};
})();

