const Discord = require("Discord.js");

var bot = new Discord.client();

bot.on("ready" , function() {
    bot.user.setGame("Sebastian C , !The Evil Within");
    console.log("le bot a bien ete connecte");
});

bot.login("NDU1ODE0MjM4MjU1MTg1OTUx.DkOCkQ.oaLCaZ7lAHRbD8qX75Toi7CCF8Y");
