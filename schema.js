import { merge } from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

import Hotel from './hotel/connector';
import { schema as hotelSchema, resolvers as hotelResolvers } from './hotel/schema';

import Search from './search/connector';
import { schema as searchSchema, resolvers as searchResolvers } from './search/schema';

const rootSchema = [`
type Query {
  hotel(id: Int): Hotel
  search: Search
}
`];

const rootResolvers = {
    Query: {
        hotel(_, args) {
            return Hotel.get(args.id);
        },
        search(_, args) {
            return Search.get();
        }
    }
};

const schema =  [ ...rootSchema, ...hotelSchema, ...searchSchema ];
const resolvers = merge(rootResolvers, hotelResolvers, searchResolvers);

const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers
});

export default executableSchema;
