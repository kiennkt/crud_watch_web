const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Smartwatch = new Schema({
    name: { type: String, default: '' },
    cost: { type: String, default: '' },
    typeMachine: { type: String, default: '' },
    thinness: { type: String, default: '' },
    material: { type: String, default: '' },
    image: { type: String, default: ' ' },
    slug: { type: String, default: '' },
    userObject: { type: String, default: '' },
    diameter: { type: String, default: '' },
    strapMaterial: { type: String, default: '' },
    waterResist: { type: String, default: '' },
    brand: { type: String, default: '' },
    company: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Smartwatch', Smartwatch);
