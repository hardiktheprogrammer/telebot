const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

const bot = new Telegraf('6293237322:AAEetnBq0F9ItJB3cx5CyBavukwuuVJ5I38');

bot.start((ctx) => {
  ctx.reply('letsss goooo');
});

bot.command('alert', (ctx) => {
  ctx.reply('🚨  market Alert !!!!');
  ctx.telegram.sendContact(ctx.chat.id, {
    'phone Number': '+919030389190',
    first_name: 'Hardik sharma',
  });
});

bot.launch();
