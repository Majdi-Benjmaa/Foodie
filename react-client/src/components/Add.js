import React, { useState } from 'react';
const Add = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [readyInMinutes, setReadyInMinutes] = useState('');
  const [servings, setServings] = useState('');
  const [ingredients, setIngredients] = useState([{ name: '', amount: '', unit: '' }]);
  const [instructions, setInstructions] = useState([{ number: 1, step: '' }]);
  
  const handleTitleChange = event => {
    setTitle(event.target.value);
  };
  const handleImageChange = event => {
    setImage(event.target.value);
  };
  const handleReadyInMinutesChange = event => {
    setReadyInMinutes(event.target.value);
  };
  const handleServingsChange = event => {
    setServings(event.target.value);
  };
  const handleIngredientNameChange = (event, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index].name = event.target.value;
    setIngredients(newIngredients);
  };
  const handleIngredientAmountChange = (event, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index].amount = event.target.value;
    setIngredients(newIngredients);
  };
  const handleIngredientUnitChange = (event, index) => {
    const newIngredients = [...ingredients];
    newIngredients[index].unit = event.target.value;
    setIngredients(newIngredients);
  };
  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: '', amount: '', unit: '' }]);
  };
  const handleRemoveIngredient = index => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };
  const handleInstructionStepChange = (event, index) => {
    const newInstructions = [...instructions];
    newInstructions[index].step = event.target.value;
    setInstructions(newInstructions);
  };
  const handleAddInstruction = () => {
    const newNumber = instructions[instructions.length - 1].number + 1;
    setInstructions([...instructions, { number: newNumber, step: '' }]);
  };
  const handleRemoveInstruction = index => {
    const newInstructions = [...instructions];
    newInstructions.splice(index, 1);
    setInstructions(newInstructions);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({
      title,
      image,
      readyInMinutes,
      servings,
      ingredients,
      instructions
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={handleImageChange}
        />
      </div>
      <div>
        <label htmlFor="readyInMinutes">Ready in Minutes:</label>
        <input
          type="number"
          id="readyInMinutes"
          value={readyInMinutes}
          onChange={handleReadyInMinutesChange}
        />
      </div>
      <div>
        <label htmlFor="servings">Servings:</label>
        <input
          type="number"
          id="servings"
          value={servings}
          onChange={handleServingsChange}
        />
      </div>

<div>
        <label>Ingredients:</label>
        {ingredients.map((ingredient, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Ingredient name"
              value={ingredient.name}
              onChange={event => handleIngredientNameChange(event, index)}
            />
            <input
              type="text"
              placeholder="Amount"
              value={ingredient.amount}
              onChange={event => handleIngredientAmountChange(event, index)}
            />
            <input
              type="text"
              placeholder="Unit"
              value={ingredient.unit}
              onChange={event => handleIngredientUnitChange(event, index)}
            />
            <button type="button" onClick={() => handleRemoveIngredient(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddIngredient}>
          Add Ingredient
        </button>
      </div>
      <div>
        <label>Instructions:</label>
        {instructions.map((instruction, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder={`Step ${instruction.number}`}
              value={instruction.step}
              onChange={event => handleInstructionStepChange(event, index)}
            />
            <button type="button" onClick={() => handleRemoveInstruction(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddInstruction}>
          Add Step
        </button>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Add;