const { pet } = require(`../models/pets.js`)


function deletePet(id) {
    const index = pet.findIndex(pet => pet.id === id)
    pet.splice(index, 1)
}

module.exports = {

    deletePet
}