const { pet } = require('../models/pets.js');

function addNewPet(id, name, type, breed, age, owner) {
    const newPet = {
        id,
        name,
        type,
        breed,
        age,
        owner
    };

    pet.push(newPet);
}

module.exports = {
    addNewPet
};