import Storage from "./Storage.js";

const categoryTitle = document.querySelector("#category__title");
const categoryDescription = document.querySelector("#category__description");
const categoryNew = document.querySelector("#category__new");







class CategoryView {

    constructor() {
        console.log("Hi React");
        categoryNew.addEventListener("click", (e) => this.addNewCategory(e));
        this.categories = [];

    }

    setCategory() {
        this.categories = Storage.getAllCategories();

    }


    addNewCategory(e) {
        e.preventDefault();
        const title = categoryTitle.value;
        const description = categoryDescription.value;
        if (title && description) {
            Storage.saveCategories({ title, description });
            this.categories = Storage.getAllCategories();
            this.createCategoriesList();
        } else return
    }

    createCategoriesList() {
        let categoriesList = "";

        this.categories.forEach((c) => {
            categoriesList +=`<option class ="text-sm py-2 font-medium bg-slate-400" value=${c.id}>${c.title}</option>`;


        });
        const categoryItems= document.querySelector("#category__items");
        categoryItems.innerHTML = categoriesList;
    }

}



export default new CategoryView();  