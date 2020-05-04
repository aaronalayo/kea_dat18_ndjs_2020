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

    buildings.deleteOne( { "_id" : ObjectId("5e9e15b6ac6737624013b07c") } );
    
    buildings.deleteOne({type: "warehouse"}, (error, result)=> {
        console.log(result);
    })

    buildings.find().toArray((error, foundBuildings) => {
        console.log(foundBuildings);
        client.close();
    });
    
});