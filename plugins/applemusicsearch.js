import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) {
    throw 'Ingresa el nombre de una cancion\nejemplo: .applemusicsearch 8 - YSY A - NO NEGOCIO CON MI ALMA (PROD. ONIRIA)';
  }

  try {
    const apiUrl = `${apikasu}/api/search/applemusic?text=${encodeURIComponent(text)}&apikey=${apikeykasu}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`𝑬𝒓𝒓𝒐𝒓 𝒂𝒍 𝒃𝒖𝒔𝒄𝒂𝒓 𝒍𝒂 𝒄𝒂𝒏𝒄𝒊𝒐𝒏 𝒆𝒏 𝒂𝒑𝒑𝒍𝒆 𝒎𝒖𝒔𝒊𝒄`);
    }

    const json = await response.json();


    const songInfo =`
*𝑨 𝑷 𝑷 𝑳 𝑬 𝑴 𝑼 𝑺 𝑰 𝑪*
*Nombre:* ${json.result.name}\n
*Artista:* ${json.result.artist}\n
*Álbum:* ${json.result.album}\n
*Fecha de lanzamiento:* ${json.result.release_date}\n
*Precio:* ${json.result.price}\n
*Duración:* ${json.result.length}\n
*Género:* ${json.result.genre}\n
*Enlace:* ${json.result.url}`

    if (json.result.thumbnail) {
      await conn.sendFile(m.chat, json.result.thumbnail, 'thumbnail.jpg', songInfo, m);
    } else {
      m.reply(songInfo);
    }

  } catch (error) {
    console.error(error);
    throw `
> sin respuesta
ᴏᴄᴜʀʀɪᴏ ᴜɴ ᴇʀʀᴏʀ ᴀʟ ᴘʀᴏᴄᴇꜱᴀʀ ʟᴀ ꜱᴏʟɪᴄɪᴛᴜᴅ: ${error.message}`;
  }
};

handler.help = ['applemusicsearch'];
handler.tags = ['search'];
handler.command = /^(applemusicsearch)$/i;

export default handler;
