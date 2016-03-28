// window.onload=function(){
//    var downMenu=document.getElementsByClassName("downMenu");
//    var navbar=document.getElementsByClassName("navbar");
//    var lis=document.getElementsByClassName("dropdown");
   
//    for(var i=0;i<lis.length;i++){
//      lis[i].index=i;
//      lis[i].onmouseover=function(){
//          for(var j=0;j<navbar.length;j++){
//             downMenu[j].style.display="none";
//          }
//             downMenu[this.index].style.display="block";
//      }
//      lis[i].onmouseout=function(){
//          for(var j=0;j<lis.length;j++){
//              downMenu[j].style.display="none";
//          }
//      }
//    }
// }


window.onload=function(){
  var win=document.getElementsByClassName(" banner_img")[0];
  var imgs=document.getElementsByClassName("banner1");
  //console.log(imgs.length);
  var yuandians=document.getElementsByClassName("yuandian1");
  //console.log(yuandians.length)
  var num=0;

  var t=setInterval(move,1000)
  win.onmouseover=function(){
    clearInterval(t);
  }
  win.onmouseout=function(){
    t=setInterval(move,1000);
  }
 function move(){
  num++;
  if(num==imgs.length){
    for(var i=0;i<imgs.length;i++){
      imgs[i].style.zIndex=0;
      yuandians[i].style.background="#fff"
    }
    imgs[num].style.zIndex=3;
    yuandians[num].style.background="red";
  }
 } 
}