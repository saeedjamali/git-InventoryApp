const products = [
    { id: 1, title: "JavaScript", description: "Node and Js",quantity:1, category: "front", createAt: "2022-10-11" },
    { id: 2, title: "JavaScript", description: "Node and Js",quantity:1, category: "front", createAt: "2022-10-11" },
    { id: 3, title: "JavaScript", description: "Node and Js",quantity:1, category: "front", createAt: "2022-10-11" },
    { id: 4, title: "JavaScript", description: "Node and Js",quantity:1, category: "front", createAt: "2022-10-11" },
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
        const sortedCategories = saveCategories.sort((a, b) => a.id > b.id);
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
            categoryToSave.createAt = new Date().toISOString();
            saveCategories.push(categoryToSave);
        }
        localStorage.setItem("category", JSON.stringify(saveCategories));

    }

    static getAllProducts(){
        const saveProducts = JSON.parse(localStorage.getItem("product"))|| [];
        const sortedProducts = saveProducts.sort((a, b) => a.id > b.id);
        return sortedProducts;
    }

    static saveProducts(productToSave){
        const saveProducts = Storage.getAllProducts("product");
        const existedProduct = saveProducts.find((p)=>p.id==productToSave.id)
        if (existedProduct) {
            existedProduct.title = productToSave.title;
            existedProduct.description = productToSave.description;
            existedProduct.category = productToSave.description;
            existedProduct.quantity = productToSave.quantity;
        } else {
            productToSave.id = new Date().getTime();
            productToSave.createAt = new Date().toISOString();
        }
        localStorage.setItem("category", JSON.stringify(productToSave));

    
    }
}