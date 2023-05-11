# Shift Management API

This API allows for the management of shifts for healthcare professionals in different facilities.

## Technologies

- Node.js
- Express.js
- Sequelize

## Getting Started

### Prerequisites

- Node.js
- yarn/npm
- The process of initializing the database is set up in a file located at `./models/index.js`.
```bash
Sequelize(`postgres://postgres:postgres@localhost:5432/postgres`, {
    dialect: 'postgres', 
    logging: false 
    })
```

### Installation

1. Clone the repository

```
git clone https://github.com/anabaei/challenge
```

2. Install dependencies

```
npm install 
or
yarn install
```

3. Create a `.env` file based on the `.env.example` file and set your own values for the environment variables.

4. Start the application

```
yarn dev  
or 
npm run dev
```

### Endpoints
* Are available at swagger 
```bash
http://localhost:3000/api-docs
```
#### GET /shifts

Retrieve all shifts within a start and end date for the which are available and not from the specific facility

Query parameters:

- `start_date` (required) - Start date for the range of shifts to retrieve (ISO 8601 format)
- `end_date` (required) - End date for the range of shifts to retrieve (ISO 8601 format)

Request:
```javascript
http://localhost:3000/shifts/available?facilityId=1&start_date=2023-01-07&end_date=2023-04-07&page=1&page_size=1

specific facility id = 1
```

Example response:

```json
{
    "2023-02-01": [
        {
            "id": 1597248,
            "start": "2023-02-01T21:00:00.000Z",
            "end": "2023-02-02T02:00:00.000Z",
            "is_deleted": true,
            "profession": "LVN"
        },
        {
            "id": 1598695,
            "start": "2023-02-01T21:00:00.001Z",
            "end": "2023-02-02T02:00:00.001Z",
            "is_deleted": true,
            "profession": "RN"
        },
    ]
}
```

#### GET /facilities/:facilityId/shifts

Retrieve all shifts for a specific facility within a start and end date.

Query parameters:

- `start_date` (required) - Start date for the range of shifts to retrieve (ISO 8601 format)
- `end_date` (required) - End date for the range of shifts to retrieve (ISO 8601 format)

Example Request:
```javascript
GET http://localhost:3000/facilities/2/shifts?start_date=2021-01-07T12:00:00.201Z&end_date=2023-04-07T17:00:00.201Z

facility_id = 2
//as defualts
page=1 
page_size =1
```

Example response:

```json
{
    "2023-03-01": [
        {
            "start": "2023-03-01T21:00:00.739Z",
            "end": "2023-03-02T02:00:00.739Z"
        },
        {
            "start": "2023-03-01T12:00:00.741Z",
            "end": "2023-03-01T17:00:00.741Z"
        },
    ]
}
```

#### GET /shifts/available

Retrieve all available shifts for a specific facility within a start and end date which are not claimed

Query parameters:

- `facilityId` (required) - ID of the facility to retrieve shifts for
- `start_date` (required) - Start date for the range of shifts to retrieve (ISO 8601 format)
- `end_date` (required) - End date for the range of shifts to retrieve (ISO 8601 format)


Request:
```javascript
http://localhost:3000/shifts?start_date=2023-01-07T12:00:00.201Z&end_date=2023-04-07T17:00:00.201Z
```

Example response:

```json
{
    "2023-02-01": [
        {
            "id": 1597248,
            "start": "2023-02-01T21:00:00.000Z",
            "end": "2023-02-02T02:00:00.000Z",
            "is_deleted": true,
            "profession": "LVN"
        },
        {
            "id": 1598695,
            "start":

```

## Performance

* To increase performance there are several solutions like caching and pagination. I implemented pagination on all urls, if no `page` or `page_size` not assigned the default value is always `1`

* `Pagination` can reduce the amount of data that needs to be transferred over the network and improve the response time of the API.


### Database
![Untitled-2022-12-08-1716](https://github.com/Clipboard-recruiting/candidate-sse-take-home-challenge-234/assets/7471619/e74af833-1e93-4647-a105-682dca13a01b)


### Tree structure of our APP 

- app
  - controllers
    - userController.js
    - postController.js
  - middlewares
    - auth.js
    - error.js
  - models
    - user.js
    - post.js
  - routes
    - api
      - user.js
      - post.js
    - index.js
  - services
    - userService.js
    - postService.js
  - utils
    - logger.js
  - app.js
  - config.js
  - package.json

Please review by @cbhrecruiters 