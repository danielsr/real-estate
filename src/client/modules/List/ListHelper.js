import axios from 'axios'

export async function getList() {
  return axios.get('http://localhost:3000/api-list')
}
