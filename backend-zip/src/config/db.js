const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://abhinayperala:intermediate2021@ecommerce.av2k2uo.mongodb.net/?retryWrites=true&w=majority&appName=Ecommerce'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}