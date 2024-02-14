import fetch from 'node-fetch'
import uploader from '../lib/uploadImage.js'

var handler = async (m, { conn, text, command, usedPrefix }) => {

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/g.test(mime) && !/webp/g.test(mime)) {
let buffer = await q.download()

conn.sendPresenceUpdate('composing', m.chat)

let media = await (uploader)(buffer)
let json = await (await fetch(`https://aemt.me/bardimg?url=${media}&text=${text}`)).json()

conn.sendMessage(m.chat, { text: json.result }, { quoted: m })

} else return conn.reply(m.chat, `*𝑴𝒂𝒏𝒅𝒂 𝒖𝒏𝒂 𝒊𝒎𝒂𝒈𝒆𝒏 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒚 𝒆𝒍 𝒕𝒆𝒙𝒕𝒐 𝒂 𝒃𝒖𝒔𝒄𝒂𝒓*\n\n[🐶] 𝒆𝒋𝒆𝒎𝒑𝒍𝒐:, !bardimg dame informacion de lo que sale en la imagen`, m, estilo, )

}
handler.help = ['bardimg']
handler.tags = ['ia']
handler.command = /^(bardimg|bardimage)$/i


export default handler
