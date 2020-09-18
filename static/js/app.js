let showPic = document.getElementById("show_pic")
let sColor = document.getElementById("s_color")
let eyes = document.getElementById("eyes")
let eColor = document.getElementById("e_color")
let nose = document.getElementById("nose")
let mouth = document.getElementById("mouth")
let hair = document.getElementById("hair")
let hColor = document.getElementById("h_color")
let fHair = document.getElementById("f_hair")
let fhColor = document.getElementById("fh_color")
let item = document.getElementById("item")
let tColor = document.getElementById("t_color")
let tBorder = document.getElementById("t_border")

sColor.addEventListener("change", e => {
  showPic.innerHTML = e.target.value
  console.log(e.target.value)  
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

