var divs = document.getElementsByClassName('bar');
function go(i,num){
	divs[i].timer = setInterval(function(){
		var number = Math.random();
		if (number > 0.9) {
			divs[i].style.width = '20px';
		}else if(number > 0.7){
			divs[i].style.width = '18px';
		}else if(number > 0.5){
			divs[i].style.width = '16px';
		}else if(number > 0.3){
			divs[i].style.width = '14px';
		}else if(number > 0.1){
			divs[i].style.width = '12px';
		}else if(number > 0){
			divs[i].style.width = '10px';
		}
		divs[i].timer1 = setTimeout(function(){
			divs[i].style.width = '0px';
		},500);
	},num);
};

go(0,1000);
go(1,1500);
go(2,2000);