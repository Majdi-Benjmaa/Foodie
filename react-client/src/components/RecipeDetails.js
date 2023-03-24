import React from 'react'

const RecipeDetails = ({ data }) => {
console.log(data);
  return (
    <div className="product-details">
      <div className="product-image">
        <img src={data.image} alt="imagee" />
      </div>
      <div className="product-info">
        <h1>{data.title}</h1>
        <p>{data.ingredients}</p>
        {/* <p>{data.nutrition}</p> */}
        <h2>{data.servings}</h2>
        <button onClick={()=>{}}>Add to Cart</button>
      </div>
    </div>
  );
}

export default RecipeDetails;