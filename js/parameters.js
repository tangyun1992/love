// 封裝的思想，Move接口实现改变左右移动改变left，透明度，宽度，高度，
function startMove(obj,json,fn){
	var flag=true;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		for(var attr in json){
			var curr=0;
			if(attr=='opacity'){
				curr=Math.round(parseFloat(getStyle(obj,attr))*100);
			}else{
				curr=parseInt(getStyle(obj,attr));
			}
			var speed=(json[attr]-curr)/200;
			// var speed=obj.speed;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(curr!=json[attr]){
				flag=false;
				}
			if(attr=='opacity'){
				obj.style.filter='alpha(opacity:'+(curr+speed)+')';
				obj.style.opacity=(curr+speed)/100;
			}else{
				obj.style[attr]=curr+speed+'px'
			}
			}
		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},80);
}
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}


















