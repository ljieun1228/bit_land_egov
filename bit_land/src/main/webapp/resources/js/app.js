var app = app ||{};
app =(()=>{
     var init =(x)=>{
           app.$.init(x);
     };
     var onCreate =()=>{
           setContentView ();
     };
     var setContentView =()=>{
    	 $.when(
    				$.getScript($.js()+'/component/compo.js'),
    				$.getScript($.js()+'/customer/cust.js'),
    				$.getScript($.js()+'/employee/emp.js')
    			).done(()=>{
    				cust.permission.login();   				
  				
    			});
     };
     return {init:init, onCreate: onCreate};
})();


app.$ = {
		init : (x)=>{
			$.getScript(x+'/resources/js/router.js',()=>{
				$.extend(new Session(x));
				app.onCreate();
			})
		}
	};


