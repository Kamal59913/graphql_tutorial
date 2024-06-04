import { GraphQLFloat, GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

const BookList = new GraphQLObjectType({
    name: 'BooksList',
    fields: () => ({
        _id: {
            type: GraphQLID,
        },
        title: {
            type: GraphQLString 
        },
        author: {
            type: GraphQLString
        },
        price: {
            type: GraphQLFloat
        }
    })
})

export default BookList;