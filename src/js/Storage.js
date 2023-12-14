const products = [
    { id: 1, title: "JavaScript", description: "Node and Js", quantity: 1, category: "front", createAt: "2022-10-11" },
    { id: 2, title: "JavaScript", description: "Node and Js", quantity: 1, category: "front", createAt: "2022-10-11" },
    { id: 3, title: "JavaScript", description: "Node and Js", quantity: 1, category: "front", createAt: "2022-10-11" },
    { id: 4, title: "JavaScript", description: "Node and Js", quantity: 1, category: "front", createAt: "2022-10-11" },
];


const categories = [
    { id: 1, title: "front", description: "best lang", createdAt: "" },
    { id: 2, title: "front", description: "best lang", createdAt: "" }
]



export default class Storage {

    //add new category
    //save category
    //getAllcategory

    static getAllCategories() {
        const saveCategories = JSON.parse(localStorage.getItem("category")) || [];
        const sortedCategories = saveCategories.sort((a, b) => { return a.id > b.id ? -1 : 1 });
        return sortedCategories;
    }

    static saveCategories(categoryToSave) {
        const saveCategories = Storage.getAllCategories();
        const existedItem = saveCategories.find((c) => c.id == categoryToSave.id);
        if (existedItem) {
            existedItem.title = categoryToSave.title;
            existedItem.description = categoryToSave.description;
        } else {

            categoryToSave.id = new Date().getTime();
            categoryToSave.createAt = new Date().echoFa();
            saveCategories.push(categoryToSave);
        }
        localStorage.setItem("category", JSON.stringify(saveCategories));

    }

    static getAllProducts(sortIndex) { //1 : Incremental  2: Decremental
        const saveProducts = JSON.parse(localStorage.getItem("product")) || [];
        const sortedProducts = sortIndex==1 ? (saveProducts.sort((a, b) => { return a.id < b.id ? -1 : 1 })):(saveProducts.sort((a, b) => { return a.id > b.id ? -1 : 1 }));
        return sortedProducts;
    }

    static saveProducts(productToSave) {
        const saveProducts = Storage.getAllProducts("product");
        console.log(saveProducts);
        const existedProduct = saveProducts.find((p) => p.id == productToSave.id)
        if (existedProduct) {
            existedProduct.title = productToSave.title;
            existedProduct.description = productToSave.description;
            existedProduct.category = productToSave.category;
            existedProduct.quantity = productToSave.quantity;
        } else {
            productToSave.id = new Date().getTime();
            productToSave.createAt = new Date().echoFa();
            saveProducts.push(productToSave);
        }
        localStorage.setItem("product", JSON.stringify(saveProducts));


    }

    static deleteProduct(id) {
        const allProduct = Storage.getAllProducts();
        const currectProduct = allProduct.filter((p) => p.id != id);
        localStorage.setItem("product", JSON.stringify(currectProduct));

    }
}