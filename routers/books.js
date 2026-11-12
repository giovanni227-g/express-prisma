import express from 'express'
import prisma from '../lib/prisma.js'

const router = express.Router()

// Index
router.get('/', async (req, res, next) => {
  try {
    const books = await prisma.book.findMany({
      include: { category: true }
    })

    res.json(books)
  } catch (error) {
    next(error)
  }
})

// Show
router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const book = await prisma.book.findUnique({
      where: { id },
      include: { category: true }
    })

    if (!book) {
      return res.status(404).json({ message: 'Libro non trovato' })
    }

    res.json(book)
  } catch (error) {
    next(error)
  }
})

// Store
router.post('/', async (req, res, next) => {
  try {
    const { title, description, author, price, categoryId } = req.body
    const book = await prisma.book.create({
      data: {
        title,
        description,
        author,
        price,
        categoryId
      }
    })

    res.status(201).json(book)
  } catch (error) {
    next(error)
  }
})

// Update
router.put('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const existingBook = await prisma.book.findUnique({ where: { id } })

    if (!existingBook) {
      return res.status(404).json({ message: 'Libro non trovato' })
    }

    const { title, description, author, price, categoryId } = req.body
    const book = await prisma.book.update({
      where: { id },
      data: {
        title,
        description,
        author,
        price,
        categoryId
      }
    })

    res.json(book)
  } catch (error) {
    next(error)
  }
})

// Delete
router.delete('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const existingBook = await prisma.book.findUnique({ where: { id } })

    if (!existingBook) {
      return res.status(404).json({ message: 'Libro non trovato' })
    }

    await prisma.book.delete({ where: { id } })
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

export default router
