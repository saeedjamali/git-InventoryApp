import Storage from "./Storage.js";


const productNew = document.querySelector("#product__new");
const productTitle = document.querySelector("#product__title");
const productQuantity = document.querySelector("#product__quantity");


class ProductView {
    constructor() {
        productNew.addEventListener("click", (e) => this.addProduct(e));
        this.productList = [];
    }

    setProduct() {
        this.productList = Storage.getAllProducts();
    }

    addProduct(e) {
        e.preventDefault();
        const title = productTitle.value;
        const quantity = productQuantity.value;
        if (title && quantity) {
            Storage.saveProducts({ title, quantity });
            this.categories = Storage.getAllCategories();
            this.createCategoriesList();
        } else return
    }



}


export default new ProductView();