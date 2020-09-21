// add refs for the image tags 
let tColorPic = document.getElementById("t_color_1")
let tColor = document.getElementById("t_color")

let tBorderPic = document.getElementById("t_border_1")
let tBorder = document.getElementById("t_border")

let sknPic = document.getElementById("s_color_1")
let sColor = document.getElementById("s_color")

let eyesPic = document.getElementById("eyes_1")
let eyes = document.getElementById("eyes")

let eColorPic = document.getElementById("e_color_1")
let eColor = document.getElementById("e_color")

let nosePic = document.getElementById("nose_1")
let nose = document.getElementById("nose")

let mouthPic = document.getElementById("mouth_1")
let mouth = document.getElementById("mouth")

let hairPic = document.getElementById("hair_1")
let hair = document.getElementById("hair")

let hColorPic = document.getElementById("h_color_1")
let hColor = document.getElementById("h_color")

let fHairPic = document.getElementById("f_hair_1")
let fHair = document.getElementById("f_hair")

let fhColorPic = document.getElementById("fhc_1")
let fhColor = document.getElementById("fhc")

let itemPic = document.getElementById("item_1")
let item = document.getElementById("item")

tColor.addEventListener("change", e => {
  let tColorElement = document.querySelector("#t_color").value
  tColorPic.setAttribute("src", `https://lo-poli.s3-us-west-2.amazonaws.com/t_color/${tColorElement}.png`)   
});

tBorder.addEventListener("change", e => {
  let tBorderElement = document.querySelector("#t_border").value
  tBorderPic.setAttribute("src", `https://lo-poli.s3-us-west-2.amazonaws.com/t_border/${tBorderElement}.png`)  
});

sColor.addEventListener("change", e => {
  let sColorElement = document.querySelector("#s_color").value
  sknPic.setAttribute("src", `https://lo-poli.s3-us-west-2.amazonaws.com/s_color/${sColorElement}.png`)
});

eyes.addEventListener("change", e => {
  let eyesElement = document.querySelector("#eyes").value
  eyesPic.setAttribute("src", `https://lo-poli.s3-us-west-2.amazonaws.com/eyes/${eyesElement}.png`)
});

eColor.addEventListener("change", e => {
  let eColorElement = document.querySelector("#e_color").value
  eColorPic.setAttribute("src", `https://lo-poli.s3-us-west-2.amazonaws.com/e_color/${eColorElement}.png`)  
});

nose.addEventListener("change", e => {
  let noseElement = document.querySelector("#nose").value
  nosePic.setAttribute("src", `https://lo-poli.s3-us-west-2.amazonaws.com/nose/${noseElement}.png`)  
});

mouth.addEventListener("change", e => {
  let mouthElement = document.querySelector("#mouth").value
  mouthPic.setAttribute("src", `https://lo-poli.s3-us-west-2.amazonaws.com/mouth/${mouthElement}.png`) 
});

hair.addEventListener("change", e => {
  let hairElement = document.querySelector("#hair").value
  hairPic.setAttribute("src", `https://lo-poli.s3-us-west-2.amazonaws.com/hair/${hairElement}.png`)  
});

hColor.addEventListener("change", e => {
  let hColorElement = document.querySelector("#h_color").value
  hColorPic.setAttribute("src", `https://lo-poli.s3-us-west-2.amazonaws.com/h_color/${hColorElement}.png`)  
});

fHair.addEventListener("change", e => {
  let fHairElement = document.querySelector("#f_hair").value
  fHairPic.setAttribute("src", `https://lo-poli.s3-us-west-2.amazonaws.com/f_hair/${fHairElement}.png`)    
});

fhColor.addEventListener("change", e => {
  let fhColorElement = document.querySelector("#fhc").value
  fhColorPic.setAttribute("src", `https://lo-poli.s3-us-west-2.amazonaws.com/fhc/${fhColorElement}.png`)
});

item.addEventListener("change", e => {
  let itemElement = document.querySelector("#item").value
  itemPic.setAttribute("src", `https://lo-poli.s3-us-west-2.amazonaws.com/item/${itemElement}.png`)   
});



