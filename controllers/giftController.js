const Gift = require('../models/Gift');

// GET all gifts
exports.getAll = async (req, res) => {
  const gifts = await Gift.find().populate('familyMember');
  res.json(gifts);
};

// POST create new gift
exports.create = async (req, res) => {
  const gift = new Gift(req.body);
  await gift.save();
  res.status(201).json(gift);
};

// PUT update gift
exports.update = async (req, res) => {
  const gift = await Gift.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(gift);
};

// DELETE gift
exports.delete = async (req, res) => {
  await Gift.findByIdAndDelete(req.params.id);
  res.json({ message: 'Gift deleted' });
};
