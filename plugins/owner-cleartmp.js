import {tmpdir} from 'os';
import path, {join} from 'path';
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch,
} from 'fs';
const handler = async (m, {conn, usedPrefix: _p, __dirname, args}) => {
  conn.reply(m.chat, '*[ ✅ ] 𝒂𝒓𝒄𝒉𝒊𝒗𝒐𝒔 𝒅𝒆 𝒍𝒂 𝒄𝒂𝒓𝒑𝒆𝒕𝒂 𝑻𝑴𝑷 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒅𝒐𝒔 𝒄𝒐𝒏 𝒆𝒙𝒊𝒕𝒐*', m);

  const tmp = [tmpdir(), join(__dirname, '../tmp')];
  const filename = [];
  tmp.forEach((dirname) => readdirSync(dirname).forEach((file) => filename.push(join(dirname, file))));
  return filename.map((file) => {
    const stats = statSync(file);
    unlinkSync(file);
  });
};
handler.help = ['cleartmp'];
handler.tags = ['owner'];
handler.command = /^(cleartmp|cleartemp)$/i;
handler.rowner = true;
export default handler;
