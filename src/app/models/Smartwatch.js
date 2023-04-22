const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
const slug = require('mongoose-slug-updater');

const Smartwatch = new Schema(
    {
        name: { type: String, default: '' },
        cost: { type: String, default: '' },
        typeMachine: { type: String, default: '' },
        thinness: { type: String, default: '' },
        material: { type: String, default: '' },
        image: { type: String, default: '' },
        slug: { type: String, slug: 'name', unique: true },
        userObject: { type: String, default: '' },
        diameter: { type: String, default: '' },
        strapMaterial: { type: String, default: '' },
        waterResist: { type: String, default: '' },
        brand: { type: String, default: '' },
        company: { type: String, default: '' },
    },
    { timestamps: true },
);

// Add plugin
mongoose.plugin(slug);
Smartwatch.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('Smartwatch', Smartwatch);
