import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('Lista dei libri')
})

router.get('/:id', (req, res) => {
  res.send(`Dettagli del libro ${req.params.id}`)
})

router.post('/', (req, res) => {
  res.send('Creazione di un nuovo libro')
})

router.put('/:id', (req, res) => {
  res.send(`Modifica del libro ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
  res.send(`Cancellazione del libro ${req.params.id}`)
})

export default router
