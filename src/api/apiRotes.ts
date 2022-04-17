import axios from 'axios'

const api = axios.create({
  baseURL: 'https://trello-backv2.vercel.app/'
})

export { api }
