const mqtt = require('mqtt')
require("dotenv").config();
var express = require("express");
const cors = require("cors");


var app = express();
const port = process.env.PORT || 3001;


const { setTemp } = require('./db/mongoose')

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
    client.subscribe('prueba', { qos: 0 }, function (err) {
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
    console.log(message.toString())
    // message is Buffer
    setTemp(message.toString())
    console.log('desConnected', topic, message.toString())

}) 

app.listen(port, () => {
    console.log(`Your app is ready and running on http://localhost:${port}`);
  });