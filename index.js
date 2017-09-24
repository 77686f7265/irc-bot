var client = require('coffea')({
  host: 'irc.rizon.net',
  nick: 'kuzubot',
  channels: ['#sakurasou']
});

client.on('command', function (event) {
  switch (event.cmd) {
    case 'ping':
      event.reply('pong');
      break;
  }
});