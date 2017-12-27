export const schema = [`
type Search {
  id: String
  checkInDate: String
  checkOutDate: String
  rewardProgram: RewardProgram
  promotion: String
  rooms: Int
  results: [ HotelResult ]
}

type RewardProgram {
  name: String
}

type HotelResult {
  hotel: Hotel
  description: String
}
`];

export const resolvers = {};
