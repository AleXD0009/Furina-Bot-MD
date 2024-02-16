import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `𝑹𝒆𝒔𝒑𝒐𝒏𝒅𝒆 𝒂 𝒖𝒏𝒂 𝒊𝒎𝒂𝒈𝒆𝒏\n\n[ 🐶 ]𝑬𝒋𝒆𝒎𝒑𝒍𝒐: .smeme bot|uwu`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Error`
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    let stiker = await sticker(false, meme, global.packname, global.author)
    if (stiker) await conn.sendFile(m.chat, stiker, '', author, m, '', { asSticker: 1 })
}
handler.help = ['smeme <responder a una imagen + el texto>']
handler.tags = ['sticker']
handler.command = /^(smeme)$/i



export default handler
