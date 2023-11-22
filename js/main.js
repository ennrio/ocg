// let photo = document.createElement("img");
// photo.src = "img/I1.jpg";
// photo.width = "100";
// photo.height = "200";


// let src = document.getElementsById('first__photo');
// src.appendChild(photo);
// // document.body.append(div1)


let img = document.createElement("img");
img.src = "img/I1.jpg";
img.width = "300";

let img2 = document.createElement("img");
img2.src = "img/I2.jpg";
img2.width = "300";


let src = document.getElementById("first__photo");
src.appendChild(img);

let test = document.getElementById("test");

test.addEventListener('click',function(){
    src.removeChild(img2);
    src.append(img);
})
let c = 1;
function clicker(){
    if (c%2 == 1){
        src.removeChild(img);
        src.append(img2);
    }
}   
function ret(y){
    if (y%2 == 0){
        let g = 1;
        return g;
    }else{
        let g = 0;
        return g;
    }
}
let b = 0;


img.addEventListener('click', clicker)

// img.addEventListener('click', function(){
//     src.removeChild(img2);
//     src.appendChild(img);  


// })
