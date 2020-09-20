// let showPic = document.getElementById("show_pics")
// add refs for the image tags 
let sknPic = document.getElementById("s_color_1")
let sColor = document.getElementById("s_color")
let eyes = document.getElementById("eyes")
let eColor = document.getElementById("e_color")
let nose = document.getElementById("nose")
let mouth = document.getElementById("mouth")
let hair = document.getElementById("hair")
let hColor = document.getElementById("h_color")
let fHair = document.getElementById("f_hair")
let fhColor = document.getElementById("fhc")
let item = document.getElementById("item")
let tColor = document.getElementById("t_color")
let tBorder = document.getElementById("t_border")

sColor.addEventListener("change", e => {
  let sColorElement = document.querySelector("#s_color").value
  console.log(sColor.value)
  if (sColorElement == "dark"){
    sknPic.setAttribute("src", "../assets/tokens/skintones/dark.jpg")
    console.log(sColor.value)
  }
  else if (sColorElement == "m_dark"){
    sknPic.setAttribute("src", "../assets/tokens/skintones/m_dark.jpg")
    console.log(sColor.value)
  }
  else if (sColorElement == "med"){
    sknPic.setAttribute("src", "../assets/tokens/skintones/medium.jpg")
    console.log(sColor.value)
  }
});

eyes.addEventListener("change", e => {
  showPic.innerHTML = e.target.value  
});

eColor.addEventListener("change", e => {
  showPic.innerHTML = e.target.value  
});

nose.addEventListener("change", e => {
  showPic.innerHTML = e.target.value  
});

mouth.addEventListener("change", e => {
  showPic.innerHTML = e.target.value  
});

hair.addEventListener("change", e => {
  showPic.innerHTML = e.target.value  
});

hColor.addEventListener("change", e => {
  showPic.innerHTML = e.target.value  
});

fHair.addEventListener("change", e => {
  showPic.innerHTML = e.target.value  
});

fhColor.addEventListener("change", e => {
  showPic.innerHTML = e.target.value  
});

item.addEventListener("change", e => {
  showPic.innerHTML = e.target.value  
});

tColor.addEventListener("change", e => {
  showPic.innerHTML = e.target.value  
});

tBorder.addEventListener("change", e => {
  showPic.innerHTML = e.target.value  
});

