
import "./categories.scss"

function App() {
  const categorie=[
    {
      title: "Hats"
    },
    {
      title: "Jackets"
    },
    {
      title: "Sneakers"
    },
    {
      title: "Womens"
    },
    {
      title: "Mens"
    }
  ]
  return (
    <div className="App">
      <div className='categories'>
     {categorie.map((categor)=>(
        <div className='category-container'>
<div className='category-body'>
  <h2>{categor.title}</h2>
  <p>Shop Now</p>
</div>
        </div>

      ))} 
        
        
        </div>
      </div>
    
  );
}

export default App;
