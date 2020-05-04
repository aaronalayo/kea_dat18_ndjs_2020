const mongoClient = require('mongodb').MongoClient;

const connectionUrl = "mongodb://localhost:27017";
const dbName = "animalfarm"

mongoClient.connect(connectionUrl, {useUnifiedTopology: true} , (error, client)=> {
    if (error) {
        throw "Error connecting to mongodb" + error;
    }

    const animalFarmDB = client.db(dbName)
   // console.log(animalFarm)
   const buildings = animalFarmDB.collection('buildings');
   
   
    buildings.find().toArray((error, foundBuildings) => {
        console.log(foundBuildings);
    
    });

    buildings.find({type: "barn"}).toArray((error, foundBarn) =>{
        //console.log(foundBarn);
        //client.close();
    });
   

    buildings.find({type: {$exists: true}}).limit(1).toArray((error, foundBarn) =>{
        // console.log(foundBarn);
        // client.close();
    });

    // buildings
    //   .findOne({ type: 'windmill' })
    //   .then(response => console.log(response))
    //   .catch(error => console.log(error));

      buildings.find({ type: { $exists: true } }, { projection: {_id: 0 }}).toArray((error, foundBuildings) => {
          console.log(foundBuildings);
          client.close();
      })
});