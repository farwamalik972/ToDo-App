import mongoose from "mongoose";


const Connection = async () => {
    const URL = `mongodb+srv://farwamalik972:farwa.678@cluster0.uoejoft.mongodb.net/`
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('database connected succesfully')
    } catch (error) {
        console.log('error from connection', error.message)
    }
}
export default Connection