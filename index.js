const card1=document.getElementById("card1")
const card2=document.getElementById("card2")
const card3=document.getElementById("card3")
const card4=document.getElementById("card4")
const card5=document.getElementById("card5")
const card6=document.getElementById("card6")
const card7=document.getElementById("card7")
const card8=document.getElementById("card8")
const card9=document.getElementById("card9")
const card10=document.getElementById("card10")

card1.addEventListener('click',flipCard1);
card2.addEventListener('click',flipCard2);
card3.addEventListener('click',flipCard3);
card4.addEventListener('click',flipCard4);
card5.addEventListener('click',flipCard5);
card6.addEventListener('click',flipCard6);
card7.addEventListener('click',flipCard7);
card8.addEventListener('click',flipCard8);
card9.addEventListener('click',flipCard9);
card10.addEventListener('click',flipCard10);


function flipCard1(){
    card1.classList.toggle("flipCard1");
}

function flipCard2(){
    card2.classList.toggle("flipCard2");
}

function flipCard3(){
    card3.classList.toggle("flipCard3");
}

function flipCard4(){
    card4.classList.toggle("flipCard4");
}

function flipCard5(){
    card5.classList.toggle("flipCard5");
}

function flipCard6(){
    card6.classList.toggle("flipCard6");
}

function flipCard7(){
    card7.classList.toggle("flipCard7");
}

function flipCard8(){
    card8.classList.toggle("flipCard8");
}

function flipCard9(){
    card9.classList.toggle("flipCard9");
}
function flipCard10(){
    card10.classList.toggle("flipCard10");
}