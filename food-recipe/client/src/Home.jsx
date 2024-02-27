import { useState,useEffect,useRef} from 'react'
import './Home.css'
import axios from 'axios';

function Home() {
  const [ingredientList,updateIngredientList]=useState([])
  const [loading,setLoading]=useState(false)
  const inputRef=useRef(null);

  const API_KEY="006d583e625f509b5017762635de0ded";
  const APP_ID ="1580fc4d";

  const search = event => {
    event.preventDefault()
    searchForRecipe(inputRef.current.value)
    
    inputRef.current.value=""
  }

  const searchForRecipe=async (query)=>{
    setLoading(true)
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`
    const response = await axios.get(url).then(res => {
      updateIngredientList(res.data.hits)
    }).catch(err => console.log(err))
    setLoading(false)
  }

console.log(loading)
  useEffect(()=>{
    searchForRecipe('chicken')
  },[]);
  return (
    
    <div className="App">
      <header className="App-header">
        <div className='InputWrapper'>
            <form onSubmit={event => search(event)}>
                <input ref={inputRef} placeholder='Search For Recipe' />
                <button className='but' type='submit'>Search</button>
            </form>
          
        </div>
        <div className='load'>
        {loading ? <p>Loading.....</p> : <></>}
        </div>
        
        <div className="Wrapper">
        
          {ingredientList && ingredientList.map(item=>{
            return (
              <div key={item.recipe.labe} className="Ingredient">
               <div className='Recepie-name'>
               <span>{item.recipe.label}</span>
               </div>
            
              <img src={item.recipe.image}/>
              <div className='Steps'>
               
              {item && item.recipe.ingredientLines.map(step=>{
                return <ul className='list'><li>{step}</li></ul> 
              })}

              </div>
            </div>

            )
          })}
        </div>
      </header>
    </div>
    
  )
}

export default Home