"use strict";
/*
유효성 체크 
*/

//널체크
$.prototype.nullChecker=x=>{
	let flag = false;
	let i = 0;
	for (i in x){
		if(x[i] === ''){
			flag = true;
		}
	}
	return flag;
}

//제로체크
$.prototype.zeroChecker=x=>{
	let flag = false;
	let i = 0;
	for (i in x){
		if(x[i] == 0){
			flag = true;
		}
	}
	return flag;
}
