import booksModel from "../book";

const updateBookResolver = async (parent, args, context) => {
  try {
    const { id, title, author, price } = args;
    console.log(id, title, author, price,"hello world")
    const updatedBook = await booksModel.findByIdAndUpdate(
      id,
      { title, author, price },
      { new: true, runValidators: true }
    );
    if (!updatedBook) {
      throw new Error('Book not found');
    }
    console.log("Book updated:", updatedBook);
    return updatedBook;
  } catch (e) {
    console.log(e);
    return {
      errors: [
        {
          message: 'Something went wrong',
          code: 'SERVER_ERROR',
        },
      ],
    };
  }
};

export default updateBookResolver;
