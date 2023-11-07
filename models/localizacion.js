const {Schema, model} = require('mongoose');

const localizacionSchema = new Schema({

    latitud: {
        type: Number,
        required: true,
    },
    latitud: {
        type: longitud,
        required: true,
    },
}, 
{
    timestamps: true
})


module.exports = model('Localizacion', localizacionSchema) 