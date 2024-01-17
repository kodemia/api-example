// ejemplo
const mongose = require('mongoose')

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('koder', schema)