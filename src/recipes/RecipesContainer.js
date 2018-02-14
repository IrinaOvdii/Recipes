import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Title from '../components/Title'
import PropTypes from 'prop-types'
import RecipeItem, { recipeShape } from './RecipeItem'
import RecipeEditor from './RecipeEditor'
import fetchRecipes  from '../actions/recipes/fetch'

class RecipesContainer extends PureComponent {
  static propTypes = {
    recipes: PropTypes.arrayOf(recipeShape).isRequired,
    // updateRecipe: PropTypes.func.isRequired
  }

  renderRecipe(recipe, index) {
    return (
      <RecipeItem
        key={index}
        // updateRecipe={this.props.updateRecipe}
        {...recipe}
      />
    )
  }
  componentWillMount() {
    this.props.fetchRecipes()
  }
  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="Recipes" />
          <RecipeEditor />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>
      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({
recipes
})

export default connect(mapStateToProps, { fetchRecipes})(RecipesContainer)
