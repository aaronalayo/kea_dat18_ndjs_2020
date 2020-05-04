const mongoClient = require('mongodb').MongoClient;

const connectionUrl = "mongodb://localhost:27017";
const dbName = "animalfarm"

mongoClient.connect(connectionUrl, {useUnifiedTopology: true} , (error, client)=> {
    if (error) {
        throw "Error connecting to mongodb" + error;
    }

    const animalFarmDB = client.db(dbName)
    const buildings = animalFarmDB.collection('buildings');
    var ObjectId = require('mongodb').ObjectID;

    buildings.updateOne({type: "windmill"}, { $set: { "warehouse"}}, (error, data) => {
        console.log(data);
        client.close();

    });

    buildings.find().toArray((error, foundBuildings) => {
        console.log(foundBuildings);
        client.close();
    });
    
});