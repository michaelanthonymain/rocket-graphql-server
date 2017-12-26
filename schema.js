import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

import Hotel from './hotel/connector';
import { schema as hotelSchema, resolvers as hotelResolvers } from './hotel/schema';

const rootSchema = [`
type Query {
  hotel(id: Int): Hotel
}
`];

const rootResolvers = {
    Query: {
        hotel(id) {
            return Hotel.getOne(id);
        }
    }
};

const schema =  [ ...rootSchema, ...hotelSchema ];
const resolvers = merge(rootResolvers, hotelResolvers);

const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers
});

export default executableSchema;
