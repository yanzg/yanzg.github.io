var hei = Number($(window).height());
var box = $('#box')[0];
var num = 0;
var time;
var n=0;
var ul = document.getElementsByTagName('ul')[0];
var lis =ul.getElementsByTagName('li');
var ot = 0;

$('#themi1,#themi2,#themi3,#themi4').css({
	height:hei
});

//tiemi1的首次动画
tiemi1move();
function tiemi1move(){
	var p1 = $('.ti_p')[0];
	var p2 = $('.ti_p1')[0];
	var go = $('#go')[0];
	var bg = $('#bg')[0];
	$('.ti_p').fadeIn(500);
	
	mTween(p1,'top',200,600,'easeOut',function(){
		$('.ti_p1').fadeIn(500);
		mTween(p2,'top',300,600,'easeOut');
		$('#go').fadeIn();
		mTween(go,'top',380,600,'easeOut');
		$('#bg').fadeIn(1000);
		mTween(bg,'right',0,600,'easeOut');
		mTween(bg,'bottom',0,600,'easeOut');
	});
}
//tiemi的选入动画
function tiemi1move1(){
	var p1 = $('.ti_p')[0];
	var p2 = $('.ti_p1')[0];
	var go = $('#go')[0];
	$('.ti_p').fadeIn(600);
	
	mTween(p1,'top',200,800,'easeOut');
	setTimeout(function(){
		$('.ti_p1').fadeIn(600);
		mTween(p2,'top',300,800,'easeOut');
	},100)
	$('#go').fadeIn(700);
	mTween(go,'top',380,800,'easeOut');
	
}
//tiemi1的选出动画。
function tiemi1out(){
	var p1 = $('.ti_p')[0];
	var p2 = $('.ti_p1')[0];
	var go = $('#go')[0];
	$('.ti_p').fadeOut(500);
	$('.ti_p1').fadeOut(500);
	$('#go').fadeOut(700);
	
	mTween(p1,'top',10,400,'easeOut');
	mTween(p2,'top',500,400,'easeOut');
	setTimeout(function(){
		mTween(go,'top',500,400,'easeOut');
	},200);

}
//tiemi2选入动画。
function tiemi2move(){
	var img1 = $('#ti_img1')[0];
	var img2 = $('#ti_img2')[0];
	var img3 = $('#ti_img3')[0];


	$('#ti_img1').fadeIn(500);
	$('#ti_img2').fadeIn(2000);
	$('#ti_img3').fadeIn(500);
	mTween(img1,'top',100,800,'easeOut');
	mTween(img3,'top',230,800,'easeOut',function(){
		$('#cl').fadeIn(1000);
	});
	mTween(img2,'top',150,1000,'easeOut');
}


//tiemi2选出动画
 function tiemi2out(){
 	var img1 = $('#ti_img1')[0];
	var img2 = $('#ti_img2')[0];
	var img3 = $('#ti_img3')[0];


	$('#ti_img1').fadeOut(800);
	$('#ti_img2').fadeOut(1000);
	$('#ti_img3').fadeOut(800);
	$('#cl').fadeOut(500);
	mTween(img1,'top',200,800,'easeOut');
	mTween(img2,'top',600,500,'easeOut');
	mTween(img3,'top',500,800,'easeOut');
 }



 //tiemi3 选入动画
function tiemi3move(){
	$('#ti3_img1').fadeIn(2000);
	$('#ti3_img1')[0].style.transform = 'scale(1)';

	var img2 = $('#ti3_img2')[0];
	var img5 = $('#ti3_img5')[0];
	var img4 =  $('#ti3_img4')[0];
	$('#ti3_img4').fadeIn(1000);
	mTween(img4,'top',180,1000,'easeOut');
	mTween(img2,'top',245,1000,'easeOut',function(){
		$('#ti3_img3').fadeIn(1500);
		$('#ti3_img5').fadeIn(1000);
		mTween(img5,'top',300,1000,'easeOut')
		

	});

}
//tiemi3的选出动画

function tiemi3mout(){
	$('#ti3_img1').fadeOut(1000);
	$('#ti3_img1')[0].style.transform = 'scale(0.3)';

	var img2 = $('#ti3_img2')[0];
	var img5 = $('#ti3_img5')[0];
	var img4 =  $('#ti3_img4')[0];
	$('#ti3_img4').fadeOut(1000);
	mTween(img4,'top',-50,1000,'easeOut');
	$('#ti3_img3').fadeOut(400);
	mTween(img2,'top',550,800,'easeOut',function(){
		$('#ti3_img5').fadeOut(1000);
	});
	mTween(img5,'top',800,1000,'easeOut',function(){
			img5.style.top = '400px';
		})

}



//tiemi4的选入动画


function tiemi4move(){
	$('#ti4_img1').fadeIn(2000);
	 $('#ti4_img1')[0].style.transform = 'scale(1)';
	 var img2 = $('#ti4_img2')[0];
	 var img3 = $('#ti4_img3')[0];
	 var img4 = $('#ti4_img4')[0];
	 $('#ti4_img2').fadeIn(1000);
	 $('#ti4_img3').fadeIn(1000);
	 $('#ti4_img4').fadeIn(1000);
	 mTween(img2,'left',500,1000,'easeOut');
	 mTween(img3,'left',500,1000,'easeOut');
	 mTween(img4,'top',130,1000,'easeOut');

	
}

//tiemi4选出动画
function tiemi4out(){
	$('#ti4_img1').fadeOut(2000);
	 $('#ti4_img1')[0].style.transform = 'scale(0.3)';
	 var img2 = $('#ti4_img2')[0];
	 var img3 = $('#ti4_img3')[0];
	 var img4 = $('#ti4_img4')[0];
	 $('#ti4_img2').fadeOut(1000);
	 $('#ti4_img3').fadeOut(1000);
	 $('#ti4_img4').fadeOut(1000);
	 mTween(img2,'left',700,500,'easeOut');
	 mTween(img3,'left',260,500,'easeOut');
	 mTween(img4,'top',500,500,'easeOut');
}


function documen(){
	
	var onOff = true;
	mScroll(document,function(){
		
		if(!onOff){return}
			onOff = false;
		num--;
		qie(ot);
		if(num<0){num=3}
		fn1();
		mTween(box,'top',-num*hei,1000,'easeOut',function(){
			onOff = true;
			qie1();
		})
		ot = num;
	
	},function(){
		if(!onOff){return}
			onOff = false;
		num++;
		qie(ot);
		if(num>3){num=0}
		fn1();
		mTween(box,'top',-num*hei,1000,'easeBothStrong',function(){
			onOff = true;
			qie1();
		})
		ot = num;
	
	});

	

	function mScroll(obj,upper,down){
		obj.addEventListener('DOMMouseScroll',fn,false);
		obj.onmousewheel = fn;


		function fn(ev){
			var n;
			if(ev.detail){
				n = -ev.detail;
			}else{
				n =ev.wheelDelta;
			}

			if(n<0){
				down();
			}else{
				upper();
			}
		}
	}
}
documen();


function qie(ot){
	if(ot==0){
		tiemi1out();
	}
	if(ot==1){
		tiemi2out();
	}
	if(ot==2){
		tiemi3mout();
	}
	if(ot==3){
		tiemi4out();
	}
}


function fn(){
	for(var i=0;i<lis.length;i++){
		lis[i].index = i;
		lis[i].onclick = function(){
			var onOff = true;
			for(var j=0;j<lis.length;j++){
				lis[j].className = '';
			}
			ot = num;
			num = this.index;
			this.className = 'active';

			if(!onOff){return}
			onOff = false;

			qie(ot);
			mTween(box,'top',-num*hei,1000,'easeBothStrong',function(){
				onOff = true;
				qie1();
			});
			ot = num;
		};
	}
}
fn();
function qie1(){
	if(num==0){
		tiemi1move1();
	}
	 if(num==1){
		tiemi2move();
	}
	if(num==2){
		tiemi3move();
	}
	if(num==3){
		tiemi4move();
	}

}

function fn1(){
	for(var j=0;j<lis.length;j++){
				lis[j].className = '';
			}
			lis[num].className = 'active';
}