import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const recipeJSON = '[{"id":"0001","type":"paratha","name":"Aalu","price":2.49,"ingredients":{"base":{"name":"Wheat Dough","preparation":"Rolled and Stuffed"},"filling":{"name":"Potato Mixture","spiciness":"Medium"},"toppings":[{"name":"Butter","quantity":"1 tablespoon","ingredients":["Butter"]},{"name":"Pickle","quantity":"2 tablespoons","ingredients":["Mixed Pickle"]},{"name":"Yogurt","quantity":"1/2 cup","ingredients":["Plain Yogurt"]}]}},{"id":"0002","type":"breakfast","name":"Idli","price":1.99,"ingredients":{"base":{"name":"Rice and Urad Dal Batter","preparation":"Fermented and Steamed"},"chutney":{"name":"Coconut Chutney","spiciness":"Mild"},"toppings":[{"name":"Sambar","quantity":"1 cup","ingredients":["Toor Dal","Mixed Vegetables","Sambar Powder","Tamarind","Seasoning"]},{"name":"Ghee","quantity":"1 teaspoon","ingredients":["Clarified Butter"]}]}},{"id":"0003","type":"indo-chinese","name":"Veg","price":5.99,"ingredients":{"base":{"name":"Hakka Noodles","preparation":"Stir-fried"},"sauce":{"name":"Manchurian Sauce","spiciness":"Hot"},"toppings":[{"name":"Vegetable Manchurian","quantity":"6-8 pieces","ingredients":["Mixed Vegetables","Cornflour","Ginger","Garlic","Soy Sauce"]},{"name":"Garnish","quantity":"2 tablespoons","ingredients":["Spring Onions","Fried Garlic"]}]}}]';


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", (req,res)=>{
    res.render("index.ejs");
})

app.post("/recipe", (req,res)=>{
    const data = JSON.parse(recipeJSON);
    const dishName = req.body.choice;
    let dish;
    data.forEach((element) => {
        if(element.name == dishName){
            dish = element;
        }
    });

    res.locals.protein_name = dish.name;
    res.locals.protein_preparation = dish.ingredients.base.preparation;
    res.locals.salsa_name = dish.ingredients.base.name;
    res.locals.toppings = dish.ingredients.toppings;

    res.render("index.ejs");
});

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`);
})