const handler = async (m, {conn, usedPrefix}) => {
  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `*╭─────────────┈
│╭─────────────┈⊷
││「 𝐈𝐍𝐅𝐎 𝐁𝐎𝐓 」  
│╰────────────┈⊷  
│ᴄᴏᴍᴀɴᴅᴏ ᴘᴀʀᴀ ꜱᴀʙᴇʀ ᴛᴏᴅᴏ ʟᴏ ɴᴜᴇᴠᴏ ᴅᴇʟ ʙᴏᴛ:
│ _ComandosNuevos_
│ _Nuevo_
│
│╭────────────────
││𝙥𝙧𝙚𝙛𝙞𝙟𝙤:| . | / | # |
│╰────────────────         
│╭────────────────     
││🐶͘͜  _owner | creador_
││🐶͘͜  _repo | repositorio_
││🐶͘͜  _estado_
││🐶͘͜  _grupos | gruposjt_
││🐶͘͜  _dash | dashboard_
││🐶͘͜  _speedtest_
││🐶͘͜  _instalarbot | infoinstalar_
│╰────────────────  
│ 
│
│╭─────────────┈⊷
││ 「 𝐌𝐄𝐍𝐔𝐒 」
│╰────────────┈⊷            
│╭────────────────            
││🐶͘͜  _MenuPorn | porn_
││
││🐶͘͜  _menuanimes | animes_
││
││🐶͘͜  _menuaudios | audios_
││
││🐶͘͜  _MenuCreador_
││
││🐶͘͜  _MenuDescargas | Descargas_
││
││🐶͘͜  _MenuRPG | RPG_
│╰────────────────
│ 
│
│╭─────────────┈⊷
││ 「 𝐀𝐂𝐂𝐈𝐎𝐍𝐄𝐒」
│╰────────────┈⊷
│╭────────────────        
││🐶͘͜  _kiss_
││🐶͘͜  _slap_
││🐶͘͜  _pat_
││🐶͘͜  _dado_
│╰────────────────
│
│╭─────────────┈⊷
││「𝐈𝐀 / 𝐁𝐎𝐓/ 𝐒𝐈𝐌𝐒𝐈𝐌𝐈」
│╰────────────┈⊷
│╭──────────────── 
││🐶͘͜  _bot_
││🐶͘͜  _simi_
││🐶͘͜  _iaimagen
│╰────────────────
│
│╭─────────────┈⊷
││「 𝐒𝐎𝐋𝐔𝐂𝐈𝐎𝐍 𝐀 𝐄𝐑𝐑𝐎𝐑𝐄𝐒 」
│╰────────────┈⊷
│╭──────────────── 
││⟼ Mensajes en espera
││🐶͘͜  _fixmsgespera_
│╰────────────────
│ 
│╭─────────────┈⊷
││「 𝐔𝐍𝐄 𝐄𝐋 𝐁𝐎𝐓 𝐀 𝐓𝐔 𝐆𝐑𝐔𝐏𝐎 」
│╰────────────┈⊷
│╭──────────────── 
││🐶͘͜  _join *<enlace / link / url>*_
│╰────────────────
│ 
│╭─────────────┈⊷
││「 𝐒𝐄𝐑𝐁𝐎𝐓 - 𝐉𝐀𝐃𝐈𝐁𝐎𝐓 」
│╰────────────┈⊷    
│╭──────────────── 
││🐶͘͜  _serbot_
││🐶͘͜  _serbot --code_
││🐶͘͜  _token_
││🐶͘͜  _bots_
││(si quiere sacar el subbot vaya 
││a dispositivos vinculados y cierre la sesion)
│╰────────────────
│
│╭─────────────┈⊷
││「 𝐄𝐍𝐀𝐁𝐋𝐄 / 𝐃𝐈𝐒𝐀𝐁𝐋𝐄𝐒 𝐁𝐎𝐓 」
│╰────────────┈⊷     
│╭──────────────── 
││🐶͘͜  _enable restrict_
││🐶͘͜  _disable restrict_
││🐶͘͜  _enable autoread_
││🐶͘͜  _disable autoread_
││🐶͘͜  _enable antispam_
││🐶͘͜  _disable antispam_
││🐶͘͜  _enable anticall_
││🐶͘͜  _disable anticall_
││🐶͘͜  _enable modoia_
││🐶͘͜  _disable modoia_
││🐶͘͜  _enable audios_bot_
││🐶͘͜  _disable audios_bot_
││🐶͘͜  _enable antiprivado_
││🐶͘͜  _disable antiprivado_
│╰────────────────
│
│╭─────────────┈⊷
││「 𝐉𝐔𝐄𝐆𝐎𝐒 」
│╰────────────┈⊷
│╭──────────────── 
││🐶͘͜  _mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
││🐶͘͜  _fake *<texto1> <@tag> <texto2>*_
││🐶͘͜  _ppt *<papel / tijera /piedra>*_
││🐶͘͜  _prostituto *<nombre / @tag>*_
││🐶͘͜  _slot *<apuesta>*_
││🐶͘͜  _ttt *<nombre sala>*_
││🐶͘͜  _delttt_
││🐶͘͜  _acertijo_
││🐶͘͜  _sorteo (nombre de lo que va a sortear)_
││🐶͘͜  _top *<texto>*_
│╰────────────────
│ 
│╭─────────────┈⊷
││「 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 」
│╰────────────┈⊷
│╭────────────────     
││🐶͘͜  _enable_
││🐶͘͜  _disable_
│╰────────────────
│
│╭─────────────┈⊷
││「 𝐑𝐄𝐏𝐎𝐑𝐓𝐀𝐑 𝐄𝐑𝐑𝐎𝐑𝐄𝐒 」
│╰────────────┈⊷
│╭────────────────    
││🐶͘͜  _reporte *<texto>*_
│╰────────────────
│ 
│╭─────────────┈⊷
││「 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 」
│╰────────────┈⊷     
│╭────────────────      
││🐶͘͜  _githubsearch *<texto>*_
││🐶͘͜  _pelisplus *<texto>*_
││🐶͘͜  _modapk *<texto>*_
││🐶͘͜  _stickersearch *<texto>*_
││🐶͘͜  _stickersearch2 *<texto>*_
││🐶͘͜  _xnxxsearch *<texto>*_
││🐶͘͜  _animeinfo *<texto>*_
││🐶͘͜  _google *<texto>*_
││🐶͘͜  _letra *<texto>*_
││🐶͘͜  _wikipedia *<texto>*_
││🐶͘͜  _ytsearch *<texto>*_
││🐶͘͜  _playstore *<texto>*_`.trim();
  const buttonMessage= {
    text: anu,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true, 
        title: `${pushname}`,
        body: "Suscribete ami canal Papu",
        thumbnailUrl: "https://i.ibb.co/S37DL7B/images-1-1.jpg",
        sourceUrl: "http://youtube.com/@Kriz_Chaan",
        mediaType: 1,
        renderLargerThumbnail: true
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['owner', 'creator'];
handler.tags = ['info'];
handler.command = /^(prueba|creator|creador|propietario)$/i;
export default handler;
