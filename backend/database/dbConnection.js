import mongoose from "mongoose";

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"HealthcareManagementSystem"
    }).then(()=>{
        console.log("connected to MongoDB")
    }).catch(err=>{
        console.log(`some error :${err}`);
    })

}