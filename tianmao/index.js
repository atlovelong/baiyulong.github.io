/*
* @Author: Administrator
* @Date:   2017-08-29 08:21:22
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-29 22:08:14
*/
window.onload=function(){
 var lit1=document.querySelectorAll(`.asideleft li`)
 var imgs2=document.querySelectorAll(`.imgs ul li`)
 var box=document.querySelector(`.box`);
 var img=document.querySelectorAll(`.img li`)
 var diandian=document.querySelectorAll(`.dian li`)
 var width=parseInt(getComputedStyle(box,null).width);
    var flag=true; 
	var now=0;
	var next=0;
	var move=function(){
		next=now+1
		if (next>=img.length) {
			next=0
		}
		img[next].style.left=width+`px`;
		diandian[now].classList.remove(`active`);
		diandian[next].classList.add('active')
		animate(img[now],{left:-width});
	    animate(img[next],{left:0},function(){
	    	flag=true;
	    });
	    now=next;
	}
	let t=setInterval(move,3000)
	box.onmouseover=function(){
		clearInterval(t)
	}
	box.onmouseout=function(){
		t=setInterval(move, 3000)
	}
	diandian.forEach(function(value,index){
 	    value.onclick=function(){
 	    	if (flag) {
 	    		if (index>now) {
		             img[index].style.left=width+`px`;
		             diandian[now].classList.remove(`active`);
		             diandian[index].classList.add('active')
		             animate(img[now],{left:-width});
	                 animate(img[index],{left:0},function(){
	                 	flag=true;
	                 });
	                 flag=false;
	                 now=index;
 	    	    }else if(index<now){
		             img[index].style.left=-width+`px`;
		             diandian[now].classList.remove(`active`);
		             diandian[index].classList.add('active')
		             animate(img[now],{left:width});
	                 animate(img[index],{left:0},function(){
 	    	    	     flag=true;
	                 });
	                 flag=false;
	                 now=index;
 	    	    }else{
 	    	    	flag=true; 
 	    	    }
 	    	}
	    }    
	})	


lit1.forEach(function(a,b){
		a.onmouseover=function(){
			imgs2[b].classList.add('active');
		}
		a.onmouseout=function(){
			imgs2[b].classList.remove('active');
		}
})
}