import express from 'express'
import booksRouter from './routers/books.js'
import notFound from './middlewares/notFound.js'
import errorsHandler from './middlewares/errorsHandler.js'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/books', booksRouter)

app.use(notFound)
app.use(errorsHandler)

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`)
})
