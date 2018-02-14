import ApiClient from '../../api/client'
export const CREATE_RECIPE = 'CREATE_RECIPE'

const api = new ApiClient()

export default (newRecipe) => {
  return dispatch => {
    // dispatch(loading(true)) // ???

    api.post('recipes', newRecipe)
      .then(res => dispatch({ type: CREATE_RECIPE, payload: res.body }))
      //.catch(err => dispatch(loadError(err))) ???
    }
    // dispatch(loading(false)) // ???
  }
