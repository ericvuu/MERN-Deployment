const { response } = require("express");
const { Pet } = require("../models/pet.model");

module.exports.createPet = (request, response) => {

  console.log("create method executed");

  Pet.create(
    request.body
  )
    .then((pet) => response.json(pet))
    .catch((err) => response.status(400).json(err));
};

module.exports.getAllPets = (request, response) => {
  console.log("get all pets method executed");

  Pet.find()
    .then((pets) => response.json(pets))
    .catch((err) => response.status(400).json(err));
};

module.exports.getPet = (request, response) => {
  console.log("get pet method executed");

  Pet.findOne({ _id: request.params.id })
    .then((author) => response.json(author))
    .catch((err) => response.status(400).json(err));
};

module.exports.updatePet = (request, response) => {
  console.log("update pet method executed");

  Pet.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: [true, "{PATH} is required"],
  })
    .then((updatedAuthor) => response.json(updatedAuthor))
    .catch((err) => response.status(400).json(err));
};

module.exports.deletePet = (request, response) => {
  console.log("delete pet method executed");

  Pet.findOneAndDelete({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.status(400).json(err));
};
