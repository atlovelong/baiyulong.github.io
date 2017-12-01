/*
* @Author: Administrator
* @Date:   2017-08-28 08:49:44
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-12 23:50:57
*/
window.onload=function(){
  var lit=document.querySelectorAll(`.rbtq li`);
  var imgs=document.querySelectorAll(`.peijianbox .active1`)
  var lit1=document.querySelectorAll(`.asidebox-box`)
  var imgs2=document.querySelectorAll(`.asidejs`)
  var box=document.querySelector(`.bigbox`);
  var img=document.querySelectorAll(`.img li`);
  var width=parseInt(getComputedStyle(box,null).width);
  var diandian=document.querySelectorAll(`.dian li`);
  var left=document.querySelector(`.left`);
  var right=document.querySelector(`.right`);
  var gwcbox=document.querySelector(`.gouwuche`);
  var gwc=document.querySelector(`.gwcbox`);
  var mxdpbox=document.querySelector(`.mxdpbox`)
  var starleft=document.querySelector(`.textbox ul li:first-child`);
  var starright=document.querySelector(`.textbox ul li:last-child`);
  var mxdp=document.querySelector(`.mxdp`)
  var starwidth=parseInt(getComputedStyle(mxdpbox,null).width)
  var flag=true;
  console.log(starwidth);
  var now=0;
  var next=0;
 console.log(width)
lit.forEach(function(a,b){
    a.onmouseover=function(){
      for (let i=0;i<lit.length;i++){
        lit[i].classList.remove(`active`);
        imgs[i].classList.remove(`active2`);
      }
      a.classList.add(`active`);
      imgs[b].classList.add(`active2`);
    }
})
lit1.forEach(function(a,b){
		a.onmouseenter=function(){
			 imgs2[b].classList.add('asidejsactive');
		}
		a.onmouseleave=function(){
			 imgs2[b].classList.remove('asidejsactive');
		}
})  
var move=function(){
    next=now+1
    if (next>=img.length) {
      next=0
    }
    diandian[now].classList.remove(`active`);
    diandian[next].classList.add('active')
    animate(img[now],{opacity:0},700);
    animate(img[next],{opacity:1},700,function(){
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
  right.onclick=function(){
    if (flag) {
      move()
    }
    flag=false;
  }
  left.onclick=function(){
    if (flag) {
        next=now-1
        if (now<=0) {
          next=img.length-1
        }
        diandian[now].classList.remove(`active`);
        diandian[next].classList.add('active')
        animate(img[now],{opacity:0},700);
        animate(img[next],{opacity:1},700,function(){
            flag=true;
        });
        now=next;
    }
    flag=false;    
  }
  var t2;
  diandian.forEach(function(value,index){
      value.onmouseover=function(){
        t2=setTimeout(function(){
          diandian[now].classList.remove(`active`);
          diandian[index].classList.add('active')
          animate(img[now],{opacity:0},700);
          animate(img[index],{opacity:1},700);
          now=index;
        }, 300)                  
      }
      value.onmouseout=function(){
             clearTimeout(t2)
      }
  }) 
  gwcbox.onmouseover=function(){
    animate(gwc,{height:100},200)
  } 
  gwcbox.onmouseout=function(){
    animate(gwc,{height:0},200)
  } 
  starright.onclick=function(){
    animate(mxdp,{left:-starwidth})
  }
  starleft.onclick=function(){
    animate(mxdp,{left:0})
  }
  var nrbigbox=document.querySelector(".spt > li:nth-child(1) .nrbigbox");
  var nrbox=document.querySelectorAll(".spt > li:nth-child(1) .nrbox");
  var nrleft=document.querySelector(".spt > li:nth-child(1) .nrleft");
  var nrright=document.querySelector(".spt > li:nth-child(1)  .nrright");
  var nrwidth=nrbox[0].offsetWidth;
  var nrdian=document.querySelectorAll(".spt > li:nth-child(1)> ul> li")
  var nrbigbox1=document.querySelector(".spt > li:nth-child(2) .nrbigbox1");
  var nrleft1=document.querySelector(".spt > li:nth-child(2) .nrleft");
  var nrright1=document.querySelector(".spt > li:nth-child(2) .nrright");
  var nrdian1=document.querySelectorAll(".spt > li:nth-child(2)> ul> li")
  var nrbigbox2=document.querySelector(".spt > li:nth-child(3) .nrbigbox");
  var nrleft2=document.querySelector(".spt > li:nth-child(3) .nrleft");
  var nrright2=document.querySelector(".spt > li:nth-child(3) .nrright");
  var nrdian2=document.querySelectorAll(".spt > li:nth-child(3)> ul> li");
  var nrbigbox3=document.querySelector(".spt > li:nth-child(4) .nrbigbox1");
  var nrleft3=document.querySelector(".spt > li:nth-child(4) .nrleft");
  var nrright3=document.querySelector(".spt > li:nth-child(4) .nrright");
  var nrdian3=document.querySelectorAll(".spt > li:nth-child(4)> ul> li")
  console.log(nrdian)
  var nrclick=function(box,dian,left,right){
    var n=1;
    right.onclick=function(){
      animate(box,{left:-nrwidth*n})
      for(var i=0;i<dian.length;i++){
        dian[i].classList.remove("nractive");
      }
      dian[n].classList.add('nractive')
      if (n<dian.length-1) {
        n++;
      }else{
        return
      }
    }
    left.onclick=function(){
      animate(box,{left:-nrwidth*(n-1)})
      for(var i=0;i<dian.length;i++){
        dian[i].classList.remove("nractive");
      }
      dian[n-1].classList.add('nractive')
      if (n<=1) {
        return
      }else{
        n--
      }
    }
    dian.forEach(function(value,index){
      value.onclick=function(){
          for(var i=0;i<dian.length;i++){
            dian[i].classList.remove("nractive");
          }
          dian[index].classList.add('nractive')
          animate(box,{left:-nrwidth*index})
      }
    })
  }
  nrclick(nrbigbox,nrdian,nrleft,nrright);
  nrclick(nrbigbox1,nrdian1,nrleft1,nrright1);
  nrclick(nrbigbox2,nrdian2,nrleft2,nrright2);
  nrclick(nrbigbox3,nrdian3,nrleft3,nrright3);
  var dhbox=document.querySelector(".dhbox");
  var dhzb=document.querySelectorAll(".dhzb > li");
  var dhzbbox=document.querySelector(".dhzb");
  var dhxxk=document.querySelectorAll(".dhbox > main > ul");
  var aa=true;
  dhzb.forEach(function(value,index){
      value.onmouseover=function(){
        
        for(let i=0;i<dhxxk.length;i++){
          dhxxk[i].classList.remove("actives")
        }
        dhxxk[index].classList.add('actives')
          animate(dhbox,{height:200},300);
        }
  })
  dhzbbox.onmouseout=function(){
      animate(dhbox,{height:0},300)
  }
}

 