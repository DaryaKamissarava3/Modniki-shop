const {Schema, model, ObjectId} = require("mongoose")


const User = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  avatar: {type: String},
  comments : [{type: ObjectId, ref:'Comment'}]
})

module.exports = model('User', User)