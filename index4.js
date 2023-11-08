const mqtt = require('mqtt')
require("dotenv").config();
var express = require("express");
const cors = require("cors");
const { setTemp } = require('./db/api/temp.db');
const { setLat, setLong } = require('./db/api/latLong.db');
const { setPower } = require('./db/api/power.db');


var app = express();
const port = process.env.PORT || 3001;



const url = 'ws://34.41.52.159:8083/mqtt'

const options = {
    // Clean session
    clean: true,
    connectTimeout: 4000,
    // Authentication
    clientId: 'emqx_MzAwOD3422',
}

const client = mqtt.connect(url, options)

client.on('connect', () => {
    console.log('Connected')

    // Subscribe to a topic
    client.subscribe('data/#', { qos: 0 }, function (err) {
        if (!err) {            // Publish a message to a topic
            console.log('ok conec')
        } else console.log(err)
    })
    client.publish('salida', "recibimos2", error => {
        console.log(error || 'ensaje enviado')
    })
})



// Receive messages
client.on('message', (topic, message) => {
    const setTopic = topic.split('/').pop()
    console.log(setTopic)
    if (setTopic === 'temp')
        setTemp(message.toString())
    else if (setTopic === 'lat')
        setLat(message.toString())
    else if (setTopic === 'long')
        setLong(message.toString())
    else if (setTopic === 'power')
        setPower(message.toString())


    // message is Buffer
    console.log('dato', topic, message.toString())

})

app.listen(port, () => {
    console.log(`Your app is ready and running on http://localhost:${port}`);
});