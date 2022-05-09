const mongoose = require("mongoose")



const TodoSchema  = new mongoose.Schema({
    todo: {
        type: String,
        require: true,
    }
});



module.exports = new mongoose.model("Todo", TodoSchema)