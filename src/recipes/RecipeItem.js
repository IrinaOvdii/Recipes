import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Pescatarian from '../images/pescatarian.svg'
import Vegan from '../images/vegan.svg'
import Vegetarian from '../images/vegetarian.svg'
import './RecipeItem.css'
import LikeButton from '../components/LikeButton'
import { Link } from 'react-router-dom'

export const recipeShape = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  vegan: PropTypes.bool,
  vegetarian: PropTypes.bool,
  pescatarian: PropTypes.bool,
  liked: PropTypes.bool
})

const PLACEHOLDER = 'http://via.placeholder.com/500x180?text=No%20Image'

class RecipeItem extends PureComponent {
  static propTypes = {
    ...recipeShape.isRequired,
    // updateRecipe: PropTypes.func.isRequired
  }

  toggleLike = () => {
    // const { updateRecipe, _id, liked } = this.props
    // updateRecipe(_id, { liked: !liked })
  }

  render() {
    const { _id, title, summary, vegan, vegetarian, pescatarian, liked } = this.props

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
         <Link to={'/recipes/' + _id }>Show recipe</Link>
       </footer>
      </article>
    )
  }
}

export default RecipeItem
