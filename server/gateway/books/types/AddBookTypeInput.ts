import { GraphQLInputObjectType, GraphQLString, GraphQLNonNull } from 'graphql';

export const AddBookInput = new GraphQLInputObjectType({
  name: 'AddBookInput',
  fields: () => ({
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
      type: new GraphQLNonNull(GraphQLString),
    },
    price: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }),
});
