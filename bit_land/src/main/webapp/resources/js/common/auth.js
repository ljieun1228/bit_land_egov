var auth = auth || {}

auth =(()=>{
	
	let _,js,compojs,r_cnt,l_cnt;
	
	let init =()=>{
		_=$.ctx();
		js=$.js();
		compojs = js +'/component/compo.js';
		r_cnt = '#right_content';
		l_cnt = '#left_content';
		
		onCreat();	
	};
	let onCreat =()=>{
		setContentView();
	};
	let setContentView=()=>{
		$.getScript(compojs)
		.done(()=>{
			$(r_cnt).empty();
			$(compo.cust_login_form()).appendTo(r_cnt);
			login();
			$(l_cnt+' ul.nav').empty();
		let arr = [
			{name: 'cusLogin', txt: '로그인'},
			{name: 'cusJoin', txt: '회원가입'},
			{name: 'empJoin', txt: '사원등록'},
			{name: 'empLogin', txt: '사원접속'},
			];

		$.each(arr,(i,j)=>{
			$('<li><a href="#">'+j.txt+'</a></li>')
			.attr('name',j.name)
			.appendTo(l_cnt+' ul')
			.click(function(){
				let that = $(this).attr('name')//attr 속성값 추가.
				alert(that+'클릭~!');
				switch(that){
				case 'cusLogin':
					$(r_cnt).empty();
					$(compo.cust_login_form()).appendTo(r_cnt);
					login();
					break;
				case 'cusJoin':
					$(r_cnt).empty();
					$(compo.cust_join_form()).appendTo(r_cnt);
					break;
				case 'empJoin':
					$(r_cnt).empty();
					$(compo.emp_join_form()).appendTo(r_cnt);
					break;
				case 'empLogin':
					$(r_cnt).empty();
					$(compo.emp_login_form()).appendTo(r_cnt);
					break;
				}
			})
		})//each
		.fail(()=>{
			alert('/component/compo.js를 찾지 못했습니다.');
		});//fail
		});
	};
		
	let login =()=>{
				$("form button[type=submit]").click(()=>{
			let data ={customerId:$("form input[name=uname]").val(),
					customerPw:$("form input[name=psw]").val()};
			alert(data.customerId+"  .."+data.customerPw);
			
			$.ajax({
				url: _+'/cust/login',
				type: 'POST',
				data: JSON.stringify(data),
				dataType: 'json',
				contentType: 'application/json',
				
				success: d =>{alert('ajax 성공'+d.customerId);},
				error: e =>{alert('ajax 실패');}
			});
		});
	};		
		
	let join =()=>{};
	let register =()=>{};
	let access =()=>{};
	return {init:init};
	
})();