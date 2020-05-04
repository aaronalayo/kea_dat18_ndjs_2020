const mongoClient = require('mongodb').MongoClient;

const connectionUrl = "mongodb://localhost:27017";
const dbName = "animalfarm"

mongoClient.connect(connectionUrl, {useUnifiedTopology: true} , (error, client)=> {
    if (error) {
        throw "Error connecting to mongodb" + error;
    }

    const animalFarmDB = client.db(dbName)
    const buildings = animalFarmDB.collection('buildings');
    
    
    //console.log(buildings)
    buildings.insertOne({ item: "tractor"}, (error, succes) => {
        console.log(success.insertedCount)
    }) );    

    //buildings.insert({item: "well"})
    buildings.find().toArray((error, foundBuildings) => {
        console.log(foundBuildings);
    });
    
});