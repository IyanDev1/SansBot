let fetch = require('node-fetch')
let handler = async (m, { text }) => {
m.reply('=> global.DATABASE.data.users[m.quoted.sender].limit = 100')

}
handler.help = ['cheatlimit']
handler.tags = ['premium']
handler.command = /^cheatlimit$/i
handler.premium = true

module.exports = handler
