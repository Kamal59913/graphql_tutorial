import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { bookQuery } from "./gateway/books/schema";
import { GraphQLNonNull } from "graphql";
import { GraphQLString } from "graphql";
import addBookResolver from "./gateway/books/resolver/addBookResolver";
import updateBookResolver from "./gateway/books/resolver/updateBookResolver";

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: {
    title: {type: new GraphQLNonNull(GraphQLString)},
    author: {type: new GraphQLNonNull(GraphQLString)},
    price: {type: new GraphQLNonNull(GraphQLString)}
  }
})


const query = new GraphQLObjectType({
  name: "query",
  fields: () => ({
    ...bookQuery,
  }),   
});

const mutation = new GraphQLObjectType({
  name: "mutation",
  fields: () => ({
    addBook: {
      type: BookType,
      args: {
        title: { type: new GraphQLNonNull(GraphQLString)},
        author: { type: new GraphQLNonNull(GraphQLString)},
        price: { type: new GraphQLNonNull(GraphQLString)}
      },

      resolve: addBookResolver
    },
    updateBook: {
      type: BookType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        title: { type: new GraphQLNonNull(GraphQLString) },
        author: { type: new GraphQLNonNull(GraphQLString) },
        price: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: updateBookResolver
    }
  })
})

export const schema = new GraphQLSchema({
  mutation,
  query,
});
