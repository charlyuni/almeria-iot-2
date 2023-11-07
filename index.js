//const mongoose = require('mongoose')


var mqtt = require("mqtt");
//var client = mqtt.connect("mqtt://ec2-54-233-207-109.sa-east-1.compute.amazonaws.com");

 var Opciones = {
   host: "ec2-54-233-207-109.sa-east-1.compute.amazonaws.com",
   port: 1883,
   protocol: "mqtt",
   clientId: "YoCodigo1",
 };
 var client = mqtt.connect(Opciones);

function EventoConectar() {
  client.subscribe("hardwareme/#", function (err) {

  });
}

function EventoMensaje(topic, message) {
  if (topic == "ALSW/temp") {
    console.log("La Temperatura es " + message.toString());
  }
  console.log(topic + " - " + message.toString());
  // client.end()
}

client.on("connect", EventoConectar);
client.on("message", EventoMensaje);