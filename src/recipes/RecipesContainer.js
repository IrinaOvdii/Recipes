import React, { PureComponent } from 'react'
import Title from '../components/Title'
import PropTypes from 'prop-types'
import RecipeItem, { recipeShape } from './RecipeItem'

class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.arrayOf(recipeShape).isRequired,
    updateRecipe: PropTypes.func.isRequired
  }

  renderRecipe(recipe, index) {
    return (
      <RecipeItem
        key={index}
        updateRecipe={this.props.updateRecipe}
        {...recipe}
      />
    )
  }

  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>
      </div>
    )
  }
}

export default RecipesContainer
