import { connectToDatabase } from "../../utils/mongodb";






const handler = async (req, res) => {
    
    //MongoDb conection
    const {db} = await connectToDatabase();
    const mongoData = await db.collection("countries").find().toArray();

    //request desestructuring
    const {method, query} = req;

    //response conditionals
    const newResponse = query.hasOwnProperty("all") ? mongoData
    :query.hasOwnProperty("name") ? mongoData.filter(country => {return(country.name.common === query.name)}) 
    :query.hasOwnProperty("initials") ? mongoData.filter(country => {return(country.cca2 === query.initials.toUpperCase())}) 
    :mongoData.filter(country => {return(country.currencies?.hasOwnProperty(query.currencie))})

    //method validation
    if(method === "GET"){
        res.status(200).json(newResponse)
    } else {
        res.status(400).json({message: "erro, este endpoing aceita apenas o metodo GET."})
    }
};


export default handler