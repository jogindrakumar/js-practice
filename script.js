// var btn = document.querySelector("button");
// var p = document.querySelector("p");
// btn.addEventListener('click',function() {

//      p.textContent += "hey joginder";
//     p.style.color = "red";
//     p.innerHTML = "<b>hello</b>"
// } );


// var img1 = document.querySelector("#img1");

// var img2 = document.querySelector("#img2");
// var btn = document.querySelector("button");


// btn.addEventListener("click", function(){
// // img1.src = "https://cdn.pixabay.com/photo/2024/01/04/21/55/mountain-8488489_1280.jpg";
// // img2.src = "https://cdn.pixabay.com/photo/2023/10/21/06/34/european-shorthair-8330819_1280.jpg";

// var src1 = img1.src;
// var src2 = img2.src;

// img1.src = src2;
// img2.src = src1;

// });

//  var inputs = document.querySelectorAll("input[type=text]");

// var inpu1 = document.querySelector("#inpu1");
// var inpu2 = document.querySelector("#inpu2");
// var h4 = document.querySelector("h4");
// var forms = document.querySelector("form");

// forms.addEventListener("submit", function(e) {

//    e.preventDefault();

// for(var i = 0; i < inputs.length; i++) { 

//     if(inputs[i].value.trim() === ""){
//         h4.textContent = "error, some fields are required";
//         h4.style.color = "red";
//         break;
//     }
//  }

// });

// var add = document.querySelector("#add");
// var remove = document.querySelector("#remove");
// var inpu = document.querySelector("#inpu");
// var ul = document.querySelector("ul");
// var li;


// add.addEventListener("click", function(e) {

//    if(inpu.value.trim()=="") {

//    }
//    else{
//         li = document.createElement("li");
//         li.textContent = inpu.value.trim();
//         ul.appendChild(li);
//         inpu.value = "";
//    }
// });

// remove.addEventListener("click", function(e) {

  
//          ul.removeChild(li);
       
    
//  });


// counter

// var btn = document.querySelector("#start");
// var btnstop = document.querySelector("#stop");
// var h3 = document.querySelector("h3");

// var int ; 

// btn.addEventListener("click", function() {

//    var count = 0 ;
//   int =  setInterval(function() { 

//       h3.textContent = count;
//       count ++;

//    }, 1000);
// });

// btnstop.addEventListener("click", function() {

//  clearInterval(int);
// });


//div hide content task 6


// var home = document.querySelector("#home");
// var about = document.querySelector("#about");
// var contact = document.querySelector("#contact");

// var hometext = document.querySelector("#hometext");
// var abouttext = document.querySelector("#abouttext");
// var contacttext = document.querySelector("#contacttext");

// home.addEventListener("click", function() {
//    saretexthtao();
//    hometext.style.color = "red";
//    hometext.style.display = "block";


// });

// about.addEventListener("click", function() {
//    saretexthtao();
//    abouttext.style.color = "green";
//    abouttext.style.display = "block";

// });
// contact.addEventListener("click", function() {
//    saretexthtao();
//    contacttext.style.color = "blue";
//    contacttext.style.display = "block";
   

  
  
// });

// function saretexthtao(){
//    document.querySelectorAll("p").forEach(function(p){
// p.style.display = "none";
//    })
// }

//task6 = capsule
var progress = document.querySelector("#progress");
var h3 = document.querySelector("h3");

var count = 0 ;
var int = setInterval(function(){

   if(count === 100){
      clearInterval(int);
      h3.style.opacity = 1;
   }
count++;
progress.style.width = count + "%";
},100)