// admin
// password: 4iPYWmbDnpRk78jX

const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const app = express();

const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://admin:4iPYWmbDnpRk78jX@cluster0.wuwpwwx.mongodb.net/?retryWrites=true&w=majority";
console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

async function run() {
  const projectsCollection = client.db("portfolio").collection("projects");

  
  try {
    app.get("/allprojects", async (req, res) => {
      const query = {};
      const cursor = projectsCollection.find(query);
      const allProjects = await cursor.toArray();
      res.send(allProjects);
    });
  } finally {
  }
}

run().catch((error) => console.log(error));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});