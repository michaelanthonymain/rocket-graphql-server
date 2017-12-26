import fetch from 'node-fetch';

const Hotel = {
    get(id) {
        let url = 'http://localhost:8080/rest/hotels/' + id;

        return fetch(url)
            .then(res => res.json())
            .then(res => {
                return res;
            });
    }
};

export default Hotel;
