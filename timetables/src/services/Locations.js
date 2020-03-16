import axios from 'axios'

const baseUrl = 'https://api.digitransit.fi/geocoding/v1/search'

const getLocation = async (searchFor) => {
  try {
    const response = await axios.get(baseUrl + `?text=${searchFor}&size=1`)
    return response.data
  } catch (e) {
    alert(e.message)
  }
}

export default { getLocation }
