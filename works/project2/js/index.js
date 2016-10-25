
window.onload=function(){
	var oplay = document.getElementById('play'),
		oImg = oplay.getElementsByTagName('p');

		
		//获取浏览器的可视宽高
		var winWidth = document.body.clientWidth;  
		var winHeight = window.innerHeight;			

		// 设置父级容器宽高等同于浏览器可视宽高
		$('#play').css({
			width: winWidth+'px',
			height: winHeight+'px',
		});

		// 设置p容器宽高等同于浏览器可视宽高
		$('#play p').css({
			width: winWidth+'px',
			height: winHeight+'px',
		});

		// 设置banner文字宽等同于浏览器可视宽高
		$('#imgtext p').css({
			width: winWidth+'px'
		});
		
		$('#foote').css({
			width: winWidth+'px'
		});
		// 定义浏览器宽度发生变化执行
		window.onresize = function() {
			

		// 再次获取窗口宽高
		var winWidth = document.body.clientWidth;   
		var winHeight = window.innerHeight;		
			
		// 等同于上面 重新设置一遍
		$('#play').css({
			width: winWidth+'px',
			height: winHeight+'px',
		});

		$('#play p').css({
			width: winWidth+'px',
			height: winHeight+'px',
		});

		$('#imgtext p').css({
			width: winWidth+'px'
		});
		$('#foote').css({
			width: winWidth+'px'
		});
		
	}
	//创建作品一整块的元素
	
//		var imgarr = ['img/j1.jpg','img/j2.jpg','img/j3.jpg','img/j4.jpg','img/j5.jpg','img/j6.jpg','img/j7.jpg','img/j8.jpg','img/j9.jpg',
//			
//				'img/j10.jpg','img/j11.jpg','img/j12.jpg','img/j13.jpg','img/j14.jpg','img/j15.jpg','img/j16.jpg','img/j17.jpg','img/j30.jpg','img/j19.jpg','img/j27.jpg'
//						
//			]

		var imgarr = ['img/a.jpg','img/b.jpg','img/c.jpg','img/d.jpg','img/e.jpg','img/f.jpg','img/a.jpg','img/g.jpg','img/h.jpg',
			
				 'img/i.jpg','img/j.jpg','img/k.jpg','img/l.jpg','img/m.jpg','img/n.jpg','img/o.jpg','img/p.jpg','img/q.jpg','img/r.jpg','img/s.jpg'
						
			]
		var imgtext = ['宜室宜家','离你远远的','温暖橘黄','青青草地','红豆生南国','春来发几枝','愿君多采撷','此物最相思','向晚意不适','驱车登古原',
	
				'夕阳无限好','只是近黄昏','只有我自己','闷人咖啡','静夜的单簧管','回忆是红色天空','我爱雀斑','天空','Keep It Together','长大',
			]
			
		var woul = works.getElementsByTagName('ul')[0];
			for(var i = 0;i<imgarr.length;i++){
				var list = document.createElement('li');
				var imgs = document.createElement('img');
				var lidi = document.createElement('div');
				var p = document.createElement('span');
				imgs.src = imgarr[i];
				list.appendChild(imgs);
				lidi.appendChild(p);
				list.className = 'list';
				lidi.className = 'lidi';
				p.innerHTML = imgtext[i];
				list.appendChild(lidi);
				woul.appendChild(list);
			}
		
			$("#ul li").hover(function(){
//				$("div",this).stop().animate({
//					height:'337px',
//				},600)
				$(this).find('img').addClass('active');
			},function(){
//				$("div",this).stop().animate({
//					height:'0',
//				},600)
				$(this).find('img').removeClass('active');
			});
	
			$(function(){
			//调用插件boxhovermodal,一个操作元素,一个参数
			//参数可以为空,默认为.box-hover-modal-m
				$(".list").boxhovermodal(".lidi");
			});
			
	// 幻灯片js
	//  函数用于获取一个对象的css属性，getComputedStyle用于兼容ie
	 function getStyle(obj, attr){
            return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
        }
      
        

		// obj对象在这个列子中 为  轮播图的div== oWrap
		// stycss 为 想获取的对象的css样式
		// olength 为 img元素设定的 left 值
		// osize 用于 轮播图定时器每次 循环 偏移的值
		// otime 为定时器每次循环的间隔,一个时间，控制每次运动走完的时间。
		// funchu 为 点击事件 下的一个函数
        function move( obj, stycss, olength, osize, otime, funchu){
            var xtime = 0;

           // 将自定义属性设置为false
            obj.dclick = false;

            // 这步用于左右滑动，返回每次的 偏移值为正数或者负数
            osize = olength>0? osize : -osize;

            // 定时器
            obj.xfun=setInterval(function(){

            	// 设置对象 的 css = 每次获取的新值 + 偏移的值
                obj.style[stycss] = parseInt(getStyle(obj,stycss))+osize+'px';

                // 循环一次+1
                xtime++;

                // 如果 偏移值x循环次数的值 > olength这里为获取的屏幕宽度
                if (Math.abs(osize * xtime)>Math.abs(olength)) {

                	// 清除定时器
                    clearInterval(obj.xfun);

                    // 自定义属性设置为真，等同于第二次定时器可以执行
                    obj.dclick = true;

                    // 触发funchu函数
                    funchu();
                };

            },otime);
        }


        // 数组存入图片地址
       
        var aImg = ['img/1.jpg', 'img/2.jpg'], 
        	// num用于aImg取值
            num = 0;

            // 定义一个自定义开关
            oImg[0].dclick = true;

            // 设置最初的图片背景
            oImg[0].style.backgroundImage = 'url('+aImg[1]+')';
            oImg[1].style.backgroundImage = 'url('+aImg[0]+')';
			var table = document.getElementById('table');
			var tblspan = table.getElementsByTagName('span');
			var target=-winWidth;
            function next(){
            	 var table = document.getElementById('table');
				 var tblspan = table.getElementsByTagName('span');
            	// 如果自定义属性为 true 的时候 往下执行,反之return
                if (!oImg[0].dclick)return;

                // 设置两个图片的left值为0
                oImg[0].style.left='0';
                oImg[1].style.left= '0';

                // 函数执行一次 num+1
                num++;

                // 如果num的值等于图片数组的长度，赋值为0
                if (num==aImg.length)num = 0;

                // 设置banner图2的背景
                oImg[1].style.backgroundImage = 'url('+aImg[num]+')';
                //让小选项卡也跟着切换
				for(var i = 0;i<tblspan.length;i++){
					tblspan[i].index = i;
					for(var i = 0;i<tblspan.length;i++){
						tblspan[i].className = 'none'
					}
					tblspan[num].className = 'active';
				}
//				
                // 调用move函数
                move(oImg[0], 'left', target, 20, 20, function(){

                	// 让banner图1的背景等于banner图2
                    oImg[0].style.backgroundImage = oImg[1].style.backgroundImage;

                    // 图1的ledt重置
                    oImg[0].style.left = '0';

                    
                });
                
		
            }
           
           var timer = setInterval(next, 4000);
           for(var i = 0;i < tblspan.length;i++){
           		tblspan[i].index = i;
           		tblspan[i].pal = false;
           		tblspan[i].onmouseover = function(){
           			clearInterval(timer);
           		}
           		tblspan[i].onmouseout = function(){
   					console.log(1)
           			timer = setInterval(next, 4000);
           		}
           		tblspan[i].onclick = function(){
           			clearInterval(timer);
           			if(this.index == 0) {
           				target =- winWidth;
           				
           			}else{
           				target=winWidth;
           			}
					next();
           		}
   			
           }
           
     		//导航栏显示      
     		var onoff = document.getElementById('onoff');
     		var nav = document.getElementById('nav');
     		var bgf = document.getElementById('bg-mask');
     		var waof = document.getElementById('waof');
          	onoff.onclick = function(){
          		if(!onoff.onff){
          			nav.className = 'show';
          			bgf.className = 'showw';
          			bgf.style.opacity = '0.8';
          			waof.style.background = 'rgba(0,0,0,0)';
          			onoff.style.background = 'url(img/mea.jpg)';
          			onoff.style.backgroundSize= ' 35px,30px';
          			
          			
          		}else{
          			nav.className = 'close';
					bgf.className = 'closee';
//					bgf.style.opacity = '0';
          			onoff.style.backgroundImage = '';
          			waof.style.background = '';
          		}
          			onoff.onff = !onoff.onff
          	};
          	
          	//3d圆圈图
          	var view = document.getElementById('view');
          	var via = view.getElementsByTagName('a')[0];
          	var minbar = document.getElementById('minbar');
          	var miimg = minbar.getElementsByTagName('img');
          	via.onclick = function(){
          		if(!via.cur){
          			minbar.style.display = 'block';
          		}
          		
          	}
          	minbar.onclick = function(){
          		this.style.display = "none";
          	};
          	for(var i = 0;i<miimg.length;i++){
		          miimg[i].addEventListener('click', function(ev){
					ev.cancelBubble = true;
					return
				})
          	}
          	//点击展开文字
          	var face = document.getElementById('face');
          	var faceh4 = face.getElementsByTagName('h4');
          	var add = document.getElementsByClassName('tianjia');
          	for(var i = 0;i<add.length;i++){
          		add[i].index = i
          		add[i].onclick = function(){
          			if(this.onoff){
          				faceh4[this.index].style.height = 0;
          			}else{
          				faceh4[this.index].style.height = 170 + 'px';
          			} 
          			this.onoff = !this.onoff
          		}
          	}
          	
          	//屏幕滚动元素显示效果
          	scroll();
          	function scroll(){
          		var h1 = document.getElementsByTagName('h1');
          		var h2 = document.getElementsByTagName('h2');
          		var heng = document.getElementsByClassName('heng');
          		var view = document.getElementById('view');
          		var face = document.getElementById('face');
          		var works = document.getElementById('works');
          		var woul = works.getElementsByTagName('ul')[0];
          		var fali = face.getElementsByTagName('li');
          		var tet = document.getElementById('text');
          		var onoff = document.getElementById('onoff')
          		for(var i = 0;i<fali.length;i++){
          			fali[i].onmouseover = function(){
          				this.style.transition  = 1+'s';
          				this.style.transform  = 'translateZ(10px)';
          			}
          			fali[i].onmouseout = function(){
          				this.style.transition  = 1+'s';
          				this.style.transform  = '';
          			}
          		}
          		document.onscroll = function(){
          			var scl = document.body.scrollTop||document.documentElement.scrollTop;
	          		if(scl > 200){
	          			h1[0].style.opacity = 1; 
	          			h1[0].style.transition = '0.5s'
	          			h1[0].style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
	          		}else{
	          			h1[0].style.opacity = 0; 
	          			h1[0].style.transition = '0.5s'
	          			h1[0].style.transform = 'matrix(1.5, 0, 0, 1.5, 0, 0)';
	          		}
	          		if(scl > 300){
	          			h2[0].style.opacity = 1; 
	          			h2[0].style.transition = '0.5s'
	          			h2[0].style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
	          		}else{
	          			h2[0].style.opacity = 0; 
	          			h2[0].style.transition = '0.5s'
	          			h2[0].style.transform = 'matrix(1.5, 0, 0, 1.5, 0, 0)';
	          		}
	          		if(scl > 400){
	          			heng[0].style.opacity = 1; 
	          			heng[0].style.transition = '0.5s'
	          			heng[0].style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
	          		}else{
	          			heng[0].style.opacity = 0; 
	          			heng[0].style.transition = '0.5s'
	          			heng[0].style.transform = 'matrix(1.5, 0, 0, 1.5, 0, 0)';
	          		}
	          		if(scl > 500){
	          			tet.style.opacity = 1; 
	          			tet.style.transition = '0.5s'
	          			tet.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
	          		}else{
	          			tet.style.opacity = 0; 
	          			tet.style.transition = '0.5s'
	          			tet.style.transform = 'matrix(1.5, 0, 0, 1.5, 0, 0)';
	          			
	          		}
	          		if(scl > 600){
	          			view.style.opacity = 1; 
	          			view.style.transition = '0.5s'
	          			view.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
	          			
	          		}else{
	          			view.style.opacity = 0; 
	          			view.style.transition = '0.5s'
	          			view.style.transform = 'matrix(1.5, 0, 0, 1.5, 0, 0)';
	          		
	          		}
	          		if(scl > 700){
//	          			for(){}
	          			fali[0].style.opacity = 1; 
	          			fali[1].style.opacity = 1;
	          			fali[2].style.opacity = 1;
	          			fali[0].style.transition = '0.5s'
	          			fali[1].style.transition = '0.5s'
	          			fali[2].style.transition = '0.5s'
	          			fali[0].style.marginright = 50 +'px';
	          			fali[1].style.marginLeft = 35 +'px';
	          			fali[2].style.marginLeft = 35 +'px';
	          			fali[0].style.transform = 'scale(1,1)'
	          			fali[1].style.transform = 'scale(1,1)';
	          			fali[2].style.transform = 'scale(1,1)';

          				
	          		}else{
	          			fali[0].style.opacity = 0; 
	          			fali[1].style.opacity = 0;
	          			fali[2].style.opacity = 0;
	          			fali[0].style.transition = '0.5s'
	          			fali[1].style.transition = '0.5s'
	          			fali[2].style.transition = '0.5s'
	          			fali[0].style.marginright =  100 +'px';
	          			fali[1].style.marginLeft =  100 +'px';
	          			fali[2].style.marginLeft =  100 +'px';
	          			fali[0].style.transform = 'scale(1.5,1.5)';
	          			fali[1].style.transform = 'scale(1.5,1.5)';
	          			fali[2].style.transform = 'scale(1.5,1.5)';
	          		}
					if(scl > 900){
	          			h1[1].style.opacity = 1; 
	          			h1[1].style.transition = '0.5s';
	          			h1[1].style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
	          		}else{
	          			h1[1].style.opacity = 0; 
	          			h1[1].style.transition = '0.5s';
	          			h1[1].style.transform = 'matrix(1.5, 0, 0, 1.5, 0, 0)';
	          		}
	          		if(scl > 1100){
	          			h2[1].style.opacity = 1; 
	          			h2[1].style.transition = '0.5s';
	          			h2[1].style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
	          		}else{
	          			h2[1].style.opacity = 0; 
	          			h2[1].style.transition = '0.5s';
	          			h2[1].style.transform = 'matrix(1.5, 0, 0, 1.5, 0, 0)';
	          		}
	          		if(scl > 1200){
	          			heng[1].style.opacity = 1; 
	          			heng[1].style.transition = '0.5s'
	          			heng[1].style.transform = 'matrix(1, 0, 0, 1, 0, 0)';
	          		}else{
	          			heng[1].style.opacity = 0; 
	          			heng[1].style.transition = '0.5s'
	          			heng[1].style.transform = 'matrix(1.5, 0, 0, 1.5, 0, 0)';
	          		}
	          		if(scl > 1300){
	          			woul.style.opacity = 1; 
	          			woul.style.transition = '0.5s';
	          			woul.style.transform = 'matrix(1, 0, 0, 1, 0, 0)';

	          		}else{
	          			woul.style.opacity = 0; 
	          			woul.style.transition = '0.5s';
	          			woul.style.transform = 'matrix(0.7, 0, 0, 0.7, 0, 0)';
//	          
	          		}
          		}
        
          	}
          	
          //点击小鼠标，调到下一屏的页面
  
          $("#cus img").click(function(){
          	
				$('body,html').animate({scrollTop:$(window).height()}, 1000);
				
 		})
          
          //点击导航里面的按钮跳转相关页面
          $("#msi").click(function(){

				scrolly($(this));
          		
          		
          })
          $("#ms").click(function(){

				scrolly($(this));
          		
          })
          
          $("#me").click(function(){

				scrolly($(this));
          })
          $("#my").click(function(){

				scrolly($(this));
          })

		  $('#msi','#ms','#me','#my').click(function(){
		  	
		  		scrolly($(this));
		  })
  		  
		  function scrolly($item){
		  		$("#nav").addClass("close");
          		$("#bg-mask").addClass("closee");
          		$("#onoff").css({
          			background: '',
          		})
          		$("#waof").css({
          			background:'',
          		})
          		$("html,body").animate({scrollTop:$item.attr('st')},1000);
          		onoff.onff = !onoff.onff
		  }
			  	$("#msi").attr('st',$("#about_us").offset().top);
				$("#ms").attr('st',$("#works").offset().top);
				$("#me").attr('st',0);
				$("#my").attr('st',$("#foote").offset().top);
				
				
				//每次刷新页面，让滚动条回到顶端的位置
		  		setTimeout(function(){
		  			window.scrollTo(0,0);
		  		}, 20);
}


