var canvas = document.getElementById('canvas');
var gc = canvas.getContext('2d');
//创造处理音频的对象;
var context = new AudioContext();

function audioPlay(n){
	//创建音频;
	var audio = new Audio('mp3/'+Marr[n]);
	audio.addEventListener('canplay', function(){
		//添加要处理的媒体;
		var source = context.createMediaElementSource(audio);
		//创建获取频谱能量值的analyser节点;
		var analyser = context.createAnalyser();
		//链接频谱;
		source.connect(analyser);
		//链接系统扬声器节点;
		source.connect(context.destination);
		//判断开关状态,如果开关为true就调用播放音乐;
		if(onOff == true){
			//调用播放;
			audio.play();
		}
		//循环播放;
		audio.loop = 'loop';
		var array = new Uint8Array(analyser.frequencyBinCount);
		//获取到音频频率值。
		// analyser.getByteFrequencyData(array);
		(function(){
			//获取到音频频率值。
			analyser.getByteFrequencyData(array);
			gc.clearRect(0,0, 1887, 924);
				radius(150+array[600],25,'#0b0b0b');
				radius(260+array[180],2,'yellow');
				radius(280+array[100],15,'yellow');
				radius(600+array[5],25,'#0b0b0b');
				requestAnimationFrame(arguments.callee);
		})();
	});
	function radius(r,w,c){
		gc.beginPath();
		gc.lineWidth = w;
		gc.strokeStyle = c;
		gc.arc(canvas.width/2,canvas.height/2,r,0,Math.PI*2);
		gc.stroke();
		gc.closePath();
	};
	return window.audio = audio;
}
