import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '𝐄𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐌𝐞𝐧𝐮🐶.',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: '𝐉𝐨𝐭𝐜𝐡𝐮𝐚 - 𝐁𝐨𝐭', body: 'BY als', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🐶');
    await conn.sendMessage(m.chat, { react: { text: '🐶', key: m.key } })
  let txt =`「 𝐂𝐨𝐬𝐚𝐬 𝐍𝐮𝐞𝐯𝐚𝐬 𝐃𝐞𝐥 𝐁𝐨𝐭 」
    
    Cosas nuevas sobre el bot:
    
    Comandos nuevos:
╭────────────────
│iaimagen
│play5
╰────────────────`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '𝐉𝐨𝐭𝐜𝐡𝐮𝐚 - 𝐁𝐨𝐭🐶', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.md, "sourceUrl": global.md}}}, {quoted: fkon});
 // m.react('🐶');
  } catch {
    conn.reply(m.chat, 'ha habido un error en enviar el menu.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(ComandosNuevos|nuevosComando|Nuevo|nuevo)$/i;
export default handler;
                                                                                                                                                                                                                                                                
