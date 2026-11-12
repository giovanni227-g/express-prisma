import express from 'express'
import booksRouter from './routers/books.js'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/books', booksRouter)

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`)
})
