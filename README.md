# Fetch Refresher - Hedgehog Party

Hedgehog Party is an application designed for the [Fetch Lesson](http://backend.turing.io/module4/lessons/fetch_refresher) for Turing Schools Back-End Module 4 students. This repo includes the front-end (built in jQuery) and Express server.

## Your Task

Clone down the repo and follow setup instructions. Look through the JavaScript in `public/index.js` - we already have a get request up and running to get, then append, all the hedgies in the database onto the DOM. Make sure you open up the app in the browser and keep your Dev Tools open while working. You should be pairing with your Quantified Self partner for this activity.

**Step 1:** Choose a driver. Together, write the request to POST a new hedgehog. See the README for info on what is expected in the request.

**Step 2:** Now, the other partner should drive. Work together to write the request to DELETE a hedgehog from the invite list.

NOTE: Both tasks require network requests as well as DOM manipulation. This is good practice for Quantified Self/Play😊

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

