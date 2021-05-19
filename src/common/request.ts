import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 15000
}) 

instance.interceptors.response.use((res) => {
  if ((res.status >= 200 && res.status < 300) || res.status === 403) {
    return res.data
  } else {
    let error = new Error(res.statusText)
    error.message = JSON.stringify(res)
    throw error
  }
}, (err) => {
  let error = new Error(err.statusText)
  error.message = err
  throw error
})

export default function (params: any) {
  return instance(params, ...arguments) as Promise<any>
} 