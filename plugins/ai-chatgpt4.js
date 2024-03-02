import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) {
    throw 'Ingresa un texto para hablar  con Chatgpt4.\nEjemplo: chatgpt4 haz una historia donde jotchua sea millonario ';
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const apiUrl = `${apikasu}/api/tools/chatgpt-4?text=${encodeURIComponent(text)}&apikey=${apikeykasu}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.result) {
      m.reply(`
> 𝑪 𝑯 𝑨 𝑻 𝑮𝑷𝑻 4

${data.result}`);
    } else {
      throw `
> Sin respuesta

No se pudo obtener una respuesta de la API.`;
    }
  } catch (error) {
    throw `
> Sin respuesta

Ocurrió un error: ${error}`;
  }
};

handler.help = ['chatgpt4'];
handler.tags = ['ia'];
handler.command = /^chatgpt4$/i;

export default handler;
