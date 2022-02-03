module.exports = (req, res, next, error) => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: 'Internal server error' });
};