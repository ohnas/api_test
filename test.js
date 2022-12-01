//1. 자기 호출 함수 사용
(function(){
    const newDiv = document.createElement("div");
    newDiv.innerHTML = "내가 만든 divdivdiv";
    document.body.appendChild(newDiv);
 }());
 
 //2. addEventListener 사용
 window.addEventListener("load",function(event) {
 },false);
 