/*
* @Author: Administrator
* @Date:   2017-08-29 08:21:22
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-18 02:30:09
*/
window.onload=function(){
    var lit1=document.querySelectorAll(`.asideleft > li`);
    var imgs2=document.querySelectorAll(`.imgs > ul >li`);
    var box=document.querySelector(`.box`);
    var img=document.querySelectorAll(`.img li`);
    var diandian=document.querySelectorAll(`.dian li`);
    var width=parseInt(getComputedStyle(box,null).width);
    var floors=document.querySelectorAll(`.floor`);
    var lits=document.querySelectorAll(`.asidebox > li`);
    var lit=document.querySelector(`.asidebox`);
    var top=document.querySelector(`.asidetop li`);
    var topbox=document.querySelector(`.asidetop`);
    var color=[`yellow`,`blue`,`red`,`green`,`pink`,`yellowgreen`];
    var scjbox=document.querySelector(`.headerright li:nth-child(3)`);
    var scj=document.querySelector(`.scj`);
    var sjbbox=document.querySelector(`.headerright li:nth-child(5)`);
    var sjbimg=document.querySelector(`.sjbimg`);
    var sjzcbox=document.querySelector(`.headerright li:nth-child(8)`);
    var sjzc=document.querySelector(`.sjzc`);
    var wzdhbox=document.querySelector(`.headerright > ul > li:nth-child(9)`);
    var wzdh=document.querySelector(`.wzdh`);
    var headernav=document.querySelector(".headernav")
    var litright=document.querySelectorAll(`.asiboxy`)
    var divright=document.querySelectorAll(`.asibox > li > div`);
    console.log(wzdhbox);
    var flag=true; 	
    var asiflag=true; 
    var asiflag1=false;
	var now=0;
	var next=0;
	var asicolor=0
	var move=function(){
		next=now+1
		if (next>=img.length) {
			next=0
		}
		img[now].classList.remove(`ready`);
		img[next].classList.add('ready');
		diandian[now].classList.remove(`active`);
		diandian[next].classList.add('active')
	    now=next;
	}
	let t=setInterval(move,2000)
	box.onmouseover=function(){
		clearInterval(t)
	}
	box.onmouseout=function(){
		t=setInterval(move, 2000)
	}
	var t2
	diandian.forEach(function(value,index){
 	    value.onmouseenter=function(){
            t2=setTimeout(function(){
              diandian[now].classList.remove(`active`);
              diandian[index].classList.add('active')
              animate(img[now],{opacity:0},500);
              animate(img[index],{opacity:1},500);
              now=index;
            }, 200)                  
        }
       value.onmouseleave=function(){
             clearTimeout(t2)
        }    
	})	
    lit1.forEach(function(a,b){
		a.onmouseenter=function(){
			imgs2[b].classList.add('active');
		}
		a.onmouseleave=function(){
			imgs2[b].classList.remove('active');
		}
    })
    var floors=document.querySelectorAll(`.floor`);
    var lits=document.querySelectorAll(`.asidebox > li`);
    var lit=document.querySelector(`.asidebox`);
    var top=document.querySelector(`.asidetop li`);
    var topbox=document.querySelector(`.asidetop`);
    var color=[`yellow`,`blue`,`red`,`green`,`pink`,`yellowgreen`];
    window.onscroll=function(){
		var obj=document.body.scrollTop||document.documentElement.scrollTop;
		floors.forEach(function(value,index){
			asicolor=index;
			if(value.offsetTop-300<=obj){
				for(var i=0;i<lits.length;i++){
				   lits[i].style.backgroundColor=`#fff`;
			    }
			       lits[index].style.backgroundColor=color[index];
			}
			if (floors[0].offsetTop-300<=obj) {
				if(asiflag){
					asiflag=false;
					animate(headernav,{top:0})
					// animate(headernav,{display:"block"},200)
					animate(lit,{width:40,height:240,opacity:1},200);
			        animate(topbox,{width:38,height:38,opacity:1},200,function(){
			   	     asiflag1=true;	   
			        });
		        }
		   }
			if (floors[0].offsetTop-300>obj) {
				if (asiflag1) {
			        asiflag1=false;
					animate(headernav,{top:-50})
					// animate(headernav,{opacity:0},300)
					animate(lit,{width:0,height:0,opacity:0},300);
		            animate(topbox,{width:0,height:0,opacity:0},300,function(){
		   	        asiflag=true;
		   	        })
				} 
	        }	
	    })
    }
	lits.forEach(function(value,index){
		asicolor=index;
		value.onclick=function(){
			animate(document.body,{scrollTop:floors[index].offsetTop})
			animate(document.documentElement,{scrollTop:floors[index].offsetTop})
		} 
		value.onmouseover=function(){

	        console.log(1)
            for(var i=0;i<lits.length;i++){
    	        value.style.backgroundColor=`#fff`;
            }
            lits[index].style.backgroundColor=color[index]
        }
        value.onmouseout=function(){
        	if (index==asicolor) {
        		return
        	}else{
        	    lits[index].style.backgroundColor=`#fff`
        	}
        }   
	})
	top.onclick=function(){
		animate(document.body,{scrollTop:0})
	}
	var divflag=true;
    litright.forEach(function(value,index){
    	var index=index;
    	if (divflag) {
    		value.onmouseover=function(){
	    		animate(divright[index],{left:-75,opacity:1},function(){
	    			divflag=true;
	    		})  
	    	};
	    	value.onmouseout=function(){
	    		animate(divright[index],{left:-140,opacity:0},function(){
	    		})  
	    	}
    	}
    	
    })
	scjbox.onmouseover=function(){
		scj.style.display="block";

	}
    scjbox.onmouseout=function(){
		scj.style.display="none";

	}
	sjbbox.onmouseover=function(){
		sjbimg.style.display="block";

	}
    sjbbox.onmouseout=function(){
		sjbimg.style.display="none";

	}
	sjzcbox.onmouseover=function(){
		sjzc.style.display="block";

	}
    sjzcbox.onmouseout=function(){
		sjzc.style.display="none";
	}
	wzdhbox.onmouseover=function(){
		wzdh.style.display="block"
	}
	wzdhbox.onmouseout=function(){
		wzdh.style.display="none"
	}
	console.log(lits)
	//视频选项卡
	var split=document.querySelectorAll(".shipinbottom > ul > li");
	var sptlit=document.querySelectorAll(".shipintop > li");
	var spbox=document.querySelector(".shipinbottom > ul")
	var spleft=document.querySelector(".left");
	var spright=document.querySelector(".right");
    var spwidth=parseInt(getComputedStyle(sptlit[0],null).width);
	console.log(spwidth);
	split.forEach(function(value,index){
		var index=index;
        value.onmouseover=function(){
        	for(var i=0;i<sptlit.length;i++){
			sptlit[i].classList.remove("spactive")
		}
        	sptlit[index].classList.add('spactive');
        }
	})
	spleft.onclick=function(){
		animate(spbox,{left:-spwidth})
	}
	spright.onclick=function(){
		animate(spbox,{left:0})
	}
	console.log(sptlit)
}