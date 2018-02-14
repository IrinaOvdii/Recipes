import ApiClient from '../../api/client'
import { push } from 'react-router-redux'

export const USER_SIGNED_IN = 'USER_SIGNED_IN'

const api = new ApiClient()


export default (User) => {
  return dispatch => {
    // dispatch(loading(true)) // ???

    api.post('sessions', User)
    .then( (res) => {
       api.storeToken(res.body.token)
       api.get('users/me')
        .then ( (res) => {
         dispatch({type: USER_SIGNED_IN, payload: res.body})
         dispatch(push('/'))
       })
    })
      //.catch(err => dispatch(loadError(err))) ???
    // dispatch(loading(false)) // ???
  }
}
