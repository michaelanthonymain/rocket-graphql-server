# rocket-graphql-server

Starting point for a Rocket GraphQL Server.

## Getting started

```bash
git clone git@github.com:michaelanthonymain/rocket-graphql-server.git
cd rocket-graphql-server
npm install
npm start
```

Then open [http://localhost:3000/graphiql](http://localhost:3000/graphiql)

When you paste this on the left side of the page:

```graphql
{
  hotel(id: 30) {
    id
    ns
    branding
    mainImage {
      url
    }
    images {
      url
    }
    description
    amenities {
      name
    }
    amenityCategories {
      name
    }
    name
    phoneNumber
    address {
      line1
      line2
      city
      state {
        code
        name
      }
      country {
        code
        name
      }
      zipCode
      latitude
      longitude
    }
    stars
    checkInHour
    checkOutHour
    rating
    numberOfReviews
    checkInText
    checkOutText
    brand {
      code
    }
  }
}
```

and hit the play button (cmd-return), then you should get this on the right side:

```json
{
  "data": {
    "hotel": {
      "id": 30,
      ...
      }
  }
}
```
