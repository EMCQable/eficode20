import ApolloClient, { gql } from 'apollo-boost';
import findPlace from './Locations'

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
})

var toPlace = 'Pohjoinen Rautatienkatu 25, Eficode Office'
var toLat = '60.169443'
var toLon = '24.926077'

var numItineraries = '2'
var minTransfertime = '120'

const SOME_ITINERARY = gql`
query findCoordinatesByPlaceName(
  $place: String!,
  ){
  plan(
    fromPlace: $place,
    toPlace: "${toPlace}::${toLat},${toLon}",
    numItineraries: ${numItineraries},
    minTransferTime: ${minTransfertime},
  ) {
    itineraries{
      startTime,
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



const getItineraries = async (startLocation) => {
  const geoLocated = await findPlace.getLocation(startLocation)
  const placeName = geoLocated.geocoding.query.parsed_text.name
  var fromLat = geoLocated.bbox[1]
  var fromLon = geoLocated.bbox[0]
  var place = `${placeName}::${fromLat},${fromLon}`
  //fromPlace = geoLocated
  const response = await client.query({
    query: SOME_ITINERARY,
    variables: {
      place
    }
  })
  return response.data
}

export default { getItineraries }