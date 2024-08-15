var myImgs = Array.from(document.querySelectorAll(".item img"))
var lightBoxContainer = document.querySelector("#lightBoxContainer")
var lightBox = document.querySelector("#lightBox")
var closeSliderIcon = document.querySelector("#closeSliderIcon")
var nextElement = document.querySelector("#nextElement")
var previousElement = document.querySelector("#previousElement")

var selectedImgStc 
var index 

for(var i=0 ; i<myImgs.length ; i++){
    myImgs[i].addEventListener("click",function(event){
        index=myImgs.indexOf(event.target)
        console.log(index);
        

        selectedImgStc =  event.target.getAttribute("src")
        lightBoxContainer.classList.replace("d-none","d-flex")
        lightBox.style.backgroundImage= `url(${selectedImgStc})`
    })
}
closeSliderIcon.addEventListener("click",closeslider)
nextElement.addEventListener("click",getNextElement)
previousElement.addEventListener("click",getPreviousElement)

function closeslider (){
  
 lightBoxContainer.classList.replace("d-flex","d-none")
    
    
}
function getNextElement(){
    index +=1
    if(index >= myImgs.length) index=0

    selectedImgStc = myImgs[index].getAttribute("src")
    lightBox.style.backgroundImage= `url(${selectedImgStc})`


}
function getPreviousElement(){

    index -=1
    if(index < 0) index= myImgs.length -1
    selectedImgStc = myImgs[index].getAttribute("src")
    lightBox.style.backgroundImage= `url(${selectedImgStc})`


}