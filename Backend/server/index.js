const express = require('express');
// const axios = require('axios');

const cors =require('cors')
const {updateRecipe, createRecipe, deleteRecipe, getAllRecipes}  =  require('../mongoDb/index')

const app = express();
const PORT = 7000;

const bodyParser = require('body-parser')
app.use(cors())
app.use(express.static(__dirname + '../react-client/public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// create a recipe schema for MongoDB

app.get('/recipes', (req, res) => {
  getAllRecipes().then((data) => res.status(200).json(data))
  .catch((err) => res.status(500).json(err))
});

app.delete('/recipes/:id', (req, res) => {
  deleteRecipe(req.params.id).then((data) => res.status(200).json(data))
  .catch((err) => res.status(500).json(err))
});
 
app.post('/recipes', (req,res)=>{
  createRecipe(req.body).then((data) => res.status(200).json(data))
  .catch((err) => res.status(500).json(err))
});

app.put('/recipes/:id',(req, res)=>{
  updateRecipe(req.params.id,req.body).then((data) => res.status(200).json(data))
  .catch((err) => res.status(500).json(err))
})



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});