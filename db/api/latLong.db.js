const { db } = require("../firebase");

const setLat= async (lat) => {

    await db.collection("lat").add({
        value: Number(lat),
        date: new Date()

    });

}

const setLong= async (long) => {

    await db.collection("long").add({
        value: Number(long),
        date: new Date()

    });

}

module.exports = {setLat, setLong}