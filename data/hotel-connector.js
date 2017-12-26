import fetch from 'node-fetch';

const Hotel = {
    getOne(id) {
        let url = 'http://localhost:8080/rest/hotels/23';

        return fetch(url)
            .then(res => res.json())
            .then(res => {
                return res;
            });
    }
};

export default Hotel;
