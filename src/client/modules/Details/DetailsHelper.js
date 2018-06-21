import axios from 'axios'

export async function getDetails(id) {
  return axios.get(`http://localhost:3000/api-details?id=${id}`)
}
