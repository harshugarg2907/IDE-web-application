let mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harshugarg2907:TeEZ8weYoYlDvKbz@cluster0.jhh5o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

let userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  date:{
    type: Date,
    default: Date.now
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', userSchema); // 'User' is the name of the collection