import axios from 'axios'

const api = axios.create({
  baseURL: 'https://cursos.gruporeport.com.br/api'
})

// https://rpt-edu-app.herokuapp.com/'
export default api
