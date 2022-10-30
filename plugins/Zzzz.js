// JANGAN TERLALU TOLOL ANAK MUDA

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `Hello kak ${ye} Lagi Nyari Sc Ya? 

Sc By: Hyzerr
Recode By: krizyn
Recode By: IyanDev

Script:
• Recode Krizyn: https://github.com/KrizynOfc/ForynFour-MDV1
• Recode IyanDev: Private

await conn.sendBut(m.chat, esce, '📮 DONT FORGET TO FOLLOW MY ACCOUNT', 'Thanks', '.menu', m) 
}
handler.help = ['sc', 'source code']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
