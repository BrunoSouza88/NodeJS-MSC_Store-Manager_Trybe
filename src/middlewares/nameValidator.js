const nameValidator = (req, res, next) => {
  const name = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.name === undefined || name.name === null) {
    return res.status(400).json({ message: '"name" is required' });
  }

  if (name.name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

module.exports = nameValidator;