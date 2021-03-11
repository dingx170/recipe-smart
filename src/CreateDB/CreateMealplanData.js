db = db.getSiblingDB('testDB')
db.createCollection('mealplans')
mealplansCollection = db.getCollection("mealplans")
mealplansCollection.remove({})

mealplansCollection.insert({
    mealplan_id: 1,
    member_id: 1,
    budget: 30,
    date: new Date("2021-02-15T17:00:00Z"),
    group: 2,
    recipe_list: [{recipe_id:4,quantity:1}, {recipe_id:9, quantity: 1}],
    shopping_list: [{name:'milk', unit:'', count:1}, {name:'salt', unit:'teaspoon', count:2}, {name:'flour', unit:'cup', count:2}, {name:'nut', unit:'cup', count:1}],
    meal_type: ["Dinner"],
    cuisine_type: null,
    feature_type: null,
    restrictions: ["Nut","Milk"]
})

mealplansCollection.insert({
    mealplan_id: 2,
    member_id: 1,
    budget: 20,
    date: new Date("2021-01-21T15:21:00Z"),
    group: 2,
    recipe_list: [{recipe_id:5,quantity:1}, {recipe_id:3, quantity: 1}],
    shopping_list: [{name:'beef', unit:'pound', count:1}, {name:'pepper', unit:'teaspoon', count:2}, {name:'salt', unit:'tablespoon', count:2}],
    meal_type: ["Breakfast"],
    cuisine_type: null,
    feature_type: null,
    restrictions: null
})

mealplansCollection.insert({
    mealplan_id: 3,
    member_id: 2,
    budget: 50,
    date: new Date("2021-01-15T16:05:00Z"), 
    group: 3,
    recipe_list: [{recipe_id:9,quantity:1}, {recipe_id:10, quantity: 1}],
    shopping_list: [{name:'sugar', unit:'cup', count:1}, {name:'salt', unit:'teaspoon', count:2}, {name:'nut', unit:'cup', count:2}],
    meal_type: ["Dinner"],
    cuisine_type: null,
    feature_type: null,
    restrictions: ["Nut"]
})