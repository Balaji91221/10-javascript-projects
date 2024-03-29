"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
console.log(btnsOpenModal);


const hidden= function(){
    console.log("Button Clicked !");
    modal.classList.remove("hidden");
    overlay.classList.remove('hidden');

}
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", hidden);

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    
}
  btnCloseModal.addEventListener('click',closeModal);

  overlay.addEventListener('click' , closeModal);