// Join discord.gg/CyberSec for support! //
// Discord - ash3r#1000 //

const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js')
keepAlive()

client.on('ready', async () => {


  console.clear();

  console.log(`${client.user.tag} - rich presence started!`
  )
  const r = new Discord.RichPresence()
    .setApplicationId('1194518654990168134')
    .setType('STREAMING')
    .setURL('https://twitch.tv/discord')
    .setState('𝓛𝓪')

    .setName('𝓛𝓪')
    .setDetails('.gg/chillzone')
    /*.setParty({
        max: 9999,
        current: 6789,
        id: Discord.getUUID(),
    })*/

    //.setStartTimestamp(Date.now())
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1194537430720725123/1194552542823194664/IMG_3921.jpg?ex=65b0c4bf&is=659e4fbf&hm=b97fa3aaefab8b20aa024ce0ac230c28bb54bb7c96ee3c6335d5eb70ad8c5411&')
    .setAssetsLargeText('Lariyah')
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1194537430720725123/1194553055648157737/verified-yes.gif?ex=65b0c53a&is=659e503a&hm=6505903592cba0332591d1bbd1f8d819a1b0e187f36a84870ba2a0a26b45ce18&')
    .setAssetsSmallText('Join Now!')
    .addButton('Chill Zone', 'https://discord.gg/chillzone')
    .addButton('Socialized', 'https://discord.gg/socialized')
  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" });
})

const token = 'MTEyNDk4NDg2ODQzNTE0ODg2MQ.G0TTkH._zisr4W_t1p4woO8Hn4XUlvKdRbGKK9xJkK8o8';
// paste the token in place of 'your_token_here'
client.login(token);