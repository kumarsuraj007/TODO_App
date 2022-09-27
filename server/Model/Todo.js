import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    content:{
        type: String,
        requied: true
    },

    date:{
        type: Date,
        default: Date.now
    }
},
{timestamps: true})

export default mongoose.model('Content', TodoSchema)