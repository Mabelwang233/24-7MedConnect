import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
const app = express();

import { run } from './Gemini.js';

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Serve static files
// app.use(express.static(path.join(__dirname, 'public')));

import { MongoClient, ServerApiVersion } from 'mongodb';
const mongoURI = 'mongodb+srv://testDoctor:testDoctor@cluster0.0iry3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// const mongoURI = process.env.MONGO_URI;

const client = new MongoClient(mongoURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function main() {
  try {
    console.log("Attempting to connect to MongoDB...");
    await client.connect();
    console.log("Successfully connected to MongoDB!");

    // Confirm successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Access the doctorDB database and comments collection
    const database = client.db("doctorDB");
    const collection = database.collection("dummyData");

    // Example operation: Find one document from the comments collection
    const comment = await collection.findOne();
    console.log("Sample comment from the collection:", comment);
  } catch (e) {
    console.error("Error connecting to the database:", e);
  } finally {
    // Close the connection to the database
    await client.close();
  }
}

main().catch(console.error);


// Route for registering as a doctor
app.post('/register/doctor', async (req, res, next) => {
  try {
    // Get doctor data from the form submission
    const { Name, Specialty, Languages, Email, Password} = req.body;

    // Prepare the new doctor data
    const newDoctor = {
      Name,
      Specialty,
      Languages: Languages.split(','), // Convert languages to an array
      Online_Status: true,
    };

    // Insert the new doctor data into the 'doctorDB' database, 'doctors' collection
    const database = client.db("doctorDB");
    const collection = database.collection("doctors");
    await collection.insertOne(newDoctor);

    res.status(201).send('Doctor registered successfully');
  } catch (error) {
    console.error("Error registering doctor:", error);
    res.status(500).send('Failed to register doctor: ' + error.message);
  }
});


app.post('/symptoms', async(req, res, next) => {
  try {    
    const Symptom = req.body;
    const prompt = Symptom.symptoms; 
    console.log(prompt);
    const answer = await run("" + prompt);
    console.log(answer);
    
    // res.status(200).send({ message: "AI analysis complete", output });
  }
    

 catch (error) {
    console.log(error);
  }
});


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
