import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = '0dc5e93c';
  const APP_KEY = '65244ad857e24dd3979483dd333aba72';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("chicken");

  // this will run when our page render note: we can use componentDidMount() for this purpose
  useEffect(() => {
    getRecipes();
  }, [query] );

  //method to fetch recipes
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const searchRecipe = e => { // start searching for the recipe after the form has submitted
    e.preventDefault(); //prevent the refresh, which is a default character
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <form className="search-form" onSubmit={searchRecipe}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(item => (
        <Recipe 
          key={item.recipe.label} 
          label={item.recipe.label}
          image={item.recipe.image} 
          ingredients={item.recipe.ingredients}
        />
      ))} 
      </div>
    </div>
  )
}

export default App;
