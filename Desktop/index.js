const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 let port = process.env.PORT || 3000;
app.listen(port)
 
require('dotenv').config()
///////////////////////EMPIEZA/TU/BOT//////////////////////////////
const Discord = require("discord.js");
const client = new Discord.Client();

var nA = "En desarrollo"

function presence(){
  client.user.setPresence({
        status:"online",
        activity: {
            name: "Aprendiendo algo de programación",
            type: "PLAYING"
        }
    })
}
client.on("ready", () =>{
    console.log("Hola soy el pato");
    presence();
});


client.on("message", (message) => {

var Mensajes = ["Hoy va a ser un gran día", "A por todas!", "Hay que ir progresando", "A investigar", "Es hora de descansar", "A aprender javascript!!"];
var aleatorio = Math.floor(Math.random()*(Mensajes.length));

   if(message.content.startsWith("Time")) {
        message.channel.send(nA);
    }
   if(message.content.startsWith("!")) {
        message.channel.send("Quack");
    }
   if(message.content.startsWith("patoo")) {
        message.channel.send(Mensajes[aleatorio]);
    }
   if(message.content.startsWith("Buenas")) {
        message.channel.send("Bienvenido al chat");
    }
   if(message.content.startsWith("holaa")) {
        message.channel.send("Buenas compañero");
    }
   if(message.content.startsWith("JS")){
        const img = new Discord.MessageAttachment('https://d8285fmxt3duy.cloudfront.net/public/articulos/img/java-script1.jpg')
        message.channel.send(img);
         message.channel.send("Vamos a practicar");
    }
});

client.login("ODI4MzE5MTYxMTY3NTExNTky.YGn2VQ.jb1yUPB40t44nRWBlXgmniAmeWc");