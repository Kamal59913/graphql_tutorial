import bookModel from '../../../db/models/books';
import mongoose from 'mongoose';

const getBooksResolver = async (): Promise<any> => {
  try {

    const bookList: any[] = await bookModel.find()

    console.log("Hello world")
    
    if (!bookList) {
      return {
        errors: [
          {
            message: 'Employee not found',
            code: 'BAD_USER_INPUT',
          },
        ],
      };
    }
    return {
        bookList,
      errors: null,
    };
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

export default getBooksResolver;
