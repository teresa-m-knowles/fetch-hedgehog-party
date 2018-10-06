# Fetch Refresher - Hedgehog Party

Hedgehog Party is an application designed for the [Fetch Lesson](http://backend.turing.io/module4/lessons/fetch_refresher) for Turing Schools Back-End Module 4 students. This repo includes the front-end (built in jQuery) and Express server.

## Setup 

- Fork or clone this repo
- Run `npm install`
- Run `npm start`

## Deployed API

https://hedgehog-party.herokuapp.com/

## Endpoints

**GET `/api/v1/invites`**

Example Response: 
```json
[
  {
    "id": 1,
    "name": "Sonic",
    "hoglets": 3,
    "allergies": "none",
    "created_at": null
  },
  {
    "id": 2,
    "name": "Shark",
    "hoglets": 7,
    "allergies": "rice",
    "created_at": null
  },
  {
    "id": 3,
    "name": "Sunny",
    "hoglets": 0,
    "allergies": "spicy foods",
    "created_at": null
  }
]
```

**POST `/api/v1/invites`**

Expected Request Format:
```json
 {
    "name": "Sofie",
    "hoglets": 3,
    "allergies": "advil"
  }
```

Successful Return Value:
```json
{
    "id": 219
}
```

If one of the required properties is missing in post request, a 422 status code along with a response body informing you of the first missing property:

```json
{
    "error": "You are missing the <name/hoglets/allergies> property."
}
```

**DELETE `/api/v1/invites/:id`**

No return value on a successful delete.
