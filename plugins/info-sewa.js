let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '10'
let ss = '15'
let sp = '20'
let sv = '30'
//premium
let ph = '5'
let pn = '10'
let pp = '15'
let pv = '20'
let ppm = '30'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Normal :*5k/grup (1 minggu)_
┊⫹⫺ *Vip :*10k/grup (1 bulan)_                                                      
┊⫹⫺ *Gold Card :*15k/2 grup (Unlimited)_
╰═══┅═══━

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Normal :*5k (1 minggu)_
┊⫹⫺ *Vip :*10k (1 bulan)_                                               
┊⫹⫺ *Gold Card :*15k (Unlimited)_
╰═══┅═══━

╭━━━━「 *DEVELOPER* 」
┊⫹⫺ *Jadi Partner: 10k*
┊⫹⫺ *Jadi Developer: 15k*
┊⫹⫺ *Jadi Admin ( Moderator ): 25k*
╰═══┅═══━

📮 Note: Mumpung Ada Bonus, Jadi Sewa 1 Bulan/ Permanent Dapat Bonus Premium:)

📌 *KEBIJAKAN :*
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL`
const sections = [
   {
	title: ` SEWA ✦-------`,
	rows: [
	    {title: "💰 HEMAT", rowId: '.orsewa *Paket:* HEMAT • Sewa', description: 'PRICE : ' + sh + 'k (1 minggu)' },
	    {title: "💰 NORMAL", rowId: '.orsewa *Paket:* NORMAL • Sewa', description: 'PRICE : ' + sn + 'k (1 bulan)' },
	{title: "💰 STANDAR", rowId: '.orsewa *Paket:* STANDAR • Sewa', description: 'PRICE : ' + ss + 'k (2 bulan)' },
	{title: "💰 PRO", rowId: '.orsewa *Paket:* PRO • Sewa', description: 'PRICE : ' + sp + 'k (4 bulan)' },
	{title: "💰 VIP", rowId: '.orsewa *Paket:* VIP • Sewa', description: 'PRICE : ' + sv + 'k (UNLIMITED)' },
	]
    }, {
    title: ` PREMIUM ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.orsewa *Paket:* HEMAT • Premium', description: 'PRICE : ' + ph + 'k (1 minggu)' },
	    {title: "🔖 NORMAL", rowId: '.orsewa *Paket:* NORMAL • Premium', description: 'PRICE : ' + pn + 'k (1 bulan)' },
	{title: "🔖 PRO", rowId: '.orsewa *Paket:* PRO • Premium', description: 'PRICE : ' + pp + 'k (4 bulan)' },
	{title: "🔖 VIP", rowId: '.orsewa *Paket:* VIP • Premium', description: 'PRICE : ' + pv + 'k (8 bulan)' },
	{title: "🔖 VVIP", rowId: '.orsewa *Paket:* PERMANENT • Premium', description: 'PRICE : ' + ppm + 'k (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: 'LIST SEWA OR RENT',
  footer: info,
  title: '',
  buttonText: "Click Here",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m })
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa(bot)?)$/i

module.exports = handler
