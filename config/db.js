import mongoose from 'mongoose'
import colors from 'colors'
const conncetDB = async () => {
    try{
        const conn = await mongoose.conncet(process.env.MONGO_URL)
        console.log(`Connect To MongoDB Database ${conn.connection.host}`);
    }catch (error){
        console.log(`Errro in MongoDB ${error}`.bgRed.white)
    }
    
}