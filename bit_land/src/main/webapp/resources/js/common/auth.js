var auth = auth || {}

auth.permission =(()=>{
	

	
	let init =()=>{
		onCreat();	
	};
	let onCreat =()=>{
		setContentView();
	};
	let setContentView=()=>{
		
	};
	
	let login =()=>{
		$.getScript($.js()+'/component/compo.js')
		.done(()=>{
			$('#right_content').html(compo.cust_login_form());
			
			$("form button[type=submit]").click(()=>{
				let data ={customerId:$("form input[name=uname]").val(),
						customerPw:$("form input[name=psw]").val()};
				alert(data.customerId+"  .."+data.customerPw);
				
				$.ajax({
					url: $.ctx()+'/cust/login',
					type: 'POST',
					data: JSON.stringify(data),
					dataType: 'json',
					contentType: 'application/json',
					
					success: d =>{alert('ajax 성공');},
					error: e =>{alert('ajax 실패');}
				});
			});
			
			$('#left_content ul').empty();
			
			let arr = [
				{name: 'cusLogin', txt: '로그인'},
				{name: 'cusJoin', txt: '회원가입'},
				{name: 'empJoin', txt: '사원등록'},
				{name: 'empLogin', txt: '사원접속'},
				];
			
			$.each(arr,(i,j)=>{
				$('<li><a href="#">'+j.txt+'</a></li>')
				.attr('name',j.name)
				.appendTo('#left_content ul')
				.click(function(){
					let that = $(this).attr('name')//attr 속성값 추가.
					alert(that+'클릭~!');
					switch(that){
					case 'cusLogin':
						$('#right_content').empty();
						$(compo.cust_login_form()).appendTo('#right_content');
						break;
					case 'cusJoin':
						$('#right_content').empty();
						$(compo.cust_join_form()).appendTo('#right_content');
						break;
					case 'empJoin':
						$('#right_content').empty();
						$(compo.emp_join_form()).appendTo('#right_content');
						break;
					case 'empLogin':
						$('#right_content').empty();
						$(compo.cust_login_form()).appendTo('#right_content');
						break;
					}
				})
			});
		})
		.fail(()=>{
			alert('/component/compo.js를 찾지 못했습니다.');
		});
	};
	let join =()=>{};
	let mypage =()=>{};
	
	return {
		login:login,
		join:join,
		mypage:mypage,
	}
})();