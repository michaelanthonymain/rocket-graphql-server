export const schema = [`
type Hotel {
  id: Int
  ns: String
  branding: String
  mainImage: Image
  images: [ Image ]
  description: String
  amenities: [ Amenity ]
  amenityCategories: [ Amenity ]
  name: String
  phoneNumber: String
  address: Address
  stars: Float
  checkInHour: Int
  checkOutHour: Int
  rating: Float
  numberOfReviews: Int
  checkInText: String
  checkOutText: String
  brand: Brand
}

type Image {
  url: String
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

type Brand {
  code: String
}
`];

export const resolvers = {};
