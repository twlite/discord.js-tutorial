require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client;

client.on("ready", () => {
    console.log("Bot is online!");
});

client.on("message", message => {
    if (message.author.bot) return;
    
    if (message.content === "!ping") {
        return message.channel.send("Pong!");
    }
});

client.login();