var cust = cust || {}

cust.permission =(()=>{
	let login =()=>{
		$.getScript($.js()+'/component/compo.js')
		.done(()=>{
			$('#right_content').html(compo.cust_login_form());
			$('#left_content').html(compo.navi());
			
			$('#cust_login_form').click(()=>{
				$('#right_content').html(compo.cust_login_form());
			});
			
			
			$('#cust_join_form').click(()=>{
				$('#right_content').html(compo.cust_join_form());
			});
			
			$('#emp_access_form').click(()=>{
				$('#right_content').html(compo.cust_join_form());
			});
			
			$('#emp_access').click(()=>{
				$('#right_content').html(compo.cust_join_form());
			});
			
			
		})
		.fail(()=>{
			alert('/component/compo.js를 찾지 못했습니다.');
			
		})
	};
	let join =()=>{};
	let mypage =()=>{};
	return {
		login:login,
		join:join,
		mypage:mypage,
	}
})();