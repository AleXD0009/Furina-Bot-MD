const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `Hola, te invito a unirte a los grupos de Furina-Bot-MD

`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/AleXD0009`},
    'mimetype': `application/${document}`,
    'fileName': `🔹𝐅𝐮𝐫𝐢𝐧𝐚-𝐁𝐨𝐭-𝐌𝐃`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': '🔹𝐅𝐮𝐫𝐢𝐧𝐚-𝐁𝐨𝐭-𝐌𝐃',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': '🔹𝐅𝐮𝐫𝐢𝐧𝐚-𝐁𝐨𝐭-𝐌𝐃',
        'body': wm,
        'thumbnail': catalogo,
        'sourceUrl': 'md'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['grupos']
handler.tags = ['main'];
handler.command = ['linkgc', 'grupos', 'gruposjt'];
export default handler;
