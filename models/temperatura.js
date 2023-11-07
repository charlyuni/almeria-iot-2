const {Schema, model} = require('mongoose');

const temperaturaSchema = new Schema({

    temperatura: {
        type: Number,
        required: true,
    },
    fecha: {
        type: Date,
        required: true,
    },
}, 
{
    timestamps: true
})


module.exports = model('Temperatura', temperaturaSchema) 