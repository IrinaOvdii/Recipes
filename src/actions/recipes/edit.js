import ApiClient from '../../api/client'
export const EDIT_RECIPE = 'EDIT_RECIPE'

const api = new ApiClient()

export default (editRecipe) => {
  return dispatch => {
    // dispatch(loading(true)) // ???

    api.patch('recipes', editRecipe)
      .then(res => dispatch({ type: EDIT_RECIPE, payload: res.body }))
      //.catch(err => dispatch(loadError(err))) ???
    }
    // dispatch(loading(false)) // ???
  }
