import similarity from 'similarity';
const threshold = 0.72;
const handler = (m) => m;
handler.before = async function(m) {
  const id = m.chat;
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0;
  this.tekateki = this.tekateki ? this.tekateki : {};
  if (!(id in this.tekateki)) return m.reply('𝑬𝒔𝒆 𝒂𝒄𝒆𝒓𝒕𝒊𝒋𝒐 𝒚𝒂 𝒉𝒂 𝒕𝒆𝒓𝒎𝒊𝒏𝒂𝒅𝒐!');
  if (m.quoted.id == this.tekateki[id][0].id) {
    const json = JSON.parse(JSON.stringify(this.tekateki[id][1]));
    if (m.text.toLowerCase() == json.response.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += this.tekateki[id][2];
      m.reply(`*Respuesta correcta!*\n+${this.tekateki[id][2]} Exp`);
      clearTimeout(this.tekateki[id][3]);
      delete this.tekateki[id];
    } else if (similarity(m.text.toLowerCase(), json.response.toLowerCase().trim()) >= threshold) m.reply(`𝑪𝒂𝒔𝒊 𝒍𝒐 𝒍𝒐𝒈𝒓𝒂𝒔!`);
    else m.reply('𝑹𝒆𝒔𝒑𝒖𝒆𝒔𝒕𝒂 𝒊𝒏𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒂!');
  }
  return !0;
};
handler.exp = 0;
export default handler;
