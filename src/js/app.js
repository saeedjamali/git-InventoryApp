import CategoryView from "./CategoryView.js";
import ProductView from "./ProductView.js";



// const categoryBtn = document.querySelector(".category__btn");
// const categoryItems = document.querySelector(".category__items");
// categoryBtn.addEventListener("click", () => {
//     categoryItems.classList.toggle("hidden");
// });



const productNew = document.querySelector(".product__new");
const productForm = document.querySelector(".product__form");
productNew.addEventListener("click", () => {
    productForm.classList.toggle("hidden");
});



const categoryNew = document.querySelector(".category__new");
const categoryForm = document.querySelector(".category__form");
categoryNew.addEventListener("click", () => {
    categoryForm.classList.toggle("hidden");
});




document.addEventListener("DOMContentLoaded", () => {
    CategoryView.setCategory();
    CategoryView.createCategoriesList();
    ProductView.setProduct();
    // console.log(ProductView);
    ProductView.createProductList(ProductView.productList);
});


