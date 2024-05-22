const authorController = {};
const { Author, Book } = require("../models");

authorController.create = async (req, res) => {
  const { name, nationality } = req.body;

  try {
    if (!name || !nationality) {
      res.status(400).json({
        success: true,
        message: "Invalid name or nationality",
      });
      return;
    }

    await Author.create({
      name,
      nationality,
    });

    res.status(200).json({
      success: true,
      message: "Author created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating author",
      error: error.message,
    });
  }
};

authorController.getAll = async (req, res) => {
  try {
    const authors = await Author.findAll();

    res.status(200).json({
      success: true,
      message: "Authors retreived successfully",
      data: authors,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retreiving authors",
      error: error.message,
    });
  }
};

authorController.getById = async (req, res) => {
  const authorId = req.params.id;

  try {
    const author = await Author.findByPk(authorId, {
      include: [
        {
          model: Book,
          as: "books",
          attributes: { exclude: ["createdAt", "updatedAt", "author_id"] },
        },
      ],
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });

    if (!author) {
      res.status(404).json({
        success: true,
        message: "Author not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Author retreived successfully",
      data: author,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retreiving author",
      error: error.message,
    });
  }
};

authorController.update = async (req, res) => {
  try {
    const authorId = req.params.id;
    const authorData = req.body;

    await Author.update(authorData, {
      where: {
        id: authorId,
      },
    });

    res.status(200).json({
      success: true,
      message: "Author updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating author",
      error: error.message,
    });
  }
};

authorController.delete = async (req, res) => {
  const authorId = req.params.id;

  await Author.destroy({
    where: {
      id: authorId,
    },
  });

  res.status(200).json({
    success: true,
    message: "Author deleted successfully",
  });
};

module.exports = authorController;