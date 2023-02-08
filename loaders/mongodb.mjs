import mongoose from "mongoose"

const connection = mongoose.connection
connection.once('open',()=>{
    console.log('successfully connected to mongodb')
})

export default async()=>{
    const {DB_HOST,DB_PORT,DB_NAME} = process.env
    await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}