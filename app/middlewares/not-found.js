const notfound = (req, res) => res.status(404).json({ status: 'error', massage: 'route does not exist'})

module.exports = notfound