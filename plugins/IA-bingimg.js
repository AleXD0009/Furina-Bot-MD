import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
    if (!text) throw '*ɪɴɢʀᴇꜱᴀ ᴜɴ ᴛᴇxᴛᴏ ᴅᴇ ʟᴀ ɪᴍᴀɢᴇɴ Qᴜᴇ Qᴜɪᴇʀᴇꜱ* \n\n[🐶] ejemplo: bingimg mono en el espacio'
    let msg = encodeURIComponent(text)
    let res = await fetch(`https://aemt.me/bingimg?text=${msg}`)
    let data = await res.json()
    console.log(data)
    let buffer = data.result
    conn.sendFile(m.chat, buffer, 'image.png', `${text}`, m)
}

handler.help = ['bingimg <query>']
handler.tags = ['ia']
handler.command = /^bingimg$/i

export default handler