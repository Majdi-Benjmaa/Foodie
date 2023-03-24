const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  servings: {
    type: Number,
    required: true
  },
  readyInMinutes: {
    type: Number,
    required: true
  },
  ingredients: [{
    name: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      required: true
    }
  }],
  instructions: [{
    number: {
      type: Number,
      required: true
    },
    step: {
      type: String,
      required: true
    }
  }],
  nutrition: {
    calories: {
      type: Number
      
    },
    carbs: {
      type: Number
      
    },
    protein: {
      type: Number,
      
    },
    fat: {
      type: Number,
      
    }
  }
});

// create a recipe model based on the schema
const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;