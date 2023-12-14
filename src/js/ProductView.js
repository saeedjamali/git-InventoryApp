import Storage from "./Storage.js";
import CategoryView from "./CategoryView.js";


const productAdd = document.querySelector("#product__add");



class ProductView {
    constructor() {
        productAdd.addEventListener("click", (e) => this.addProduct(e));
        this.productList = [];
    }

    setProduct() {
        this.productList = Storage.getAllProducts();

    }

    addProduct(e) {
        e.preventDefault();
        const productTitle = document.querySelector("#product__title");
        const productQuantity = document.querySelector("#product__quantity");
        const categoryItem = document.querySelector("#category__items");
        const title = productTitle.value;
        const quantity = productQuantity.value;
        const categoryId = categoryItem.value;
        // console.log(categoryId);

        if (!title || !quantity || !categoryId) return
        else {
            Storage.saveProducts({ title, quantity, categoryId });
            this.productList = Storage.getAllProducts();
            this.createProductList();
        }

    }


    createProductList() {
        let result = "";
        console.log(this.productList);
       
        this.productList.forEach((p) => {
            const categoryList = CategoryView.categories;
            const selectedCategory = categoryList.find((c) => c.id == p.categoryId);
            console.log("SelectedCategory1 : ",selectedCategory);
            result += ` <div 
        class="product flex items-center bg-slate-200 justify-between border rounded-md p-2 border-slate-400 mt-2">
        <div class="flex flex-1">
          <span class="w-1/3 text-slate-700 py-2 px-4">${p.title}</span>
          <span class="ring-gray-300 flex border py-2 px-4 rounded-md">${p.createAt}</span>
          <span class="ring-gray-300 flex border py-2 px-4 rounded-md mr-4">${selectedCategory.title}</span>
        </div>
        <span
          class="w-8 h-8 bg-slate-500 flex items-center justify-center rounded-full ring-gray-100 text-white mr-4 font-extralight">${p.quantity}</span>
        <span data-id=${p.id} class="product__remove px-4 py-2 bg-red-400 ring-red-900 rounded-md mr-4 text-red-950 cursor-pointer ">حذف</span>
      </div>`
        });
        const productList = document.querySelector("#product__list");
        productList.innerHTML = result;


        const productRemove = document.querySelectorAll(".product__remove");
        const productAll = Storage.getAllProducts();
        productRemove.forEach((e) => {
            console.log("hi");
            e.addEventListener("click", () => {
                // p.preventDefault();
                const otherProduct = productAll.filter((p) => p.id != e.dataset.id);
                console.log("Other Product : ",otherProduct);
                Storage.saveProducts(otherProduct);
                // this.createProductList();
            });
        });




    }
}



export default new ProductView();