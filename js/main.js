var myImgs = document.querySelectorAll(".item img")
console.log(myImgs);
var lightBoxContainer = document.querySelector("#lightBoxContainer")
var lightBox = document.querySelector("#lightBox")
var closeSlider = document.querySelector("#closeSlider")
var selectedImgStc 

for(var i=0 ; i<myImgs.length ; i++){
    myImgs[i].addEventListener("click",function(event){

        selectedImgStc =    event.target.getAttribute("src")
        lightBoxContainer.classList.replace("d-none","d-flex")
        lightBox.style.backgroundImage= `url(${selectedImgStc})`
    })
}


closeSlider.addEventListener("click",function(){
    lightBoxContainer.classList.replace("d-flex","d-none")

})

