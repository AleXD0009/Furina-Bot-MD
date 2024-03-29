import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {bestFormat, getUrlDl} from '../lib/y2dl.js';
const handler = async (m, {conn, args, usedPrefix, command}) => {
  if (!args[0]) throw '[📚] 𝑼𝒔𝒐 𝒊𝒏𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒐 𝒅𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐, 𝒊𝒏𝒈𝒓𝒆𝒔𝒆 𝒖𝒏 𝒆𝒏𝒍𝒂𝒄𝒆 / 𝒍𝒊𝒏𝒌 𝒅𝒆 𝒀𝒐𝒖𝑻𝒖𝒃𝒆.';
  let enviando;
  if (enviando) return  
      enviando = true    
  let youtubeLink = '';
  if (args[0].includes('you')) {
    youtubeLink = args[0];
  } else {
    const index = parseInt(args[0]) - 1;
    if (index >= 0) {
      if (Array.isArray(global.videoList) && global.videoList.length > 0) {
        const matchingItem = global.videoList.find((item) => item.from === m.sender);
        if (matchingItem) {
          if (index < matchingItem.urls.length) {
            youtubeLink = matchingItem.urls[index];
          } else {
            enviando = false  
            throw `𝑵𝒐 𝒔𝒆 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒐 𝒖𝒏 𝒆𝒏𝒍𝒂𝒄𝒆 𝒑𝒂𝒓𝒂 𝒆𝒔𝒆 𝒏𝒖𝒎𝒆𝒓𝒐, 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒊𝒏𝒈𝒓𝒆𝒔𝒆 𝒖𝒏 𝒏𝒖𝒎𝒆𝒓𝒐 𝒆𝒏𝒕𝒓𝒆 𝒆𝒍 1 𝒚 𝒆𝒍 ${matchingItem.urls.length}`;
          }
        } else {
          enviando = false  
          throw `𝑷𝒂𝒓𝒂 𝒑𝒐𝒅𝒆𝒓 𝒉𝒂𝒄𝒆𝒓 𝒖𝒔𝒐 𝒅𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒅𝒆 𝒆𝒔𝒕𝒂 𝒇𝒐𝒓𝒎𝒂 (${usedPrefix + command} <numero>), 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒓𝒆𝒂𝒍𝒊𝒛𝒂 𝒍𝒂 𝒃𝒖𝒔𝒒𝒖𝒆𝒅𝒂 𝒅𝒆 𝒗𝒊𝒅𝒆𝒐𝒔 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 ${usedPrefix}𝒑𝒍𝒂𝒚𝒍𝒊𝒔𝒕 <texto>*`;
        }
      } else {
        enviando = false  
        throw `𝑷𝒂𝒓𝒂 𝒑𝒐𝒅𝒆𝒓 𝒉𝒂𝒄𝒆𝒓 𝒖𝒔𝒐 𝒅𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒅𝒆 𝒆𝒔𝒕𝒂 𝒇𝒐𝒓𝒎𝒂 (${usedPrefix + command} <numero>), por favor realiza la busqueda de videos con el comando ${usedPrefix}𝒑𝒍𝒂𝒚𝒍𝒊𝒔𝒕 <texto>*`;
      }
    }
  }
  const { key } = await m.reply(`𝒔𝒆 𝒆𝒔𝒕𝒂 𝒑𝒓𝒐𝒄𝒆𝒔𝒂𝒏𝒅𝒐 𝒕𝒖 𝒗𝒊𝒅𝒆𝒐\n\n𝒔𝒊 𝒔𝒖 𝒗𝒊𝒅𝒆𝒐 𝒏𝒐 𝒆𝒔 𝒆𝒏𝒗𝒊𝒂𝒅𝒐 𝒑𝒓𝒖𝒆𝒃𝒆 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 #playdoc ᴏ #play2.2 ᴏ #ytmp4doc `);
  try {
    const formats = await bestFormat(youtubeLink, 'video');
    const buff = await getBuffer(formats.url);
    const yt_1 = await youtubedl(youtubeLink).catch(async (_) => await youtubedlv2(youtubeLink));
    const ttl_1 = `${yt_1?.title ? yt_1.title : 'Tu_video_descargado'}`;
    const fileSizeInBytes = buff.byteLength;
    const fileSizeInKB = fileSizeInBytes / 1024;
    const fileSizeInMB = fileSizeInKB / 1024;
    const roundedFileSizeInMB = fileSizeInMB.toFixed(2);
   if (fileSizeInMB > 100) {
    await conn.sendMessage(m.chat, {document: buff, caption: `*▢ Titulo:* ${ttl_1}\n*▢ Peso Del Video:* ${roundedFileSizeInMB} MB`, fileName: ttl_1 + '.mp4', mimetype: 'video/mp4'}, {quoted: m});
    await conn.sendMessage(m.chat, {text: `𝑽𝒊𝒅𝒆𝒐 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒅𝒐 𝒚 𝒆𝒏𝒗𝒊𝒂𝒅𝒐 𝒆𝒙𝒊𝒕𝒐𝒔𝒂𝒎𝒆𝒏𝒕𝒆.*\n\n𝑺𝒆 𝒆𝒏𝒗í𝒐 𝒆𝒏 𝒇𝒐𝒓𝒎𝒂𝒕𝒐 𝒅𝒆 𝒅𝒐𝒄𝒖𝒆𝒎𝒏𝒕𝒐 𝒅𝒆𝒃𝒊𝒅𝒐 𝒂 𝒒𝒖𝒆 𝒆𝒍 𝒗𝒊𝒅𝒆𝒐 𝒑𝒆𝒔𝒂 ${roundedFileSizeInMB} 𝑴𝑩 𝒚 𝒔𝒖𝒑𝒆𝒓𝒂 𝒆𝒍 𝒍𝒊𝒎𝒊𝒕𝒆 𝒆𝒔𝒕𝒂𝒃𝒍𝒆𝒄𝒊𝒅𝒐 𝒑𝒐𝒓 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑.*\n𝑻𝒊𝒕𝒖𝒍𝒐: ${ttl_1}`, edit: key}, {quoted: m});
    enviando = false
   } else {
    await conn.sendMessage(m.chat, {video: buff, caption: `📑 𝑻𝒊𝒕𝒖𝒍𝒐: ${ttl_1}\n🗂 𝑷𝒆𝒔𝒐 𝑫𝒆𝒍 𝑽𝒊𝒅𝒆𝒐: ${roundedFileSizeInMB} 𝑴𝑩`, fileName: ttl_1 + '.mp4', mimetype: 'video/mp4'}, {quoted: m});
    await conn.sendMessage(m.chat, {text: `*[✅] 𝑽𝒊𝒅𝒆𝒐 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒅𝒐 𝒆𝒙𝒊𝒕𝒐𝒔𝒂𝒎𝒆𝒏𝒕𝒆.*`, edit: key}, {quoted: m});
    enviando = false   
   }
 } catch (ee) {
    console.log(ee)
  try {
    const qu = args[1] || '360';
    const q = qu + 'p';
    const v = youtubeLink;
    const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
    const dl_url = yt.video[q].download();
    const ttl = yt.title;
    const size = yt.video[q].fileSizeH;
    await conn.sendMessage(m.chat, {video: {url: dl_url}, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `📑 𝑻𝒊𝒕𝒖𝒍𝒐: ${ttl}\n🗂 𝑷𝒆𝒔𝒐 𝑫𝒆𝒍 𝑽𝒊𝒅𝒆𝒐: ${size}`, thumbnail: await fetch(yt.thumbnail)}, {quoted: m});
    await conn.sendMessage(m.chat, {text: '*[✅] 𝑽𝒊𝒅𝒆𝒐 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒅𝒐 𝒆𝒙𝒊𝒕𝒐𝒔𝒂𝒎𝒆𝒏𝒕𝒆.*', edit: key}, {quoted: m});
    enviando = false
  } catch (ee2) {
    console.log(ee2)
    try {
      const mediaa = await ytMp4(youtubeLink);
      await conn.sendMessage(m.chat, {video: {url: mediaa.result}, fileName: `error.mp4`, caption: `_𝑱𝒐𝒕𝒄𝒉𝒖𝒂-𝑩𝒐𝒕-𝑴𝒊𝒏𝒊_`, thumbnail: mediaa.thumb, mimetype: 'video/mp4'}, {quoted: m});
      await conn.sendMessage(m.chat, {text: '*[✅] 𝑽𝒊𝒅𝒆𝒐 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒅𝒐 𝒆𝒙𝒊𝒕𝒐𝒔𝒂𝒎𝒆𝒏𝒕𝒆.*', edit: key}, {quoted: m});
      enviando = false
    } catch {
      try {
        const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${youtubeLink}`);
        const lolh = await lolhuman.json();
        const n = lolh.result.title || 'error';
        const n2 = lolh.result.link;
        const n3 = lolh.result.size;
        const n4 = lolh.result.thumbnail;
        await conn.sendMessage(m.chat, {video: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `📑 𝑻𝒊𝒕𝒖𝒍𝒐: ${n}\n🗂 𝑷𝒆𝒔𝒐 𝑫𝒆𝒍 𝑽𝒊𝒅𝒆𝒐:
${n3}`, thumbnail: await fetch(n4)}, {quoted: m});
        await conn.sendMessage(m.chat, {text: '𝑽𝒊𝒅𝒆𝒐 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒅𝒐 𝒆𝒙𝒊𝒕𝒐𝒔𝒂𝒎𝒆𝒏𝒕𝒆.', edit: key}, {quoted: m});
        enviando = false
      } catch {
        await conn.sendMessage(m.chat, {text: `𝑬𝒍 𝒗𝒊𝒅𝒆𝒐 𝒏𝒐 𝒑𝒖𝒅𝒐 𝒔𝒆𝒓 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒅𝒐 𝒏𝒊 𝒆𝒏𝒗𝒊𝒂𝒅𝒐, 𝒗𝒖𝒆𝒍𝒗𝒂 𝒂 𝒊𝒏𝒕𝒆𝒏𝒕𝒂𝒓𝒍𝒐`, edit: key}, {quoted: m});
        throw '𝑬𝒓𝒓𝒐𝒓, 𝒏𝒐 𝒇𝒖𝒆 𝒑𝒐𝒔𝒊𝒃𝒍𝒆 𝒅𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒓 𝒆𝒍 𝒗𝒊𝒅𝒆𝒐.';
      }
    }
  }
}};
handler.help = ['ytv <yt url>'];
handler.tags = ['downloader'];
handler.command = /^(video|fgmp4|dlmp4|getvid|yt(v|mp4)?)$/i;
export default handler;

function bytesToSize(bytes) {
  return new Promise((resolve, reject) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
    if (i === 0) resolve(`${bytes} ${sizes[i]}`);
    resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
  });
}

async function ytMp3(url) {
  return new Promise((resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
          const {contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {audio: item.url, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, result2: resultFix, thumb});
    }).catch(reject);
  });
}

async function ytMp4(url) {
  return new Promise(async (resolve, reject) => {
    ytdl.getInfo(url).then(async (getUrl) => {
      const result = [];
      for (let i = 0; i < getUrl.formats.length; i++) {
        const item = getUrl.formats[i];
        if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
          const {qualityLabel, contentLength} = item;
          const bytes = await bytesToSize(contentLength);
          result[i] = {video: item.url, quality: qualityLabel, size: bytes};
        }
      }
      const resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
      const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
      const tinyUrl = tiny.data;
      const title = getUrl.videoDetails.title;
      const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
      resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
    }).catch(reject);
  });
}

async function ytPlay(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getAudio = await ytMp3(random);
      resolve(getAudio);
    }).catch(reject);
  });
}

async function ytPlayVid(query) {
  return new Promise((resolve, reject) => {
    yts(query).then(async (getData) => {
      const result = getData.videos.slice( 0, 5 );
      const url = [];
      for (let i = 0; i < result.length; i++) {
        url.push(result[i].url);
      }
      const random = url[0];
      const getVideo = await ytMp4(random);
      resolve(getVideo);
    }).catch(reject);
  });
}

const getBuffer = async (url, options) => {
  try {
    options ? options : {};
    const res = await axios({
      method: 'get',
      url,
      headers: {
        'DNT': 1,
        'Upgrade-Insecure-Request': 1,
      },
      ...options,
      responseType: 'arraybuffer',
    });

    return res.data;
  } catch (e) {
    console.log(`Error : ${e}`);
  }
};
