import { GraphQLObjectType, GraphQLList } from 'graphql';
import Error from '../../types/ErrorType';

const ReponseType = new GraphQLObjectType({
  name: 'ReponseType',
  fields: () => ({
    errors: {
      type: new GraphQLList(Error),
    },
  }),
});
export default ReponseType;
