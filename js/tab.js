window.onload=function(){
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
}