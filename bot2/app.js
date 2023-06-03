const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const bot = new Telegraf('6293237322:AAEetnBq0F9ItJB3cx5CyBavukwuuVJ5I38');

bot.start((ctx) => {
  ctx.reply('letsss goooo');
});

bot.command('alert', (ctx) => {
  //   ctx.reply('🚨  market Alert !!!!');
  ctx.telegram.sendMessage(ctx.chat.id, ' 📉  Alert market down 10%', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Earn Permission Gitcoin  bounties',
            url: 'https://bounties.gitcoin.co/explorer?network=mainnet&permission_type=approval&applicants=ALL&order_by=-web3_created',
          },
          {
            text: ' 📈 Trade Now',
            url: 'https://binance.com',
          },
        ],
        [
          {
            text: '📉  Check Your Market  !!!!',
            url: 'https://www.coingecko.com/',
          },
        ],
      ],
    },
  });
});

bot.launch();
