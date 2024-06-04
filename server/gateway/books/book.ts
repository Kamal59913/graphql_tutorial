import { Schema, model } from 'mongoose';

export type Book = {
  title: string,
  author: string,
  price: string
}

const bookSchema = new Schema<Book>({

    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },

    price: {
      type: String,
      required: true
    },

  },
  {
    timestamps: true,
  });

const booksModel = model('Books', bookSchema);

export default booksModel;
