var compo = compo || {}
compo = {
		cust_login_form : ()=>{
		return '<h2>로그인</h2>'
		+'<form>'
		+'  <div class="imgcontainer">'
		+'    <img src="https://pbs.twimg.com/profile_images/896409586558574593/3PfL51iO_400x400.jpg" alt="Avatar" class="avatar">'
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
		return 	'<form action="/action_page.php" style="border:1px solid #ccc">'
		+'<div class="container">'
		+'<h2>회원가입</h2>'
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

		emp_join_form : ()=>{
		return 	'<form action="/action_page.php" style="border:1px solid #ccc">'
		+'<div class="container">'
		+'<h2>사원등록</h2>'
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
		
		emp_login_form : ()=>{
			return '<h2>사원접속</h2>'
			+'<form>'
			+'  <div class="imgcontainer">'
			+'    <img src="https://pbs.twimg.com/profile_images/896409586558574593/3PfL51iO_400x400.jpg" alt="Avatar" class="avatar">'
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
			

	}
			
		
		
	
