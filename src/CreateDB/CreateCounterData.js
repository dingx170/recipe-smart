db = db.getSiblingDB('testDB')
db.createCollection('counter')
usersCollection = db.getCollection("counter")
usersCollection.remove({})

usersCollection.insert(
    {
        "name": "user",
        "count": 5,
    }  
);

usersCollection.insert(
    {
        "name": "ingredient",
        "count": 10,
    }  
);

usersCollection.insert(
    {
        "name": "recipe",
        "count": 20,
    }  
);

usersCollection.insert(
    {
        "name": "mealplan",
        "count": 3,
    }  
);
