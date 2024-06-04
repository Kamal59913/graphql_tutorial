import { GraphQLInt, GraphQLList, GraphQLObjectType } from "graphql";
import BookList from "./BooksList";
import Error from "../../types/ErrorType";

const BookResponse = new GraphQLObjectType({
    name: 'BookResponse',
    fields: () => ({
        booksList: {
            type: new GraphQLList(BookList)
        },
        totalBooks: {
            type: GraphQLInt
        },
        errors: {
            type: new GraphQLList(Error)
        }
    })
})

export default BookResponse;