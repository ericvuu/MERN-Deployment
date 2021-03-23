const PetController = require("../controllers/pet.controller");

// this are event listeners
module.exports = function (app) {
  app.get("/pets", PetController.getAllPets);
  app.post("/pets", PetController.createPet);
  app.get("/pets/:id", PetController.getPet);
  app.put("/pets/:id", PetController.updatePet);
  app.delete("/pets/:id", PetController.deletePet);
};
