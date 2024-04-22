
const { MongoClient, ServerApiVersion } = require('mongodb');
const username = 'coglievinadiego'; // Replace with dynamic values as needed
const password = 'Coglievina14';     // Replace with dynamic values as needed

const uri = `mongodb+srv://${username}:${password}@programacionparainterne.9nb3qvf.mongodb.net/admin?retryWrites=true&loadBalanced=false&replicaSet=atlas-rebena-shard-0&readPreference=primary&srvServiceName=mongodb&connectTimeoutMS=10000&w=majority&authSource=admin&authMechanism=SCRAM-SHA-1`;

let dbName = "Proyecto"
let collectionName = "Projects"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
    try {
      
      await client.connect();
      
      const collection = client.db(dbName).collection(collectionName);
      
      // Find all documents in the collection
      const cursor = collection.find({});

      // Iterate over the documents and log each one
      await cursor.forEach(doc => console.log(doc));

    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);