let handler = async (m, { conn }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `
> Informacion

𝑻𝒐𝒕𝒂𝒍 𝑷𝒍𝒖𝒈𝒊𝒏𝒔: ${totalf}`,m)
}

handler.help = ['totalplugins']
handler.tags = ['main']
handler.command = ['totalplugins']

export default handler 
