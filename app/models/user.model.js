const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Name: String,
    Designation: String,
    Region:String
},
{
        timestamps: true
    }
    
);

module.exports = mongoose.model('User', UserSchema);