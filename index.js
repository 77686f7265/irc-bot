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
    
    case 'restart':
    process.exit();
    break;
   }
});

client.on('message', function(message){
	var date = new Date();
	var formattedDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " +  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

	console.log(formattedDate + " : "+ message.message);
});