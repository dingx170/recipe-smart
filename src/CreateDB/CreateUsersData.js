db = db.getSiblingDB('testDB')
db.createCollection('users')
usersCollection = db.getCollection("users")
usersCollection.remove({})

usersCollection.insert({
    "user_id": 1,
    "name": "Sam",
    "password": "1234",
    "email": "UncleSam@gmail.com",
    "photo": null,
    "restrictions": ["Corn", "Peanut"]

});

usersCollection.insert({
    "user_id": 2,
    "name": "Amy",
    "password": "1234",
    "email": "UncleJohn@gmail.com",
    "photo": null,
    "restrictions": ["Shellfish", "Peanut"]
});

usersCollection.insert({
    "user_id": 3,
    "name": "GoodFoodFrank",
    "password": "12345678",
    "email": "Frankie@gmail.com",
    "photo": null,
    "restrictions": ["Peanut"]
});

usersCollection.insert({
    "user_id": 4,
    "name": "tasetyFood",
    "password": "12345678",
    "email": "UncleSam@gmail.com",
    "photo": null,
    "restrictions": ["Corn", "Peanut"]
});

usersCollection.insert({
    "user_id": 5,
    "name": "BettyLovesCat",
    "password": "12345678",
    "email": "bCate@gmail.com",
    "photo": null,
    "restrictions": ["Milk"]
});
