db = db.getSiblingDB('testDB')
db.createCollection('ingredients')
ingredientsCollection = db.getCollection("ingredients")
ingredientsCollection.remove({})

ingredientsCollection.insert({
    ingredient_id: 1,
    name: "tomato",
    unit: "lb",
    price: 3,
    restrictions: null
})

ingredientsCollection.insert({
    ingredient_id: 2,
    name: "beef",
    unit: "lb",
    price: 9,
    restrictions: null
})

ingredientsCollection.insert({
    ingredient_id: 3,
    name: "lettuce",
    unit: "lb",
    price: 4,
    restrictions: null
})

ingredientsCollection.insert({
    ingredient_id: 4,
    name: "cheese",
    unit: "l",
    price: 4,
    restrictions: null
})

ingredientsCollection.insert({
    ingredient_id: 5,
    name: "salmon",
    unit: "lb",
    price: 7,
    restrictions: null
})

ingredientsCollection.insert({
    ingredient_id: 6,
    name: "egg",
    unit: "lb",
    price: 3,
    restrictions: null
})

ingredientsCollection.insert({
    ingredient_id: 7,
    name: "potato",
    unit: "lb",
    price: 1,
    restrictions: null
})

ingredientsCollection.insert({
    ingredient_id: 8,
    name: "rice",
    unit: "lb",
    price: 2,
    restrictions: null
})

ingredientsCollection.insert({
    ingredient_id: 9,
    name: "avacado",
    unit: "lb",
    price: 4,
    restrictions: null
})

ingredientsCollection.insert({
    ingredient_id: 10,
    name: "sausage",
    unit: "lb",
    price: 7,
    restrictions: null
})