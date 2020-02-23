import ApolloClient, { gql } from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
})
var fromPlace = 'Teekkarikylä, Espoo'
var fromLat = '60.188336'
var fromLon = '24.834901'

var toPlace = 'Pohjoinen Rautatienkatu 25'
var toLat = '60.169443'
var toLon = '24.926077'

var numItineraries = '2'

const query = gql`
{
  plan(
    fromPlace: "${fromPlace}::${fromLat},${fromLon}",
    toPlace: "${toPlace}::${toLat},${toLon}",
    numItineraries: ${numItineraries}
  ) {
    itineraries{
      startTime
      walkDistance,
      duration,
      legs {
        route {
          gtfsId
        }
        mode
        startTime
        endTime
        from {
          name
          stop {
            code
            name
          }
        },
        to {
          name
        },
        distance
      }
    }
  }
}
`

const getItineraries = async() => {
  const response = await client.query({ query })
  return response.data
}

export default {getItineraries}