const bookController = {};
const { Book, Author } = require("../models");

bookController.create = async (req, res) => {
    const { title, gender, author_id } = req.body;

    try {
        if (!title || !gender || !author_id) {
            res.status(400).json({
                success: true,
                message: "Invalid title, gender or author_id",
            });
            return;
        }

        await Book.create({
            title,
            gender,
            author_id,
        });

        res.status(200).json({
            success: true,
            message: "Book created successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating book",
            error: error.message,
        });
    }
};

bookController.getAll = async (req, res) => {
    try {
        const books = await Book.findAll();

        res.status(200).json({
            success: true,
            message: "Books retreived successfully",
            data: books,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retreinving books",
            error: error.message,
        });
    }
};

bookController.getById = async (req, res) => {
    const bookId = req.params.id;

    try {
        const book = await Book.findByPk(bookId, {
            include: [
                {
                    model: Author,
                    as: "author",
                    attributes: { exclude: ["createdAt", "updatedAt"] },
                },
            ],
            attributes: { exclude: ["createdAt", "updatedAt", "author_id"] },
        });
        if (!book) {
            res.status(404).json({
                success: true,
                message: "Book not found",
            });
            return;
        }

        res.status(200).json({
            success: true,
            message: "Book retreived successfully",
            data: book,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error retreinving book",
            error: error.message,
        });
    }
};

bookController.update = async (req, res) => {
    console.log("update");
    const bookId = req.params.id;
    const bookData = req.body;

    try {
        await Book.update(bookData, {
            where: {
                id: bookId,
            },
        });

        res.status(200).json({
            success: true,
            message: "Book updated successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating book",
            error: error.message,
        });
    }
};

bookController.delete = async (req, res) => {
    const bookId = req.params.id;

    try {
        await Book.destroy({
            where: {
                id: bookId,
            },
        });

        res.status(200).json({
            success: true,
            message: "Book deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting book",
            error: error.message,
        });
    }
};

module.exports = bookController;