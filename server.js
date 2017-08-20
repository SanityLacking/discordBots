/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');
const botID = "348078888838234112"; // the userid of the bot
var ignoreIds = [botID];  // the array of all ids that the bot should ignore messages from.
var adminIds =["146027865153077249"];// array of users with admin access
var userIds = [""];


// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'MzQ4MDc4ODg4ODM4MjM0MTEy.DHhtVA.uwcCdIjHVWUAGCSph4GP6FEAYWo';

var msgStorage = require('./messages.json');
//var msgStorage = JSON.parse("messages.json");

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});
var count = 1;
// Create an event listener for messages
client.on('message', message => {
  if(ignoreIds.includes(message.author.id)){ // do not get stuck in a recursive loop.
    console.log("bot");
    return 0;
  }
  if(ignoreIds.includes(message.author.id)){ // do not get stuck in a recursive loop.
    console.log("bot");
    return 0;
  } 
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
  
  var regX = /(lewd)(s?).*(alert)(s?)/ig;
  if (regX.test(message) && count <= 2){
    count++;
    //console.log(message);
    message.channel.send("LEWD ALERT \n" + msgStorage.messages.lewd);
  }
});

// Log our bot in
client.login(token);