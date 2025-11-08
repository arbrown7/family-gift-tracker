const validator = require('../helpers/validate');

const validateGift = (req, res, next) => {
  const validationRule = {
    name: 'required|string',
    price: 'numeric',
    purchased: 'boolean',
    familyMember: 'string' // optional ObjectId reference to Family
  };

  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      return res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    }
    next();
  });
};

module.exports = { validateGift };
