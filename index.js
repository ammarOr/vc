///By IC丶SNOW
///By IC丶SNOW
const express = require("express");
const app = express();
app.listen(() => console.log("Server Started    S  N  O  W "));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const { Client } = require('discord.js-selfbot-v13');
const client = new Client(); // All partials are loaded automatically
///By IC丶SNOW
client.on('ready', async () => {
  console.log(`${client.user.username} is ready!                        Fatures: 
1- Streaming Added
2- Joined Voice Channel
3- Without Offline 24/7
Dont Miss Credits To 'Snow.#4004`);
})
const { joinVoiceChannel } = require('@discordjs/voice');
client.on('ready', () => {
///By IC丶SNOW 
  client.user.setActivity("Streaming By Snow", { type: "STREAMING", url: "https://twitch.tv/omx_vn" })
  setInterval(async () => {
    client.channels.fetch("948476590088659009")
      .then((channel) => {
        const VoiceConnection = joinVoiceChannel({
          channelId: channel.id,
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator
        });
      }).catch((error) => { return; });
  }, 1000)
});
client.login(process.env.token);
///By IC丶SNOW
