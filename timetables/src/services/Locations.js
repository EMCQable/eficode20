import axios from 'axios'
//import { API } from 'aws-amplify'

const baseUrl = 'https://api.digitransit.fi/geocoding/v1/search'

/*const getAll = async () => {
  const apiName = 'sensordata'
  const path = '/'
  const data = await API.get(apiName, path)
  return data
}*/

const getLocation = async (searchFor) => {
  const response = await axios.get(baseUrl+`?text=${searchFor}&size=1`)
  return response.data
}

export default { getLocation }
