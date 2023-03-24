const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/couzina";

mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    console.log("mongoDb connected successfully!");
  }).catch((err) => console.log(err));
const recipe = require("./Recipe");

module.exports = {
    
  db: mongoose.connection,

  getAllRecipes: () => {
    return recipe.find({});
  },

  updateRecipe: (id, data) => {
    return recipe.findOneAndUpdate({ _id: id }, { status: data });
  },

  deleteRecipe: (id) => {
    return recipe.findOneAndDelete({ _id: id });
  },

  createRecipe: (data) => {
    return recipe.create(data);
  },
};
