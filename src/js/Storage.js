const products = [
    { id: 1, title: "JavaScript", description: "Node and Js", category: "front", createAt: "2022-10-11" },
    { id: 2, title: "JavaScript", description: "Node and Js", category: "front", createAt: "2022-10-11" },
    { id: 3, title: "JavaScript", description: "Node and Js", category: "front", createAt: "2022-10-11" },
    { id: 4, title: "JavaScript", description: "Node and Js", category: "front", createAt: "2022-10-11" },
];


const categories = [
    { id: 1, title: "front", description: "best lang" },
    { id: 2, title: "front", description: "best lang" }
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


    static saveCategories(categoryToSave){
        const saveCategories = Storage.getAllCategories();
        


    }
}