const { pet } = require(`../models/pets.js`)

function readPets () {
    return pet
}

module.exports = {
  readPets
}