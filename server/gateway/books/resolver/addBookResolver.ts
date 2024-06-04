import booksModel from "../book";

const addBookResolver = async (parent, args, context) => {
  try {
  
   const { title, author, price } = args;

   const newBook = new booksModel({
    title, author, price
   })

   await newBook.save();

   console.log("Some new books has been added to the database")
   console.log(title, author, price)

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

export default addBookResolver;
