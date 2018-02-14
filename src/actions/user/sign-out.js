import ApiClient from '../../api/client'

export const USER_SIGNED_OUT = 'USER_SIGNED_OUT'

const api = new ApiClient()

export default (User) => {
  return dispatch => {

    api.storeToken(null)
    dispatch({type: USER_SIGNED_OUT, payload: null})
  }
}
