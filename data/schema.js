import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers.js';

const typeDefs = `
type Query {
  hotel(id: Int): Hotel
  getFortuneCookie: String
}

type Hotel {
  id: Int
  description: String
  amenities: [ Amenity ]
  amenityCategories: [ Amenity ]
  name: String
  phoneNumber: String
  address: Address
  rating: Float
  numberOfReviews: Int
}

type Amenity {
  name: String
}

type Address {
  line1: String
  line2: String
  city: String
  state: State
  country: Country
  zipCode: String
  latitude: Float
  longitude: Float
}

type State {
  code: String
  name: String
}

type Country {
  code: String
  name: String
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
