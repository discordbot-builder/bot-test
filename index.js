const { Client } = require('discord.js');
const { token } = require('./settings');
const express = require('express')
const app = express()
const client = new Client();

const PORT = process.env.PORT || 3000;

client.on('ready', () => console.log('Ready!'));

client.on('message', (msg) => {
    if (msg.author.bot) return;

    if (msg.content.startsWith('!ping')) {
        msg.channel.send('!gnip');
    }
});

client.login(token);

app.get('/', function (req, res) {
  res.send('')
})

app.listen(PORT)