const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../ayarlar.json')

module.exports = client => {
  var degisenOynuyor = [
    
    "Murat Eren",
    "V12 Bos Altyapi by võíd"
    
  ]
  
  setInterval(function() {
    var degisenOynuyor1 = degisenOynuyor[Math.floor(Math.random() * (degisenOynuyor.length))]
    client.user.setActivity(`${degisenOynuyor1}`);

}, 2 * 30000);
  
  client.user.setStatus("online"); //dnd, idle, online, offline
  
}