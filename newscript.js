
// grab the element from the document
let btnFirstName = document.querySelector("#btnFirstName");
let firstName = document.querySelector("#firstName");
let errMsg = document.querySelector("#errMsg");
let simleyDiv = document.querySelector("#simleyDiv");
let welcomeText = document.querySelector("#welcomeText"); 
//console.log(btnFirstName)
// add an event listener
btnFirstName.addEventListener("click", displaySecond); 

// define function 
function displaySecond() {
//  alert("here");  
  if (firstName.value === "") {
    errMsg.innerHTML = "Please enter your name!";
    errMsg.style.color = "red"; 
  } else {
    simleyDiv.style.display = "block"; 
    welcomeText.innerHTML = `Welcome ${firstName.value}!`;
  }

};

// let sad = document.querySelector("#sad")
// let displayMood = document.querySelector("#displayMood")
// sad.addEventListener("mouseover", sadness);
// function sadness() {
//     displayMood.innerHTML = getAttribute("alt");  
//     displayMood.style.color = "red"; 
// };   



let imgTag = document.querySelectorAll("img")
let displayMood = document.querySelector("#displayMood")
for (let i = 0; i < imgTag.length; i++) {
  imgTag[i].addEventListener("mouseover", = () => {
    displayMood.innerHTML = imgTag[i].getAttribute("alt");  
    displayMood.style.color = "red"; 
};   );

}
