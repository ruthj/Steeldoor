import clientPromise from "../../lib/mongodb";


export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("steeldordb");
    let bodyObject = (req.body);
    let insertJob = await db.collection("jobs").insertOne(bodyObject);
    res.json(insertJob.ops[0]); 
  }