const { Telegraf } = require('telegraf');
const axios = require('axios');
const fetch = require('node-fetch');

const bot = new Telegraf('6296517228:AAHeeWF46jJfX_BrM16um8CoG30r-uH5oT8');
const apiUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
// const apiKey = '';
// bot.use((ctx) => {
//   ctx.reply('hello');
// });

bot.start((ctx) => {
  ctx.reply('Start');
});

bot.help((ctx) => {
  ctx.reply('type commands\n - /start\n - help');
});

bot.on('sticker', (ctx) => {
  ctx.reply('👍');
});
bot.hears('hello', (ctx) => {
  ctx.reply('Hello sir , how are you ');
});
bot.command('say', (ctx) => {
  msg = ctx.message.text;
  msgArray = msg.split('');
  console.log(msgArray);
  msgArray.shift();
  console.log(msgArray);
  newMsg = msgArray.join('');
  ctx.reply(newMsg);
});

bot.command('coinmarketcap', (ctx) => {
  url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
  axios.get(url).then((res) => {
    console.log(res.data.coinmarketcap);
    ctx.reply(res.data.coinmarketcap);
  });
});
bot.launch();
