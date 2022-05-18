const BookService = require('../service/BooksService')

const getAll = async (_req, res) => {
    const books = await BookService.getAll();
    res.status(200).json(books)
};

const getById = async (req, res) => {
    try {
        const { id } = req.params
        const book = await BookService.getById(id)

        if(!book) return res.status(404).json({ message: 'Book not found'})

        return res.status(200).json(book)
    }catch(err) {
        console.error(err.message);
        res.status(500).json({ message: 'internal server error'})
    }
}

const createBook = async (req, res) => {
    try {
        const newBook = await BookService.createBook(req.body)

        res.status(201).json(newBook);
    }catch(err){
        console.log(err.message);
        res.status(500).json({ message: 'internal server error' })
    }
}

const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, pageQuantity } = req.body

        const bookUpdated = await BookService.updateBook(id, { title, author, pageQuantity});

        if(!bookUpdated) return res.status(404).json({ message: 'Book not found'})

        res.status(201).json({ message: 'Book updated'});
    }catch(err){
        console.log(err.message);
        res.status(500).json({ message: 'internal server error' })
    }
}

const remove = async (req, res) => {
    const { id } = req.params;
  
    const removed = await BookService.remove(id);
  
    if (!removed) return res.status(404).json({ message: 'Book not found' });
  
    res.status(200).json({ message: 'Book removed' });
  };

module.exports = { getAll, getById, createBook, updateBook, remove };