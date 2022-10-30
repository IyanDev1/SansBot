let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (args[1] == "linkpoi") {
	let poi = await(await fetch(`https://linkpoi.ga/api.php?url=${args[0]}`)).json()
	m.reply(pros).then(_=> conn.reply(m.chat, `${tesk}${poi.shorturl.replace('\/','/')}`,m))
}
handler.help = ['linkpoi'].map(v => v + ' <url>')
handler.tags = ['shortlink']
handler.command = /^linkpoi$/i

module.exports = handler
