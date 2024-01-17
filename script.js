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
var form = document.querySelector("form");
var inputs = document.querySelectorAll("input");

var h4 = document.querySelector("h4");
form.addEventListener("submit", function(ev){
ev.preventDefault();
for(var i=0; i<inputs.length; i++) {
    if(inputs[i].value.trim() === ''){
        h4.textContent = "some field are blank";
        h4.style.color = "red";
        break;
    }
  
}
});
