import axios from 'axios'
import { HAS_ERROR } from '../types'
import { LOGIN_URL, SIGNUP_URL } from '../apiConstants'
export const loginAction = (data) => {
  return dispatch => {
    return axios
    .post(`${LOGIN_URL}`, data)
    .then(res => {
      console.log(res,222)
      localStorage.setItem('token',res.data.token)
      return res;
    })
    .catch(error => {
      console.log(error)
      dispatch({
          type: HAS_ERROR,
          data: error,
        })
      return error;
    })
  }
}
export const signupAction = (data) => {
  return dispatch => {
    return axios
    .post(`${SIGNUP_URL}`, data)
    .then(res => {
      console.log(res,222)
      return res;
    })
    .catch(error => {
      console.log(error)
      dispatch({
          type: HAS_ERROR,
          data: error,
        })
      return error;
    })
  }
}


