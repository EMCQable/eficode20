import ApolloClient, { gql } from 'apollo-boost'
import findPlace from './Locations'

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
})

let toPlace = 'Pohjoinen Rautatienkatu 25, Eficode Office'
let toLat = '60.169443'
let toLon = '24.926077'

let numItineraries = '2'
let minTransfertime = '120'

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
  try {
    const geoLocated = await findPlace.getLocation(startLocation)
    const placeName = geoLocated.geocoding.query.parsed_text.name
    let fromLat = geoLocated.bbox[1]
    let fromLon = geoLocated.bbox[0]
    let place = `${placeName}::${fromLat},${fromLon}`
    const response = await client.query({
      query: SOME_ITINERARY,
      variables: {
        place
      }
    })
    return response.data
  } catch (e) {
    console.log(e)
  }
}

export default { getItineraries }