const { db } = require("../firebase");


const setPower= async (power) => {
    await db.collection("power").add({
        value: Number(power),
        date: new Date()

    });

}

module.exports = { setPower}