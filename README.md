# Consuming GraphQL with TSX

This project is an simply example illustrating how to consume data from a graphql endpoint and render it in a React application.

## Running the app
`yarn`
`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Space X GraphQL Endpoint

`https://api.spacex.land/graphql/`

### Query

```
{
  launchesPast(limit: 10) {
    id
    mission_name
    launch_date_local
    launch_success
  }
}

```
