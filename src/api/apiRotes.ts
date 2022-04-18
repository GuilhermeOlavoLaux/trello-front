import axios from 'axios'

const api = axios.create({
  baseURL: 'https://trello-back-deploy-jmfiuj93c-guilhermeolavolaux.vercel.app/'
})

export { api }
