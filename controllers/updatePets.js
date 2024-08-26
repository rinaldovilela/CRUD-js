const { pet } = require(`../models/pets`)

function updatePet(id, name, type, breed, age, owner) {
    const index = pet.findIndex (pet => pet.id === id)
    pet[index] = {
        id,
        name,
        type,
        breed,
        age,
        owner
    }
}

module.exports = {
    updatePet
}