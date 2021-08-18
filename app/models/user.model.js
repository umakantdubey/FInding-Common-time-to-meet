const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    Name: String,
    Designation: String,
    Region:String
    
}
);

module.exports = mongoose.model('User', UserSchema);