import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Pescatarian from '../images/pescatarian.svg'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import './RecipeItem.css'
import LikeButton from '../components/LikeButton'

export const recipeShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  vegan: PropTypes.bool,
  vegetarian: PropTypes.bool,
  pescatarian: PropTypes.bool,
  liked: PropTypes.bool
})

class RecipeItem extends PureComponent {
  static propTypes = {
    ...recipeShape,
    updateRecipe: PropTypes.func.isRequired
  }

  toggleLike = () => {
    const { updateRecipe, _id, liked } = this.props
    updateRecipe(_id, { liked: !liked })
  }

  render() {
    const { title, summary, vegan, vegetarian, pescatarian, liked } = this.props

    return(
      <article className="recipe">
        <h1>{ title }</h1>
        <div>
          <p>{ summary }</p>
          <ul>
            { vegan && <li><img src={Vegan} alt="vegan" /></li> }
            { !vegan && vegetarian && <li><img src={Vegetarian} alt="vegetarian" /></li> }
            { pescatarian && <li><img src={Pescatarian} alt="pescatarian" /></li> }
          </ul>
        </div>
        <footer>
         <LikeButton onChange={this.toggleLike} liked={liked} />
       </footer>
      </article>
    )
  }
}

export default RecipeItem
