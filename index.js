const { addNewPet } = require("./controllers/createPet")
const { deletePet } = require("./controllers/deletePet")
const { readPets } = require("./controllers/readPets")
const { updatePet } = require("./controllers/updatePets")

addNewPet(5, 'Luna', 'Cat', 'Persian', 1, 'Eve White')
deletePet(2)
addNewPet(2,"Rinaldo", "dog", "pitbull", 5, "andreza")
updatePet(3, 'Bella', 'cat', "Poodle", 4, 'John Doe')
updatePet(1, "Joao", "leon", "pooch", 6, "julio")
deletePet(4)
addNewPet(4,"Victor","dog","siberian husky", 2, "esther")

console.log(readPets())