import './App.css'
import { useState } from 'react'
/*
1. Create Components for Recipe and Selector
2. Send data into compoents to display them
3. Make Recipe selectors into a list of components to display all of them
*/



// Recipe Component


// Recipe Selector Component


function App() {

  const [recipes, setRecipes] = useState([{"name": "pasta", "instructions": "do the thing", "ingrediant": ["thing1", "thing2"]}])
  const [currentRecipe, setCurrentRecipe] = useState(0)
  
  return (
    <div className="container">
      <div className="sidebar">
        <h2>Recipes</h2>
        <ul>
          <li>food1</li>
          <li>food2</li>
          <li>food3</li>
        </ul>
        <button>Add New</button>
      </div>

      <div className="main">
        <h2>Instructions</h2>
        <textarea placeholder="Write instructions here..." />
      </div>

      <div className="ingredients">
        <h2>Ingredients</h2>
        <textarea placeholder="List ingredients..." />
      </div>

      <div className="footer">
        <button>Save</button>
      </div>

    </div>
  )
}



export default App