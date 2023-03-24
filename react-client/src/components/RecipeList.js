import axios from "axios";
import React, { useState } from "react";

const RecipeList = ({
  trig,
  cartArr,
  handleCart,
  recipes,
  setView,
  setOneRecipe,
}) => {
  const [input, setInput] = useState({});
  // const deleteOne = (id) => {
  //   axios
  //     .delete(`http://localhost:7000/${id}`)
  //     .then(({ data }) => {
  //       console.log(data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div>
      <div className="products-list">
        {recipes.map((e, i) => {
          console.log(e);
          return (
            <div key={i} className="product-card">
              <img
                onClick={(event) => {
                  setView("RecipeDetails");
                  setOneRecipe(e);
                }}
                src={`${e.image}`}
                alt="imagess"
              />
              <h2>{e.title}</h2>
              <p
                style={{
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                }}
              >
                {e.ingredients}
              </p>
              <p className="card-item-price"> Servings : {e.servings}</p>
              <p className="card-item-cat"> Ready in : {e.readyInMinutes} minutes</p>
              <div className="product-card-buttons">
                <button
                  onClick={() => {
                    axios
                      .put(`http://localhost:7000/recipes/${e._id}`, {
                        title: input.title,
                        price: Number(input.price),
                        summary: input.summary,
                        category: input.category,
                        sourceUrl: input.sourceUrl,
                      })
                      .then((resp) => trig())
                      .catch((err) => console.log(err, "from Recipe list"));
                  }}
                >
                  Update Recipe
                </button>
                <button
                  onClick={() => {
                    axios
                      .delete(`http://localhost:7000/recipes/${e._id}`)
                      .then((resp) => trig())
                      .catch((err) => console.log(err, "from recipe list"));
                  }}
                >
                  Delete Recipe
                </button>
                <button
                  onClick={() => {
                    handleCart({ name: e.name, price: e.price });
                  }}
                >
                  Add to Cart
                </button>

                <div>
                  {console.log(input)}

                  <input
                    onChange={(e) =>
                      setInput({ ...input, name: e.target.value })
                    }
                    type="text"
                    name="name"
                    placeholder="name"
                  />
                  <input
                    onChange={(e) =>
                      setInput({ ...input, price: e.target.value })
                    }
                    type="text"
                    name="price"
                    placeholder="price"
                  />
                  <input
                    onChange={(e) =>
                      setInput({ ...input, description: e.target.value })
                    }
                    type="text"
                    name="description"
                    placeholder="description"
                  />
                  <input
                    onChange={(e) =>
                      setInput({ ...input, category: e.target.value })
                    }
                    type="text"
                    name="category"
                    placeholder="category"
                  />
                  <input
                    onChange={(e) =>
                      setInput({ ...input, imageUrl: e.target.value })
                    }
                    type="text"
                    name="imageUrl"
                    placeholder="imageUrl"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeList;
