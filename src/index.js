console.log('%c HI', 'color: firebrick')

function dogPic () {
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(res => res.json())
.then(data => data.message.forEach(renderOne))
.catch(error => console.error('Error:',error))
}
dogPic();


function renderOne (url){
    let pic = document.getElementById("dog-image-container");
    let img  =   document.createElement("img");
    img.src = url
    pic.append(img); 
}


function dogBreed (){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then((data)=> Object.keys(data.message).forEach((dogUrl) => RenderOneDog(dogUrl)))
    .catch(error => console.error('Error:',error))
    
 
}
function  RenderOneDog (dogUrl){
    let list = document.querySelector("#dog-breeds");
    let paraGraph = document.createElement("li")
    list.className = "breedList"
    paraGraph.textContent = dogUrl
    list.append(paraGraph)
    paraGraph.addEventListener(`click`, () => paraGraph.style.color = "blue")
}

dogBreed();
 
// function checkLetter (){
//   return dogUrl[0].value  === String }
// checkLetter("a");
// checkLetter(b);
// checkLetter(c);
// checkLetter(d);
    
    
function makeDropDown() {
    let breedSelect = document.querySelector("#breed-dropdown");
  breedSelect.addEventListener("change", (e) => { 
   console.log(e.target.value)
   console.log(e.target.parentNode)
   console.log(breedSelect)
   let list = document.querySelectorAll("#dog-breeds li ");
   console.log(list)
    //  let filterList = list.filter(letter => {
    // letter.startsWith(e.target.value);
     console.log(e.target.value)  
    // })
    for (const element of list){
       if (element.textContent.startsWith(e.target.value)){
           element.style.display = ""
       } else {
           element.style.display ="none"
       } 
        
        console.log(element)
    }
    }
   )}
  

 makeDropDown();