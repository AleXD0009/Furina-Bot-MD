import fetch from 'node-fetch';
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
const handler = async (m, {args, usedPrefix, command}) => {
  if (!args[0]) throw `Ingresa un enlace de github.\nEjemplo: _${usedPrefix + command} https://github.com/AleXD0009/Jotchua-mini_`;
  if (!regex.test(args[0])) throw '[ ❌ ] El enlace que proporcionó es incorrecto.*';
  let [_, user, repo] = args[0].match(regex) || [];
  repo = repo.replace(/.git$/, '');
  const url = `https://api.github.com/repos/${user}/${repo}/zipball`;
  const filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1];
  m.reply(`*[ ⏳ ] Se esta enviando el archivo, espera*\n\n*[ ⚠ ] si no se  envia puede ser porque  supera el limite de tamaño.*`);
  conn.sendFile(m.chat, url, filename, null, m);
};
handler.help = ['gitclone']
handler.tags = ['downloader']
handler.command = /gitclone/i;
export default handler;
