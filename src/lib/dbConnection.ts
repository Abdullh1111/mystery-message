import mongoose from "mongoose";

type connectionObject = {
    isConnected?: number
}
const connection : connectionObject= {}

async function dbConnect(): Promise<void> {
    if(connection.isConnected){
        console.log('Already connected to data base')
        return
    }
    
    try{
        const db = await mongoose.connect(process.env.DB_URL as string,{
            dbName:"mysteryMessages"
        })
        console.log(db)
        connection.isConnected = db.connections[0].readyState

    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

export default dbConnect