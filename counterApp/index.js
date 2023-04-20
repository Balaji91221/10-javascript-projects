const prevEl = document.querySelector(".dec")
const nextEl = document.querySelector(".inc")
const resetEl = document.querySelector(".reset");
const buttons = document.querySelector(".btn")
let countEl = document.querySelector(".count");

let counts =0;

prevEl.addEventListener("click" , function decrease(){
    counts--;
    countEl.innerHTML = counts;
    console.log(counts)
    if(counts<0){
        countEl.style.color = "red";
    }
    if(counts==0){
        countEl.style.color = "black";
    }
})

nextEl.addEventListener("click",function increase(){
    counts++;
    console.log(counts);
    countEl.innerHTML = counts;
    if(counts>0){
        countEl.style.color = "green";
    }
    if(counts==0){
        countEl.style.color = "black";
    }
});

resetEl.addEventListener("click",function reset(){
    counts=0;
    countEl.innerHTML = counts;
    countEl.style.color = "black";
}

);