window.onload=function(){
//选项卡
   var downMenu=document.getElementsByClassName("downMenu");
   var navbar=document.getElementsByClassName("navbar");
   var lis=document.getElementsByClassName("dropdown");
   
   for(var i=0;i<lis.length;i++){
     lis[i].index=i;
     lis[i].onmouseover=function(){
         for(var j=0;j<navbar.length;j++){
            downMenu[j].style.display="none";
         }
            downMenu[this.index].style.display="block";
     }
     lis[i].onmouseout=function(){
         for(var j=0;j<lis.length;j++){
             downMenu[j].style.display="none";
         }
     }
   }


//轮播
var wins=document.getElementsByClassName("banner_img")[0]  
var imgs=document.getElementsByClassName("bannera")
var btnL=document.getElementsByClassName("btnL")[0]
var btnR=document.getElementsByClassName("btnR")[0]
  var spans=document.getElementsByClassName("btnspan")
  var num=0;
  spans[0].style.background="red";
  var t=setInterval(moveR,2000)
  wins.onmouseover=function(){
    clearInterval(t)
    btnL.style.display="block";
    btnR.style.display = "block";
  }
  wins.onmouseout=function(){
    t=setInterval(moveR,1000)
    btnL.style.display="none";
    btnR.style.display="none";

  }
  for(var i=0;i<imgs.length;i++){
    spans[i].index=i;
    spans[i].onclick=function(){
      num=this.index
      for(var i=0;i<imgs.length;i++){
        imgs[i].style["z-index"]=0;
        spans[i].style.background="gray"
      }
      imgs[this.index].style["z-index"]=5;
      spans[this.index].style.background="red" 
    }
  }
  btnR.onclick=function(){
    moveR();
  }
  btnL.onclick=function(){
    moveL()
  }
  function moveR(){
    num++;
    if(num==imgs.length){
      num=0;
    }
    for(var i=0;i<imgs.length;i++){
      imgs[i].style["z-index"]=0;
      spans[i].style.background="gray"
    } imgs[num].style["z-index"]=5;
    spans[num].style.background="red"
  }
  
  function moveL(){
    num--
    if(num<0){
      num=imgs.length-1;
    }
    for(var i=0;i<imgs.length;i++){
      imgs[i].style["z-index"]=0;
      spans[i].style.background="gray"
    } imgs[num].style["z-index"]=5;
    spans[num].style.background="red"
  }
}


