console.log('Loaded!');
//change text
var element=document.getElementById("main-text");
 element.innerHTML="New Value";
 //move the image
 var img=document.getElementById("main-madi");
 img.onclick=function(){
     var interval=setInterval(moveRight,100);
    
     
 }