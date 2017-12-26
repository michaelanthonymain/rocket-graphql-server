import FortuneCookie from './connectors';
import Hotel from './hotel-connector';

const resolvers = {
    Query: {
        hotel(id) {
            return Hotel.getOne(id);
        },
        getFortuneCookie() {
            return FortuneCookie.getOne();
        }
    }
};

export default resolvers;
