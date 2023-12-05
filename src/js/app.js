const categoryBtn = document.querySelector(".category__btn");
const categoryItems = document.querySelector(".category__items");
categoryBtn.addEventListener("click",()=>{
    categoryItems.classList.toggle("hidden");
});


const categoryNew = document.querySelector(".category__new");
const categoryForm = document.querySelector(".category__form");
categoryNew.addEventListener("click",()=>{
    categoryForm.classList.toggle("hidden");
});