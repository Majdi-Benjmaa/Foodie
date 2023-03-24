import './App.css';
import Search from "./components/Search";
import RecipeDetails from './components/RecipeDetails'
import RecipeList from './components/RecipeList';
import { useEffect, useState } from 'react'
// import CartList from './components/CartList';
import Add from './components/Add'
import axios from 'axios'


const App = () => {
  const [menuView, setMenuView] = useState(false);
  const [view, setView] = useState("RecipeList");
  const [recipes, setRecipes] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [oneRecipe, setOneRecipe] = useState(null);
  const [cartArr, setCartArr] = useState([]);
  const [trigger,setTrigger]=useState(false);

  const trig=()=>{
    setTrigger(!trigger);
  }
  const handleCart=(x)=>{
    setCartArr([...cartArr,x])
  }

  useEffect(() => {
    axios.get("http://localhost:7000/recipes")
      .then(res => {
        setRecipes(res.data)
        setFiltered(res.data)
      })
      .catch(err => console.log(err))
  }, [trigger])

  const toggleMenu = () => {
    setMenuView(!menuView)
  }

  const switchView = (x) => {
    setView(x)
  }
console.log(recipes);
  return (
    <div className="App">
      <div className="nav">

        <span className="logo" onClick={() => {
          switchView("RecipeList")
          setFiltered(recipes)
        }

        }>Foodie</span>
        
        {view === "RecipeList" && <Search setFiltered={setFiltered} filtered={filtered} recipes={recipes}/>}

        {view === "RecipeList" && <span className="items" onClick={toggleMenu}>
          &#9660;
          CATEGORIES
          &#9660;
        </span>}
          
        { <span className="items" onClick={() => switchView("cart")}>
          🛒
          ADD
        </span> }

      </div>

      {menuView && <div className="menu">
        <span className='menu-item' onClick={() => setFiltered(recipes.filter(e => e.title.toLowerCase().includes("pizza") === true))}>pizza</span>
        <span className='menu-item' onClick={() => setFiltered(recipes.filter(e => e.title.toLowerCase().includes("salad") === true))}>salad</span>
        <span className='menu-item' onClick={() => setFiltered(recipes.filter(e => e.title.toLowerCase().includes("chicken") === true))}>chicken</span>
      </div>}

      {view === "RecipeList" && <RecipeList trig={trig} cartArr = {cartArr} handleCart={handleCart} setOneRecipe={setOneRecipe} recipes={filtered} setView={setView} />}
      {view === "cart" && <Add />}
      {view === "RecipeDetails" && <RecipeDetails data={oneRecipe}/>}
      {/* {view ==="addProduct" && data.length >0 &&  <addProduct change={switchView} fn={hand} />} */}

    </div>

  );
}
export default App;