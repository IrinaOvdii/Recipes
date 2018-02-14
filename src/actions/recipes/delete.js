import ApiClient from '../../api/client'
export const DELETE_RECIPE = 'DELETE_RECIPE'

const api = new ApiClient()

export default () => {
  return dispatch => {
    // dispatch(loading(true)) // ???

    api.delete('recipes/')
      .then(res => dispatch({ type: DELETE_RECIPE, payload: res.body }))
      //.catch(err => dispatch(loadError(err))) ???
    }
    // dispatch(loading(false)) // ???
  }
