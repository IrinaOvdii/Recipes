import React, {PureComponent} from 'react'
import RecipesContainer from './recipes/RecipesContainer'
import { withRouter } from 'react-router'
import './App.css'
import Routes from './routes'
import Navigation from './components/Navigation'

class App extends PureComponent {
  // constructor() {
  //   super()
  //   this.state = {
  //     recipes: recipes
  //   }
  // }
  // updateRecipe(_id, updates){
  //   // this.setState({
  //   //   recipes: this.state.recipes.map((recipe) => {
  //   //     if (recipe._id === _id) {
  //   //       return {...recipe, ...updates}
  //   //     }
  //   //     return recipe
  //   //   })
  //   // })
  // }

  render() {
    // const { recipes } = this.state
    return (
      <div>
        <Navigation />
        <Routes />
      </div>
    )
  }
}

export default withRouter(App)
