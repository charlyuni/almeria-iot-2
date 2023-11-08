const { db } = require("../firebase");

const setTemp = async (temp) => {

    await db.collection("temp").add({
        value: Number(temp),
        date: new Date()

    });

}

module.exports = {setTemp}