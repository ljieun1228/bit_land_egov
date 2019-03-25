var compo = compo || {}
compo = {
		cust_login_form : ()=>{

			alert('cust_login_form');
		return '<h2>Login Form</h2>'
		+'<form action="/action_page.php">'
		+'  <div class="imgcontainer">'
		+'    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar">'
		+'  </div>'
		+'  <div class="container">'
		+'    <label for="uname"><b>Username</b></label><br>'
		+'    <input type="text" placeholder="Enter Username" name="uname" "required"><br>'
		+'    <label for="psw"><b>Password</b></label><br>'
		+'    <input type="password" placeholder="Enter Password" name="psw" "required"><br>'
		+'    <button type="submit">Login</button><br>'
		+'    <label>'
		+'      <input type="checkbox" checked="checked" name="remember"> "Remember me"'
		+'    </label>'
		+'  </div>'
		+'  <div class="container" style="background-color:#f1f1f1">'
		+'    <button type="button" class="cancelbtn">Cancel</button>'
		+'    <span class="psw">Forgot <a href="#">password?</a></span>'
		+'  </div>'
		+'</form>'},
		
		cust_join_form : ()=>{
			alert('cust_join_form');
			
		return 	'<form action="/action_page.php" style="border:1px solid #ccc">'
		+'<div class="container">'
		+'<h1>Sign Up</h1>'
		+'<p>Please fill in this form to create an account.</p>'
		+'<hr>'
		
		+' <label for="email"><b>Email</b></label><br>'
		+'<input type="text" placeholder="Enter Email" name="email" required><br>'
		
		+'   <label for="psw"><b>Password</b></label><br>'
		+'<input type="password" placeholder="Enter Password" name="psw" required><br>'
		
		+'<label for="psw-repeat"><b>Repeat Password</b></label><br>'
		+'<input type="password" placeholder="Repeat Password" name="psw-repeat" required><br>'
		  
	    +'<label>'
		+'<input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me'
		+'</label>'
		+' <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & + Privacy</a>.</p>'
		
		+' <div class="clearfix">'
	    +'<button type="button" class="cancelbtn">Cancel</button>'
        +'<button type="submit" class="signupbtn">Sign Up</button>'
		+'</div>'
	    +'</div>'
		+'</form>'},
			
		emp_access_form : ()=>{
			alert('emp_access_form');
		return 	
		'<form action="/action_page.php" style="border:1px solid #ccc">'
		+'<div class="container">'
		+'<h1>Sign Up</h1>'
		+'<p>Please fill in this form to create an account.</p>'
		+'<hr>'
		
		+' <label for="email"><b>Email</b></label>'
		+'<input type="text" placeholder="Enter Email" name="email" required>'
		
		+'   <label for="psw"><b>Password</b></label>'
		+'<input type="password" placeholder="Enter Password" name="psw" required>'
		
		+'<label for="psw-repeat"><b>Repeat Password</b></label>'
		+'<input type="password" placeholder="Repeat Password" name="psw-repeat" required>'
		  
		+'<label>'
		+'<input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me'
		+'</label>'
		+' <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & + Privacy</a>.</p>'
		
		+' <div class="clearfix">'
		+'<button type="button" class="cancelbtn">Cancel</button>'
		+'<button type="submit" class="signupbtn">Sign Up</button>'
		+'</div>'
		+'</div>'
		+'</form>'},
			
		navi :()=>{
			alert('navi');

		return ' <h4>비트랜드</h4>'
		+'      <ul class="nav nav-pills nav-stacked">'
		+'        <li><a id="cust_login_form" href="#">로그인</a></li>'
		+'        <li><a id="cust_join_form" href="#">회원가입</a></li>'
		+'        <li><a id="emp_access_form" href="#">사원등록</a></li>'
		+'        <li><a id="emp_access" href="#">사원 접속</a></li>'
		+'      </ul><br>'
		+'      <div class="input-group">'
		+'        <input type="text" class="form-control" placeholder="Search Blog..">'
		+'        <span class="input-group-btn">'
		+'          <button class="btn btn-default" type="button">'
		+'            <span class="glyphicon glyphicon-search"></span>'
		+'          </button>'
		+'        </span>'
		+'      </div>'},
	}
			
		
		
	
