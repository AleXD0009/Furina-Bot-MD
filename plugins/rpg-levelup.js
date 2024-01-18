import { canLevelUp, xpRange } from '../lib/levelling.js';
import { levelup } from '../lib/canvas.js';

const handler = async (m, { conn }) => {
  const name = conn.getName(m.sender);
  const usertag = '@' + m.sender.split('@s.whatsapp.net')[0];
  const user = global.db.data.users[m.sender];
  if (!canLevelUp(user.level, user.exp, global.multiplier)) {
    const { min, xp, max } = xpRange(user.level, global.multiplier);
    const message = `
_𝐄𝐒𝐓𝐀𝐃𝐈𝐒𝐓𝐈𝐂𝐀𝐒:_ ${usertag}!

*𝐍𝐈𝐕𝐄𝐋:* ${user.level}
*𝐍𝐈𝐕𝐄𝐋:* ${user.descripcion}
*𝐑𝐀𝐍𝐆𝐎:* ${user.role}
*𝐏𝐔𝐍𝐓𝐎𝐒 𝐃𝐄 𝐄𝐗𝐏𝐄𝐑𝐈𝐄𝐍𝐂𝐈𝐀:* ${user.exp - min}/${xp}

*Para ascender de nivel necesitas obtener ${max - user.exp} puntos de experiencia más. Sigue interactuando con el Bot!.*`.trim();
    return conn.sendMessage(m.chat, {text: message, mentions: [m.sender]}, {quoted: m});
  }
  const before = user.level * 1;
  while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++;
  if (before !== user.level) {
    const levelUpMessage = `¡Felicidades, ${name}! subiste a nivel: ${user.level}`;
    const levelUpDetails = `
**

*Nivel anterior:* ${before}
*Nuevo nivel:* ${user.level}
*Rango actual:* ${user.role}

*continua usando comandos de rpg y interactua con el bot para seguir subiendo de nivel!.*`.trim();
    try {
      const levelUpImage = await levelup(levelUpMessage, user.level);
      conn.sendFile(m.chat, levelUpImage, 'levelup.jpg', levelUpDetails, m);
    } catch (e) {
      conn.sendMessage(m.chat, {text: levelUpDetails, mentions: [m.sender]}, {quoted: m});
    }
  }
};
handler.help = ['levelup'];
handler.tags = ['xp'];
handler.command = ['nivel', 'lvl', 'levelup', 'level'];
export default handler;
