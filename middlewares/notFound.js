function notFound(req, res, next) {
  res.status(404).json({ message: 'Endpoint non trovato' })
}

export default notFound
