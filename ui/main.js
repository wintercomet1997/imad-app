console.log('Loaded!');
//change text
var element=document.getElementById("main-text");
 element.innerHTML="New Value";
 //move the image
 var img=document.getElementById("main-madi");
 marginLeft=0;
 function moveRight()
 {
     marginLeft=marginLeft+1;
     img.style.marginLeft=marginLeft+"px";
 }
 img.onclick=function(){
     var interval=setInterval(moveRight,50);
    
     
 }