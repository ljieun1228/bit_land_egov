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
		
			$.getScript(compojs, ()=>{
			
			$(r_cnt).html(compo.cust_login_form());
			
			$('form button[type=submit]')
			.click(e=>{
				e.preventDefault();
				login();
			});
			
			$(l_cnt + ' ul.nav').empty();
			
		let arr = [
			{name: 'cusLogin', txt: '[user] 로그인'},
			{name: 'cusJoin', txt: '[user]  가입'},
			{name: 'empLogin', txt: '[employee] 로그인'},
			{name: 'empJoin', txt: '[employee] 가입'},
			];
		
		let joinco =[
			{labelfor:'ID' ,txt:'ID' , name:'customerId'},
			{labelfor:'name' ,txt:'NAME' , name:'customerName'},
			{labelfor:'password' ,txt:'PASSWORD' , name:'customerPw'},
			{labelfor:'address' ,txt:'ADDRESS' , name:'address'},
			{labelfor:'city' ,txt:'CITY' , name:'city'},
			{labelfor:'postalCode' ,txt:'POSTALCODE' , name:'postalCode'},
			{labelfor:'ssn' ,txt:'SSN' , name:'ssn'},
			{labelfor:'gender' ,txt:'GENDER' , name:'gender'},
			{labelfor:'phone' ,txt:'PHONE' , name:'phone'},
			{labelfor:'photo' ,txt:'PHOTO' , name:'photo'},
			];
		
		let registerco =[
			{labelfor:'employeeId' ,txt:'EMPLOYEEID' , name:'employeeId'},
			{labelfor:'manager' ,txt:'MANAGER' , name:'manager'},
			{labelfor:'name' ,txt:'NAME' , name:'name'},
			{labelfor:'birthDate' ,txt:'BIRTHDATE' , name:'birthDate'},
			{labelfor:'photo' ,txt:'PHOTO' , name:'photo'},
			{labelfor:'postnotesalCode' ,txt:'NOTES' , name:'notes'},
			];
		
		$.each(arr,(i,j)=>{
			$('<li><a href="#">'+j.txt+'</a></li>')
			.attr('name',j.name)
			.appendTo(l_cnt+' ul')
			.click(function(e){
				e.preventDefault();
				let that = $(this).attr('name')//attr 속성값 추가.
				
				switch(that){
				case 'cusLogin':
					$(r_cnt).empty();
					$(compo.cust_login_form())
					.appendTo(r_cnt);
					$('form button[type=submit]').click(e=>{
						e.preventDefault();
						login();
					});
					break;
					
				case 'cusJoin':
					$(r_cnt).empty();
					$(compo.cust_join_form()).appendTo(r_cnt);
					
					$('form label').remove();
					$('form input').remove();
					$.each(joinco,(i,j)=>{
						$('#start').append('<br><label for="'+j.labelfor+'"><b>'+j.txt+'</b></label><br>'+
								'<input type="text" name="'+j.name+'" value="6" required><br>');
					});
					$('form button[class=signupbtn]').click(e=>{
						e.preventDefault();
						join();
					});
					break;
					
				case 'empJoin':
					$(r_cnt).empty();
					$(compo.emp_join_form()).appendTo(r_cnt);
					$('form label').remove();
					$('form input').remove();
					$.each(registerco,(i,j)=>{
						$('#start').append('<br><label for="'+j.labelfor+'"><b>'+j.txt+'</b></label><br>'+
								'<input type="text" name="'+j.name+'" value="6" required><br>');
					});
					$('form button[class=signupbtn]').click(e=>{
						e.preventDefault();
						join();
					});
					break;
					
				case 'empLogin':
					$(r_cnt).empty();
					$(compo.emp_login_form()).appendTo(r_cnt);
					break;
			 	    }
				});
			});
		})
		.fail(()=>{
			alert('/component/compo.js를 찾지 못했습니다.');
		});
	};
	
	//유저 가입
	let join =()=>{

		$("form button[type=submit]").click(e=>{
			e.preventDefault();
			let data ={customerId:$("form input[name=customerId]").val(),
					   customerName:$("form input[name=customerName]").val(),
					   customerPw:$("form input[name=customerPw]").val(),
					   address:$("form input[name=address]").val(),
					   city:$("form input[name=city]").val(),
					   postalCode:$("form input[name=postalCode]").val(),
					   ssn:$("form input[name=ssn]").val(),
					   gender:$("form input[name=gender]").val(),
					   phone:$("form input[name=phone]").val(),
					   photo:$("form input[name=photo]").val()
					};
			
			$.ajax({
				url:_+'/users/join', 
				type:'POST',
				data:JSON.stringify(data),
				dataType:'json',
				contentType:'application/json',
				
				success: d =>{
					alert('회원가입 성공!'+d.msg);
					$(r_cnt).html(compo.cust_login_form());
					$('form button[type=submit]').click(e=>{
						e.preventDefault();
						login();
					});
				},
				error: e =>{
					alert('회원가입 실패!');
					$(r_cnt).html(compo.cust_join_form());
					$('form button[type=submit]').click(e=>{
						e.preventDefault();
						login();
					});
				 }
			});
		});
	};
	
	//유저 로그인
	let login =()=>{
				$("form button[type=submit]").click( e=>{
					e.preventDefault();
			let data ={customerId:$("form input[name=uname]").val(),
					customerPw:$("form input[name=psw]").val()};
			alert(data.customerId+"  .."+data.customerPw);
			
			$.ajax({
				url: _+'/users/login'+data.customerId,
				type: 'POST',
				data: JSON.stringify(data),
				dataType: 'json',
				contentType: 'application/json',

				success: d =>{
					if (d.customerId!=='') {
						alert('로그인 성공'+d.customerId);
						//$(r_cnt).html(compo.cust_mypage());
						cust.init();
					} else {
						alert('로그인 실패');
					}
					},
				error: e =>{alert('ajax 실패');}
			});
		});
	};		
	
	//사원 가입
	let register =()=>{

		$("form button[type=submit]").click(e=>{
			e.preventDefault();
			let data ={employeeId:$("form input[name=employeeId]").val(),
					manager:$("form input[name=manager]").val(),
					name:$("form input[name=name]").val(),
					birthDate:$("form input[name=birthDate]").val(),
					photo:$("form input[name=photo]").val(),
					notes:$("form input[name=notes]").val()
					};
			
			$.ajax({
				url:_+'/emps/register', 
				type:'POST',
				data:JSON.stringify(data),
				dataType:'json',
				contentType:'application/json',
				
				success: d =>{
					alert('회원가입 성공!'+d.msg);
					$(r_cnt).html(compo.emp_login_form());
					$('form button[type=submit]').click(e=>{
						e.preventDefault();
						login();
					});
				},
				error: e =>{
					alert('회원가입 실패!');
					$(r_cnt).html(compo.cust_join_form());
					$('form button[type=submit]').click(e=>{
						e.preventDefault();
						login();
					});
				 }
			});
		});
	};
	
	//사원 로그인
	let access =()=>{
		let data ={employeeId:$("form input[name=employeeId]").val(),
				manager:$("form input[name=manager]").val(),
				};
		$.ajax({
			url:_+'/emps/access/'+ data.employeeId, 
			type:'POST',
			data:JSON.stringify(data),
			dataType:'json',
			contentType:'application/json',
			
			success: d =>{
				alert('회원가입 성공!'+d.msg);
				$(r_cnt).html(compo.emp_login_form());
				$('form button[type=submit]').click(e=>{
					e.preventDefault();
					login();
				});
			},
			error: e =>{
				alert('회원가입 실패!');
				$(r_cnt).html(compo.cust_join_form());
				$('form button[type=submit]').click(e=>{
					e.preventDefault();
					login();
				});
			 }
		});
	};
	return {init:init};
})();