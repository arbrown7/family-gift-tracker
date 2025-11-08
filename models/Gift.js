const mongoose = require('mongoose');

const giftSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: Number,
  purchased: { type: Boolean, default: false },
  familyMember: { type: mongoose.Schema.Types.ObjectId, ref: 'Family' }
});

module.exports = mongoose.model('Gift', giftSchema);
