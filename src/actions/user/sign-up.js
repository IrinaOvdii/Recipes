import ApiClient from '../../api/client'

export const USER_SIGNED_UP = 'USER_SIGNED_UP'

const api = new ApiClient()


export default (newUser) => {
  return dispatch => {
    // dispatch(loading(true)) // ???

    return api.post('users', newUser)
      //.catch(err => dispatch(loadError(err))) ???
    // dispatch(loading(false)) // ???
  }
}
