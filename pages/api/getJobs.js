import clientPromise from "../../lib/mongodb";


export default async function handler(req, res) {
    const client = await clientPromise
    const db = client.db("steeldordb")
    const allJobs = await db.collection("jobs").find({}).toArray()
    res.json({ status: 200, data: allJobs })
}
