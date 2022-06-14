const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true,
        trim:true,
        minlength: 3,
        maxlength:15
    },
    firstname:{
        type: String,
        required: true,
        unique:true,
        trim:true,
        minlength: 3,
        maxlength:15
    },
    lastname:{
        type: String,
        required: true,
        unique:true,
        trim:true,
        minlength: 3,
        maxlength:15
    },
    password: {
        type: String,
        required: true,
        minlength:3,
        maxlength:20
    },
    cPassword:{
        type: String,
        required: true,
        minlength:3,
        maxlength:20
    }
},{
    timestamps:true
},{
    collection: "users"
});

const User = mongoose.model("User",userSchema);

module.export = User;

