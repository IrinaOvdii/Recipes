// import recipes from './recipes'
import { USER_SIGNED_IN } from '../actions/user/sign-in'
import { USER_SIGNED_OUT } from '../actions/user/sign-out'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case USER_SIGNED_IN :
      return payload
    case USER_SIGNED_OUT :
      return payload

    default :
      return state
  }
}
