// add refs for the image tags 
let sknPic = document.getElementById("s_color_1")
let sColor = document.getElementById("s_color")
let eyesPic = document.getElementById("eyes_1")
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
  sknPic.setAttribute("src", `https://lo-poli.s3-us-west-2.amazonaws.com/${sColorElement}.jpg`)
});

eyes.addEventListener("change", e => {
  let eyesElement = document.querySelector("#eyes").value
  eyesPic.setAttribute("src", `https://lo-poli.s3-us-west-2.amazonaws.com/${eyesElement}.jpg`)
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

