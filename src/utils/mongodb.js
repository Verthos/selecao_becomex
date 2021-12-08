import { MongoClient } from "mongodb";

let uri = process.env.MONGO_URI
let dbName = process.env.MONGO_DB

let cachedClient = null;
let cachedDb = null;

if(!uri){
    throw new Error("fix the MONGODB_URI")
}
if(!dbName){
    throw new Error("fix the MONGODB_DB")
}

export async function connectToDatabase(){
    if(cachedClient && cachedDb){
        return{client: cachedClient, db: cachedDb}
    }

    const client = await MongoClient.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const db = await client.db(dbName)
    cachedClient = client
    cachedDb = db


    return( { client, db } )
};