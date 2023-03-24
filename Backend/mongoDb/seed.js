const { db } = require("./index.js");
const recipe = require("./Recipe");

const sampleData = require("../data.json");

const insertSampleRecipes = () => {
  recipe.create(sampleData)
    .then(() => {
      console.log("Database seeded successfully");
    })
    .catch((error) => {
      console.log("error seeding the database: ", error);
    })
    .finally(() => {
      db.close();
    });
};

insertSampleRecipes();