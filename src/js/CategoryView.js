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
            categoriesList += ` <li>
            <a data-id=${c.id} class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#" data-te-dropdown-item-ref>${c.title}</a>
          </li>`;

        });
        const categoryItems = document.querySelector(".category__items");
        categoryItems.innerHTML = categoriesList;
    }

}



export default new CategoryView();  