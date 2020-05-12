import {request} from './axios'

export function login(phone, password) {
  return request({
    url: '/login/cellphone',
    params: {
      phone: phone,
      password: password
    }
  })
}