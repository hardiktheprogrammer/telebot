const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const bot = new Telegraf('6293237322:AAEetnBq0F9ItJB3cx5CyBavukwuuVJ5I38');

bot.start((ctx) => {
  ctx.reply('letsss goooo');
});

bot.command('alert', (ctx) => {
  //   ctx.reply('🚨  market Alert !!!!');
  ctx.telegram.sendMessage(ctx.chat.id, ' <code>twitter  </code> 📉  Alert market down 10%', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'click me',
            url: 'https://coinmarketcap.com',
          },
          {
            text: ' 📈 Trade Now',
            url: 'https://binance.com',
          },
        ],
      ],
    },
  });
});

bot.launch();
