import mongoose, {Schema} from "mongoose";
const list = new mongoose.Schema({
    text: {
        type: String,
        require: true,
    }
})
const todoList = mongoose.model('todoList' , list)
export default todoList;