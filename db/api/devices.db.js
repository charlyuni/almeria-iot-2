const { db } = require("../firebase");


const setDevices= async (devices) => {
    await db.collection("devices").add({
        value: Number(devices),
        date: new Date()

    });

}

module.exports = { setDevices}