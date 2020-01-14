const mongoose =require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
  userId:{
    type:String,
    require:true
  }
})

mongoose.model('users', userSchema)