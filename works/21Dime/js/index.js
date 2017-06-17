var left = document.getElementById('leftborder')
var right = document.getElementById('rightborder')
var num1 = 0,num2=0;
var n = 0;
var n1 = 1;
var timer = null,timer2 = null;
var text = ["AINTI' A WOMAN?",'PIRANHA','THE COURT JESTER','NOMADE SlANG','HEY 30','DASH!','THEER LITTLE WORDS'];
var Parr = ['sabrina.png','Jungle.png','tigran.png','ibrahimmaalouf.png','candy.png','Airelle.png','cyrille.png'];
var Iarr = ['SE.png','JT.png','TN.png','IF.png','CR.png','AN.png','CE.png'];
var Marr = ['Woman.mp3','Piranha.mp3','The Court Jester.mp3','Nomade Slang.mp3','Hey Now.mp3','Boston.mp3','Three Little Words.mp3',]
//点击开始停止音乐创建的开关;
var onOff = true;
//给滚轮事件加的开关;
var RonOff = true;
//点击menu时效果切换创建的开关;
var MonOff = false;
//记录页面加载完成时music-name的字体颜色;
var prevcolor = $('.music-name').css('color');

//加载进度页面;
timer = setInterval(function(){
	num1++
	//设置旋转的角度以5倍的速度自转360度,判断当它转到225度的时候就停止转动;
	right.style.transform = 'rotate('+(45+1*num1%360)+'deg)';
	if(right.style.transform == 'rotate(225deg)'){
		clearInterval(timer);
		timer2 = setInterval(function(){
			num2++
			left.style.transform = 'rotate('+(45+1*num2%360)+'deg)';
			if(left.style.transform == 'rotate(225deg)'){
				clearInterval(timer2);
				//利用缩放使内心圆向外扩张并且充满整平;
				$('#yellow-round').css({
					transform: 'scale(5)'
				});
				//设置一个延时定时器等我的背景全部刷新完毕之后使我的中心内容淡出,Loding也隐藏主页显示;
				setTimeout(function(){
					$('.preloader-content').fadeOut(1000,function(){
						$('#Loding').hide();
						$('#one-page').show();
						sabrina_starke();
						se();
						audioPlay(0);
						next();
						prev();
					});
				},1600);
			}
		},30)
	}
},30);

//控制鼠标移入移除sLogo时触发hover效果;
$('.circle-hover').hover(function(){
	$('.circle-hover .circle').css({
		transform: 'scale(1)',
		opacity: '0.4'
	})
},function(){
	$('.circle-hover .circle').css({
		transform: 'scale(0.1)',
		opacity: '0'
	})
});

//鼠标移入menu时hover效果;
$('.menu').hover(function(){
	//判断当切换到two-page页面后停止menu的hover效果;
	if(MonOff){
		return;
	}
	$('.circle2').css({
		transform: 'scale(1)',
		opacity: '1'
	})
	$('.menu-label')[0].style.color = '#000';
	$('.menu-dot').css({
		background:'#000'
	})
	$('.menu-dot:nth-child(1)').css({
		opacity:0
	})
	$('.menu-dot:nth-child(3)').css({
		opacity:0
	})
	$('.menu-dot:nth-child(4)').css({
		opacity:1
	})
	$('.menu-dot:nth-child(5)').css({
		opacity:1
	})
},function(){
	//判断当切换到two-page页面后停止menu的hover效果;
	if(MonOff){
		return;
	}
	$('.circle2').css({
		transform: 'scale(0.1)',
		opacity: '0'
	})
	$('.menu-label')[0].style.color = '#F5EA13';
	$('.menu-dot').css({
		background:'#fff'
	})
	$('.menu-dot:nth-child(1)').css({
		opacity:1
	})
		$('.menu-dot:nth-child(3)').css({
		opacity:1
	})
	$('.menu-dot:nth-child(4)').css({
		opacity:0
	})
	$('.menu-dot:nth-child(5)').css({
		opacity:0
	})
});

//鼠标移入播放音乐时hover效果;
$('.play-btn').hover(function(){
	$('.play-btn .circle1').css({
		transform: 'scale(1)',
		opacity: '0.4'
	})
},function(){
	$('.play-btn .circle1').css({
		transform: 'scale(0.1)',
		opacity: '0'
	})
});

//歌手sabrina_starke图片切换(为了做页面刚打开时第一张图片滑入的效果);
// sabrina_starke();
function sabrina_starke(){
	$('.pic').animate({
		right:0,
		opacity:1
	},
	800,
	'linear'
	);
};

//文字se图片切换;
// se();
function se(){
	$('.se').animate({
		left:140,
		opacity:1
	},
	800,
	'linear'
	);
};

//获取音乐开关;
$('.play-btn').click(function(){
	if (onOff) {
		//在two-page页面中music-name文字点击时颜色永远是黑色;在one-page页面时点击文字切换颜色;
		if(MonOff == true){
			$('.music-name')[0].style.color = 'black';
		}else{
			$('.music-name')[0].style.color = '#5b5c5b';
		};
		//点击开关时关闭音乐;
		audio.pause();
		for(var i=0;i<divs.length;i++){
			clearInterval(divs[i].timer1);
			clearInterval(divs[i].timer);
		}
	}else{
		if(MonOff == true){
			$('.music-name')[0].style.color = 'black';
		}else{
			$('.music-name')[0].style.color = '#f5ea13';
		};
		//点击开关时开启音乐;
		audio.play();
		go(0,1000);
		go(1,1500);
		go(2,2000);
	}
	onOff = !onOff;
	//判断音乐播放状态改变颜色(记录颜色);
	if (onOff) {
		prevcolor = '#f5ea13';
	}else{
		prevcolor = '#5b5c5b';
	};
});

//页面默认初始化;
initialize();
function initialize(){
	//音乐名;
	$('.music-name')[0].innerHTML = text[0];
	//对应的歌曲数字;
	$('.nav-count')[0].innerHTML = '0'+1;
	//歌曲总数;
	$('.nav-total')[0].innerHTML = '0'+text.length;
	//右侧歌手图片;
	$('.Pimgs')[0].src = 'imgs/pic/'+ Parr[0];
	//左侧歌名图片
	$('.Imgs')[0].src = 'imgs/one-page/'+ Iarr[0];
	
};

//点击next下一个按钮效果;
function next(){
	//next点击事件;
	$('.next').click(function(){
		//根据开关状态防止多次点击;
		if(!RonOff)return;
		//改变开关状态阻止多次点击时代码继续运行;
		RonOff = !RonOff;
		//当点击是让上一个音乐暂停播放;
		audio.pause();
		//判断当前onOff的状态,无论开还是关当点击上一个下一个时都要关闭上一个音乐的播放状态;
		// if(onOff == false){
		// 	audio.pause();
		// };
		n++;
		n1++;
		if (n > text.length-1) {
			n= 0;
		}
		if (n1 > text.length) {
			n1 = 1;
		}
		//把切换效果封装在函数中然后在change切换事件中回掉;
		change(function(){
			$('.music-name')[0].innerHTML = text[n];
			$('.nav-count')[0].innerHTML = '0'+n1;
			var pimgs = $('.Pimgs')[0];
			pimgs.src = 'imgs/pic/'+ Parr[n];
			adress(pimgs,n);
			$('.Imgs')[0].src = 'imgs/one-page/'+ Iarr[n];
			//从新调用audioPlay()函数利用传参来进行音乐的前后切换;
			audioPlay(n);
			//动画加载完成后改变开关状态可以进行下一次点击;
			RonOff = !RonOff;
		});
	});
};

//判断当前图片的路径，指定图片的宽度;
function adress(obj,n){
	switch(n){
		case 1:
			obj.style.width = '130%';
		break;
		case 4:
			obj.style.width = '90%';
		break;
		default:
			obj.style.width = '100%';
		break;
	}
}

//点击prev上一个按钮效果;
function prev(){
	//prev点击事件;
	$('.prev').click(function(){
		//根据开关状态防止多次点击;
		if(!RonOff)return;
		//改变开关状态阻止多次点击时代码继续运行;
		RonOff = !RonOff;
		//当点击时让上一个音乐暂停播放;
		audio.pause();
		//判断当前onOff的状态,无论开还是关当点击上一个下一个时都要关闭上一个音乐的播放状态;
		// if(onOff == false){
		// 	audio.pause();
		// };
		n--;
		n1--;
		if (n < 0) {
			n = text.length-1;
		}
		if (n1 < 1) {
			n1 = text.length;
		}
		//把切换效果封装在函数中然后在change切换事件中回掉;
		change(function(){
			$('.music-name')[0].innerHTML = text[n];
			$('.nav-count')[0].innerHTML = '0'+n1;
			var pimgs = $('.Pimgs')[0];
			pimgs.src = 'imgs/pic/'+ Parr[n];
			adress(pimgs,n);
			$('.Imgs')[0].src = 'imgs/one-page/'+ Iarr[n];
			isPlay = false;
			requestAnimationFrame(function(){
				isPlay = true;
				audioPlay(n);
				//动画加载完成后改变开关状态可以进行下一次点击;
				RonOff = !RonOff;
			});
		});
	});
};

//图片和文字切换时执行的函数;
function change(callback){
	//右侧图片运动;
	$('.pic').animate({
		right:-120,
		opacity:0
	},
	800,
	'linear',
	function(){
		callback();
		$('.pic').animate({
			right:0,
			opacity:1
		},
		800,
		'linear'
		)
	});

	//左侧图片运动;
	$('.se').animate({
		left:-140,
		opacity:0
	},
	800,
	'linear',
	function(){
		$('.se').animate({
			left:140,
			opacity:1
		},
		800,
		'linear'
		);
	});
};

//点击menu时two-page页面显示;
$('.menu').click(function(){
	MonOff = !MonOff;
	if (MonOff) {
		//切换到two-page页面后切换span中的innerHTML;
		$('.menu-label')[0].innerHTML = 'CLOSE';
		//所有的点全部显示;
		$('.menu-dot').css({
			background:'#black'
		})
		$('.menu-dot:nth-child(1)').css({
			opacity:1
		})
			$('.menu-dot:nth-child(3)').css({
			opacity:1
		})
		$('.menu-dot:nth-child(4)').css({
			opacity:1
		})
		$('.menu-dot:nth-child(5)').css({
			opacity:1
		})
		//点击menu时circle2的hover效果向外发散形成two-page页面;
		$('.circle2').css({
			transition: '0.8s',
			transform: 'scale(50)',
			opacity: 1,
		});
		//延时300毫秒后two-page页面显示;
		setTimeout(function(){
			//two-page页面显示;
			$('#two-page').css({
				display: 'block'
			});
			//提升menu的层级使得two-page页面显示;
			$('.menu').css('z-index','20');
			//提升脚步层级;
			$('footer').css('z-index','11');
			//初始化文字颜色为黑色;
			$('.music-name').css('color','black');
			//把所有的点颜色改为黑色;
			$('.menu-label').css({
				color: 'black'
			});
			//页面加载完后让hover圆隐藏;
			$('.circle2').css('display','none');
			$('.bar').css('background-color','black');
		},300);
		$('.logos').css('display','none');
	}else{
		$('.music-name').css({
			color:prevcolor
		});
		$('.circle2').css('display','block');
		//two-page页面隐藏;
		$('#two-page').css({
			display: 'none'
		});
		//切换到one-page页面后切换span中的innerHTML;
		$('.menu-label')[0].innerHTML = 'MENU';
		//使span的hover效果返回到鼠标移入时的状态;
		setTimeout(function(){
			$('.circle2').css({
			transition: '0.5s',
			transform: 'scale(1)',
			opacity: 1,
		});
		},10);
		$('.logos').css('display','block');
		$('.menu-dot').css({
			background:'#000'
		});
		$('.menu-dot:nth-child(1)').css({
			opacity:0
		});
		$('.menu-dot:nth-child(3)').css({
			opacity:0
		});
		$('.menu-dot:nth-child(4)').css({
			opacity:1
		});
		$('.menu-dot:nth-child(5)').css({
			opacity:1
		});
		$('.bar').css('background-color','white');
	};
});

//点击ul下的每个li发生的hover效果;
//鼠标移入:
$('.nav-list').hover(function(){
	//利用jQuery的方法获取到a标签下所有的img使透明度变成1;
	$('.C-hover>img').eq($(this).index()).css({
		opacity:1,
	});
	//利用jQuery的方法获取到a标签下所有的img使其旋转0度;
	$('.C-hover>img').eq($(this).index()).css('transform','rotateX(0deg)');
	//利用jQuery的方法获取到所有的span标签使其缩放到0.85倍;
	$('.artist-photo').eq($(this).index()).css('transform','scale(0.85)');
//鼠标移出:
},function(){
	//利用jQuery的方法获取到a标签下所有的img使其回到初始状态;
	$('.C-hover>img').eq($(this).index()).css({
		opacity:0
	});
	//利用jQuery的方法获取到a标签下所有的img使其回到初始状态;
	$('.C-hover>img').eq($(this).index()).css('transform','rotateX(90deg)');
	//利用jQuery的方法获取到所有的span标签使其回到初始状态;
	$('.artist-photo').eq($(this).index()).css('transform','scale(1)');
	//利用jQuery的方法获取到a标签下第7个img图片使其透明度为1,旋转角度始终是默认初始角度;
	$('.C-hover>img').eq(7).css({
		opacity:1,
		transform:'rotate(0deg)'
	});
});

//滚轮事件;
mScroll(document,function(){
	$('.prev').click();
	// console.log('向上滚动');
},function(){
	$('.next').click();
	// console.log('向下滚动');
});
function mScroll(obj,upper,down){
	obj.addEventListener('DOMMouseScroll', fn, false);
	obj.onmousewheel  = fn;
	function fn(ev){
		var n;
		/*
			负数代表向下
			正数是向上
			n就是这个数字
		*/
		if(ev.detail){
			//firefox
			n = -ev.detail;
		}else{
			//ie和chrome
			n = ev.wheelDelta;
		}
		//n小于0向下滚动，否则向上。
		if(n<0){
			down();
		}else{
			upper();
		}
	}
}
