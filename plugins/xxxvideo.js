import fetch from 'node-fetch'

var handler = async (m, { conn, args, usedPrefix, command }) => {

if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '🎌 *Los comandos nsfw no estan permitidos*\n\nUtilice .enable modohorny para activar'
  
let res = await fetch('https://api.zahwazein.xyz/randomasupan/discord18?apikey=zenzkey_048b3b850d51')
let json = await res.json()
conn.sendFile(m.chat, json.result, null, `xd`, null, null, { viewOnce: false }, m)

}
handler.tags = ['nsfw']
handler.command = ['vporno', 'xxxvideo']
handler.help = ['vporno', 'xxxvideo']


export default handler
