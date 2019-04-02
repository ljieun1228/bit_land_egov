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
	
	let list =()=>{
	
		$.getJSON($.ctx()+'/customers/page/1',d=>{
			
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
			
			html = '<div class="pagination">';
			
			
			if(d.pxy.existPrev){
				html += '<li><a href="${ctx}/customer.do?cmd=cust_list&page=list&page_num=${d.pxy.prevBlock}">&laquo;</a></li>';
			}
			let i = 0;
			for(i=1;i<6;i++){
				if(d.pxy.pageNum == i){
					html += '<li><a href="#" class="page active">'+i+'</a></li>';
				}else{
					html += '<li><a href="#" class="page">'+i+'</a></li>';
				}
			}
			if(d.pxy.existNext){
				html += '<li><a href="${ctx}/customer.do?cmd=cust_list&page=list&page_num=${d.pxy.nextBlock}" >&raquo;</a></li>';
			}
			$('#cuslist').append(html);
		});
		
		
	};
				
	return {init:init, list:list};
})();

