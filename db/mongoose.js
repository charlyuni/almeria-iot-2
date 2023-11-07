const MONGO_DB_URI = 'mongodb+srv://almeriaiot:almeriaiot@almeria-iot.mharzkm.mongodb.net/?retryWrites=true&w=majority'
const MONGO_DB_NAME = process.env.MONGO_DB_NAME
const mongoose = require('mongoose')


mongoose.connect(MONGO_DB_URI).then(() => {
    console.log('Conectado a la base de datos')
}).catch((err) => {
    console.log('Error al conectar a la base de datos', err)
})


const Temp = require('../models/temperatura')
const Localizacion = require('../models/localizacion')


const findTemp = async () => {
    const tempDB = await Temp.find().then((res) => {
        console.log(res)
        return res
    }).catch((err) => {
        console.log('err', err)
    })
    return tempDB
}

const setLocalizacion = async (localizacion) => {

    const newLocalizacion = new Localizacion({
        latitud: localizacion.latitud,
        longitud: localizacion.longitud,
    });
    try {
        await Temp.create(newLocalizacion);
    }
    catch {
       console.log('error formato')
    }
}

const setTemp = async (temp) => {

    const newTemp = new Temp({
        temperatura: temp,
        fecha: new Date(),
    });
    try {
        await Temp.create(newTemp);
    }
    catch {
       console.log('error formato')
    }
}

module.exports = { findTemp, setTemp , setLocalizacion}