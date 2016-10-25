var scroll = document.getElementsByClassName('scroll')[0];
var scrollBox = document.getElementsByClassName('scroll-box')[0];
var onePage = document.getElementById('one-page');
var center = document.getElementById('center');
var maxY = scroll.clientHeight - scrollBox.offsetHeight; 
var innerY = onePage.clientHeight - center.offsetHeight; 
var music = document.getElementById('music');
var num = 0;
var onOff = true;
//点击menu时效果切换创建的开关;
var MonOff = false;
//记录页面加载完成时music-name的字体颜色;
var prevcolor = $('.music-name').css('color');
//鼠标点击事件;
scrollBox.onmousedown = function(ev){
		//记录按下的位置。
		var disy = ev.clientY - getPos(this).top;
		document.onmousemove = function(ev){
			//计算移动的位置。
			var y = ev.clientY - disy;
			//移动范围限制
			console.log(innerY)
			if(y<0){
				y = 0;
			}
			if(y>maxY){
				y = maxY;
			}
			//获取滚动条的比例;
			var scale = y /maxY;
			scrollBox.style.top = y+'px';
			center.style.top = scale*innerY+'px';
		};
		document.onmouseup = function(){
			this.onmousemove = null;
		};
		return false;
	};
//滚轮事件;
document.onmousewheel = function(ev){
		if (ev.wheelDelta < 0) {
			num += 10;
			if (num > maxY) {
				num = maxY;
			}
			var scale = num/maxY;
			scrollBox.style.top = num + 'px';
			center.style.top = scale*innerY + 'px';
		}
		if (ev.wheelDelta > 0) {
			num -=10;
			if (num < 0) {
				num = 0;
			}
			var scale = num/maxY;
			scrollBox.style.top = num + 'px';
			center.style.top = scale*innerY + 'px';
		}
	};
function getPos(obj){
	return obj.getBoundingClientRect();
}


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

//获取音乐开关;
$('.play-btn').click(function(){
	if (onOff) {
		//在two-page页面中music-name文字点击时颜色永远是黑色;在one-page页面时点击文字切换颜色;
		if(MonOff == true){
			$('.music-name')[0].style.color = 'black';
		}else{
			$('.music-name')[0].style.color = '#5b5c5b';
		};
		music.pause();
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
		music.play();
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