const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = 3700;

const username = 'coglievinadiego';
const password = 'Coglievina14';
const uri = `mongodb+srv://${username}:${password}@programacionparainterne.9nb3qvf.mongodb.net/admin?retryWrites=true&loadBalanced=false&replicaSet=atlas-rebena-shard-0&readPreference=primary&srvServiceName=mongodb&connectTimeoutMS=10000&w=majority&authSource=admin&authMechanism=SCRAM-SHA-1`;

const dbName = "Proyecto";
const collectionName = "Projects";

async function connectToDatabase() {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  try {
    await client.connect();
    console.log("Connected to the database");
    return client.db(dbName).collection(collectionName);
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
}

app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.status(200).send({ message: "Soy la home" });
});

app.get('/test', (req, res) => {
  res.status(200).send({ message: "Soy test del controlador project" });
});

app.post('/projects', async (req, res) => {
  try {
    const collection = await connectToDatabase();
    const project = req.body;
    const result = await collection.insertOne(project);
    res.status(201).send({ message: "Project saved successfully", projectId: result.insertedId });
  } catch (error) {
    console.error("Error saving project:", error);
    res.status(500).send({ message: "Error saving project" });
  }
});


app.delete('/projects/:id', async (req, res) => {
  try {
    const collection = await connectToDatabase();
    const projectId = req.params.id;
    const result = await collection.deleteOne({ _id: new ObjectId(projectId) });
    if (result.deletedCount === 1) {
      res.status(200).send({ message: "Project deleted successfully" });
    } else {
      res.status(404).send({ message: "Project not found" });
    }
  } catch (error) {
    console.error("Error deleting project:", error);
    res.status(500).send({ message: "Error deleting project" });
  }
});

app.put('/projects/:id', async (req, res) => {
  try {
    const collection = await connectToDatabase();
    const projectId = req.params.id;
    const updatedProject = req.body;
    const result = await collection.updateOne(
      { _id: new ObjectId(projectId) },
      { $set: updatedProject }
    );
    if (result.modifiedCount === 1) {
      res.status(200).send({ message: "Project updated successfully" });
    } else {
      res.status(404).send({ message: "Project not found" });
    }
  } catch (error) {
    console.error("Error updating project:", error);
    res.status(500).send({ message: "Error updating project" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
