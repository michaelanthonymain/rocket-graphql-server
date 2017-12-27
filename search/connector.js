import fetch from 'node-fetch';
import { reduce } from 'lodash';

const Search = {
    get() {
        let params = {
            adults: 2,
            checkIn: '12/28/2017',
            checkOut: '12/29/2017',
            currency: 'USD',
            language: 'en',
            latitude: 40.756054,
            locationType: 'CITY',
            longitude: -73.98695,
            program: 'aeroplan',
            query: 'New York City, NY, United States',
            region: 1,
            rooms: 1
        };

        return fetch('http://localhost:8080/rest/search' + buildParams(params))
            .then(res => res.json())
            .then(res => {
                return res;
            });
    }
};

function buildParams(params) {
    return reduce(params, function (urlParams, value, key) {
        return urlParams + key + '=' + value + '&';
    }, '?');
}

export default Search;
