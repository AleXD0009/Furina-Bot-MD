import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    await conn.sendMessage(m.chat, { react: { text: '🐶', key: m.key } })
    const str = `

┏━━━━━━━━━━━━━━┓
┣⟣*_🐶𝐉𝐨𝐭𝐜𝐡𝐮𝐚-𝐛𝐨𝐭🐶_*┣
┗━━━━━━━━━━━━━━┛

  _*ɪɴꜰᴏ ᴜꜱᴜᴀʀɪᴏ*_
_*ɴᴏᴍʙʀᴇ​*_ : ${taguser}
_*ᴅɪᴀᴍᴀɴᴛᴇꜱ​*_ : ${user.limit}
_*​ɴɪᴠᴇʟ​*_ : ${user.level}
_*​xᴘ*_ : ${user.exp}
_*​ᴘʀᴇᴍɪᴜᴍ​*_ : ${user.premiumTime > 0 ? '✅' : (user.isPrems ? '✅' : '❌') || ''}

╭─────────────┈
│╭─────────────┈⊷
││「 _*ɪɴꜰᴏ ʙᴏᴛ*_ 」  
│╰────────────┈⊷  
│           
│ᴄᴏᴍᴀɴᴅᴏ ᴘᴀʀᴀ ꜱᴀʙᴇʀ ᴛᴏᴅᴏ ʟᴏ ɴᴜᴇᴠᴏ ᴅᴇʟ ʙᴏᴛ:
│ _${usedPrefix}ComandosNuevos_
│ _${usedPrefix}Nuevo_
│
│╭────────────────
││𝙏𝙞𝙚𝙢𝙥𝙤 𝙖𝙘𝙩𝙞𝙫𝙤: ${uptime}
││𝙥𝙧𝙚𝙛𝙞𝙟𝙤:| . | / | # |
│╰────────────────         
│╭────────────────     
││🐶͘͜  _${usedPrefix}owner | creador_
││🐶͘͜  _${usedPrefix}repo | repositorio_
││🐶͘͜  _${usedPrefix}estado_
││🐶͘͜  _${usedPrefix}grupos | gruposjt_
││🐶͘͜  _${usedPrefix}dash | dashboard_
││🐶͘͜  _${usedPrefix}speedtest_
││🐶͘͜  _${usedPrefix}instalarbot | infoinstalar_
││🐶͘͜  bot/sub bot: ${(conn.user.jid == global.conn.user.jid ? '' : `Jadibot de: https://wa.me/${global.conn.user.jid.split`@`[0]}`) || 'Este es el Bot oficial'}
│╰────────────────  
│ ${readMore}
│╭─────────────┈⊷
││ 「_*ᴍᴇɴᴜꜱ*_」
│╰────────────┈⊷            
│╭────────────────            
││🐶͘͜  _${usedPrefix}MenuPorn | porn_
││
││🐶͘͜  _${usedPrefix}menuanimes | animes_
││
││🐶͘͜  _${usedPrefix}menuaudios | audios_
││
││🐶͘͜  _${usedPrefix}MenuCreador_
││
││🐶͘͜  _${usedPrefix}MenuDescargas | Descargas_
││
││🐶͘͜  _${usedPrefix}MenuRPG | RPG_
│╰────────────────
│ ${readMore}
│╭─────────────┈⊷
││ 「 𝐀𝐂𝐂𝐈𝐎𝐍𝐄𝐒」
│╰────────────┈⊷
│╭────────────────        
││🐶͘͜  _${usedPrefix}kiss_
││🐶͘͜  _${usedPrefix}slap_
││🐶͘͜  _${usedPrefix}pat_
││🐶͘͜  _${usedPrefix}dado_
│╰────────────────
│
│╭─────────────┈⊷
││「𝐈𝐀 / 𝐁𝐎𝐓/ 𝐒𝐈𝐌𝐒𝐈𝐌𝐈」
│╰────────────┈⊷
│╭──────────────── 
││🐶͘͜  _${usedPrefix}bot_
││🐶͘͜  _${usedPrefix}iaimagen
│╰────────────────
│
│╭─────────────┈⊷
││「 𝐒𝐎𝐋𝐔𝐂𝐈𝐎𝐍 𝐀 𝐄𝐑𝐑𝐎𝐑𝐄𝐒 」
│╰────────────┈⊷
│╭──────────────── 
││⟼ Mensajes en espera
││🐶͘͜  _${usedPrefix}fixmsgespera_
│╰────────────────
│ ${readMore}
│╭─────────────┈⊷
││「 𝐔𝐍𝐄 𝐄𝐋 𝐁𝐎𝐓 𝐀 𝐓𝐔 𝐆𝐑𝐔𝐏𝐎 」
│╰────────────┈⊷
│╭──────────────── 
││🐶͘͜  _${usedPrefix}join *<enlace / link / url>*_
│╰────────────────
│ ${readMore}
│╭─────────────┈⊷
││「 𝐒𝐄𝐑𝐁𝐎𝐓 - 𝐉𝐀𝐃𝐈𝐁𝐎𝐓 」
│╰────────────┈⊷    
│╭──────────────── 
││🐶͘͜  _${usedPrefix}serbot_
││🐶͘͜  _${usedPrefix}serbot --code_
││🐶͘͜  _${usedPrefix}token_
││🐶͘͜  _${usedPrefix}bots_
││(si quiere sacar el subbot vaya 
││a dispositivos vinculados y cierre la sesion)
│╰────────────────
│
│╭─────────────┈⊷
││「 𝐄𝐍𝐀𝐁𝐋𝐄 / 𝐃𝐈𝐒𝐀𝐁𝐋𝐄𝐒 𝐁𝐎𝐓 」
│╰────────────┈⊷     
│╭──────────────── 
││🐶͘͜  _${usedPrefix}enable restrict_
││🐶͘͜  _${usedPrefix}disable restrict_
││🐶͘͜  _${usedPrefix}enable autoread_
││🐶͘͜  _${usedPrefix}disable autoread_
││🐶͘͜  _${usedPrefix}enable antispam_
││🐶͘͜  _${usedPrefix}disable antispam_
││🐶͘͜  _${usedPrefix}enable anticall_
││🐶͘͜  _${usedPrefix}disable anticall_
││🐶͘͜  _${usedPrefix}enable modoia_
││🐶͘͜  _${usedPrefix}disable modoia_
││🐶͘͜  _${usedPrefix}enable audios_bot_
││🐶͘͜  _${usedPrefix}disable audios_bot_
││🐶͘͜  _${usedPrefix}enable antiprivado_
││🐶͘͜  _${usedPrefix}disable antiprivado_
│╰────────────────
│  ${readMore}
│╭─────────────┈⊷
││「 𝐉𝐔𝐄𝐆𝐎𝐒 」
│╰────────────┈⊷  
│╭──────────────── 
││🐶͘͜  _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
││🐶͘͜  _${usedPrefix}fake *<texto1> <@tag> <texto2>*_
││🐶͘͜  _${usedPrefix}ppt *<papel / tijera /piedra>*_
││🐶͘͜  _${usedPrefix}prostituto *<nombre / @tag>*_
││🐶͘͜  _${usedPrefix}prostituta *<nombre / @tag>*_
││🐶͘͜  _${usedPrefix}gay2 *<nombre / @tag>*_
││🐶͘͜  _${usedPrefix}lesbiana *<nombre / @tag>*_
││🐶͘͜  _${usedPrefix}pajero *<nombre / @tag>*_
││🐶͘͜  _${usedPrefix}pajera *<nombre / @tag>*_
││🐶͘͜  _${usedPrefix}puto *<nombre / @tag>*_
││🐶͘͜  _${usedPrefix}puta *<nombre / @tag>*_
││🐶͘͜  _${usedPrefix}manco *<nombre / @tag>*_
││🐶͘͜  _${usedPrefix}manca *<nombre / @tag>*_
││🐶͘͜  _${usedPrefix}rata *<nombre / @tag>*_
││🐶͘͜  _${usedPrefix}love *<nombre / @tag>*_
││🐶͘͜  _${usedPrefix}doxear *<nombre / @tag>*_
││🐶͘͜  _${usedPrefix}pregunta *<texto>*_
││🐶͘͜  _${usedPrefix}suitpvp *<@tag>*_
││🐶͘͜  _${usedPrefix}slot *<apuesta>*_
││🐶͘͜  _${usedPrefix}ttt *<nombre sala>*_
││🐶͘͜  _${usedPrefix}delttt_
││🐶͘͜  _${usedPrefix}acertijo_
││🐶͘͜  _${usedPrefix}sorteo (nombre de lo que va a sortear)_
││🐶͘͜  _${usedPrefix}top *<texto>*_
││🐶͘͜  _${usedPrefix}topgays_
││🐶͘͜  _${usedPrefix}topparejas_
││🐶͘͜  _${usedPrefix}amistad_
││🐶͘͜  _${usedPrefix}trivia_
││🐶͘͜  _${usedPrefix}topotakus_
││🐶͘͜  _${usedPrefix}formarpareja_
││🐶͘͜  _${usedPrefix}verdad_
││🐶͘͜  _${usedPrefix}reto_
││🐶͘͜  _${usedPrefix}cancion_
││🐶͘͜  _${usedPrefix}pista_
││🐶͘͜  _${usedPrefix}advpe_
││🐶͘͜  _${usedPrefix}palabra_
│╰────────────────
│ 
│╭─────────────┈⊷
││「 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 」
│╰────────────┈⊷
│╭────────────────     
││🐶͘͜  _${usedPrefix}enable
││🐶͘͜  _${usedPrefix}disable
│╰────────────────
│
│╭─────────────┈⊷
││「 𝐑𝐄𝐏𝐎𝐑𝐓𝐀𝐑 𝐄𝐑𝐑𝐎𝐑𝐄𝐒 」
│╰────────────┈⊷
│╭────────────────    
││🐶͘͜  _${usedPrefix}reporte *<texto>*_
│╰────────────────
│ ${readMore}
│╭─────────────┈⊷
││「 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 」
│╰────────────┈⊷     
│╭────────────────      
││🐶͘͜  _${usedPrefix}githubsearch *<texto>*_
││🐶͘͜  _${usedPrefix}pelisplus *<texto>*_
││🐶͘͜  _${usedPrefix}modapk *<texto>*_
││🐶͘͜  _${usedPrefix}stickersearch *<texto>*_
││🐶͘͜  _${usedPrefix}stickersearch2 *<texto>*_
││🐶͘͜  _${usedPrefix}xnxxsearch *<texto>*_
││🐶͘͜  _${usedPrefix}animeinfo *<texto>*_
││🐶͘͜  _${usedPrefix}google *<texto>*_
││🐶͘͜  _${usedPrefix}letra *<texto>*_
││🐶͘͜  _${usedPrefix}wikipedia *<texto>*_
││🐶͘͜  _${usedPrefix}ytsearch *<texto>*_
││🐶͘͜  _${usedPrefix}playstore *<texto>*_
│╰────────────────
│
│╭─────────────┈⊷
││「 𝐆𝐑𝐔𝐏𝐎𝐒 」
│╰────────────┈⊷     
│╭────────────────      
││🐶͘͜  _${usedPrefix}add *<numero>*_
││🐶͘͜  _${usedPrefix}kick *<@tag>*_
││🐶͘͜  _${usedPrefix}kick2 *<@tag>*_
││🐶͘͜  _${usedPrefix}listanum *<texto>*_
││🐶͘͜  _${usedPrefix}kicknum *<texto>*_
││🐶͘͜  _${usedPrefix}grupo *<abrir / cerrar>*_
││🐶͘͜  _${usedPrefix}grouptime *<opcion> <tiempo>*_
││🐶͘͜  _${usedPrefix}promote *<@tag>*_
││🐶͘͜  _${usedPrefix}demote *<@tag>*_
││🐶͘͜  _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
││🐶͘͜  _${usedPrefix}demote *<@tag>*_
││🐶͘͜  _${usedPrefix}infogroup_
││🐶͘͜  _${usedPrefix}resetlink_
││🐶͘͜  _${usedPrefix}link_
││🐶͘͜  _${usedPrefix}setname *<texto>*_
││🐶͘͜  _${usedPrefix}setdesc *<texto>*_
││🐶͘͜  _${usedPrefix}tagall *<texto>*_
││🐶͘͜  _${usedPrefix}setwelcome *<texto>*_
││🐶͘͜  _${usedPrefix}setbye *<texto>*_
││🐶͘͜  _${usedPrefix}hidetag *<texto>*_
││🐶͘͜  _${usedPrefix}hidetag *<audio>*_
││🐶͘͜  _${usedPrefix}hidetag *<video>*_
││🐶͘͜  _${usedPrefix}hidetag *<imagen>*_
││🐶͘͜  _${usedPrefix}warn *<@tag>*_
││🐶͘͜  _${usedPrefix}unwarn *<@tag>*_
││🐶͘͜  _${usedPrefix}listwarn_
││🐶͘͜  _${usedPrefix}fantasmas_
││🐶͘͜  _${usedPrefix}destraba_
││🐶͘͜  _${usedPrefix}setpp *<imagen>*_
│╰────────────────
│ ${readMore}
│╭─────────────┈⊷
││「 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 」
│╰────────────┈⊷
│╭────────────────     
││🐶͘͜  _${usedPrefix}toanime *<imagen>*_
││🐶͘͜  _${usedPrefix}togifaud *<video>*_
││🐶͘͜  _${usedPrefix}toimg *<sticker>*_
││🐶͘͜  _${usedPrefix}tomp3 *<video>*_
││🐶͘͜  _${usedPrefix}tomp3 *<nota de voz>*_
││🐶͘͜  _${usedPrefix}toptt *<video / audio>*_
││🐶͘͜  _${usedPrefix}tovideo *<sticker>*_
││🐶͘͜  _${usedPrefix}tourl *<video / imagen / audio>*_
││🐶͘͜  _${usedPrefix}tts *<idioma> <texto>*_
││🐶͘͜  _${usedPrefix}tts *<efecto> <texto>*_
│╰────────────────
│
│╭─────────────┈⊷
││「 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 」 
│╰────────────┈⊷      
│╭────────────────       
││🐶͘͜  _${usedPrefix}logos *<efecto> <texto>*_
││🐶͘͜  _${usedPrefix}logochristmas *<texto>*_
││🐶͘͜  _${usedPrefix}logocorazon *<texto>*_
││🐶͘͜  _${usedPrefix}ytcomment *<texto>*_
││🐶͘͜  _${usedPrefix}hornycard *<@tag>*_
││🐶͘͜  _${usedPrefix}simpcard *<@tag>*_
││🐶͘͜  _${usedPrefix}lolice *<@tag>*_
││🐶͘͜  _${usedPrefix}itssostupid_
││🐶͘͜  _${usedPrefix}pixelar_
││🐶͘͜  _${usedPrefix}blur_
││🐶͘͜  _${usedPrefix}toanime_
│╰────────────────
│
│╭─────────────┈⊷
││「 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 」
│╰────────────┈⊷
│╭────────────────     
││🐶͘͜  _${usedPrefix}piropo_
││🐶͘͜  _${usedPrefix}consejo_
││🐶͘͜  _${usedPrefix}fraseromantica_
││🐶͘͜  _${usedPrefix}historiaromantica_
│╰────────────────
│ ${readMore}
│╭─────────────┈⊷
││「 𝐑𝐀𝐍𝐃𝐎𝐌 」
│╰────────────┈⊷
│╭────────────────     
││🐶͘͜  _${usedPrefix}cat_
││🐶͘͜  _${usedPrefix}dog_
││🐶͘͜  _${usedPrefix}meme_
│╰────────────────
│
│╭─────────────┈⊷
││「 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎𝐒 」
│╰────────────┈⊷
│╭────────────────     
││*RESPONDE A AUDIO O NOTA DE VOZ*
││🐶͘͜  _${usedPrefix}bass_
││🐶͘͜  _${usedPrefix}blown_
││🐶͘͜  _${usedPrefix}deep_
││🐶͘͜  _${usedPrefix}earrape_
││🐶͘͜  _${usedPrefix}fast_
││🐶͘͜  _${usedPrefix}fat_
││🐶͘͜  _${usedPrefix}nightcore_
││🐶͘͜  _${usedPrefix}reverse_
││🐶͘͜  _${usedPrefix}robot_
││🐶͘͜  _${usedPrefix}slow_
││🐶͘͜  _${usedPrefix}smooth_
││🐶͘͜  _${usedPrefix}tupai_
│╰────────────────
│
│╭─────────────┈⊷
││「 𝐂𝐇𝐀𝐓 𝐀𝐍𝐎𝐍𝐈𝐌𝐎 」
│╰────────────┈⊷
│╭────────────────   
││🐶͘͜  _${usedPrefix}start_
││🐶͘͜  _${usedPrefix}next_
││🐶͘͜  _${usedPrefix}leave_
│╰────────────────
│ ${readMore}
│╭─────────────┈⊷
││「 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 」
│╰────────────┈⊷
│╭──────────────── 
││🐶͘͜  _${usedPrefix}inspect *<link wa_gc>*_
││🐶͘͜  _${usedPrefix}chatgpt *<texto>*_
││🐶͘͜  _${usedPrefix}delchatgpt
││🐶͘͜  _${usedPrefix}gptvoz *<texto>*_
││🐶͘͜  _${usedPrefix}dall-e *<texto>*_
││🐶͘͜  _${usedPrefix}spamwa *<numero|texto|cantidad>*_
││🐶͘͜  _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
││🐶͘͜  _${usedPrefix}readviewonce *<imagen / video>*_
││🐶͘͜  _${usedPrefix}clima *<país> <ciudad>*_
││🐶͘͜  _${usedPrefix}encuesta *<texto1|texto2...>*_
││🐶͘͜  _${usedPrefix}afk *<motivo>*_
││🐶͘͜  _${usedPrefix}ocr *<responde a imagen>*_
││🐶͘͜  _${usedPrefix}hd *<responde a imagen>*_
││🐶͘͜  _${usedPrefix}acortar *<enlace / link / url>*_
││🐶͘͜  _${usedPrefix}calc *<operacion math>*_
││🐶͘͜  _${usedPrefix}del *<mensaje>*_
││🐶͘͜  _${usedPrefix}whatmusic *<audio>*_
││🐶͘͜  _${usedPrefix}readqr *<imagen (QR)>*_
││🐶͘͜  _${usedPrefix}qrcode *<texto>*_
││🐶͘͜  _${usedPrefix}readmore *<texto1| texto2>*_
││🐶͘͜  _${usedPrefix}styletext *<texto>*_
││🐶͘͜  _${usedPrefix}traducir *<texto>*_
││🐶͘͜  _${usedPrefix}nowa *<numero>*_
││🐶͘͜  _${usedPrefix}covid *<pais>*_
││🐶͘͜  _${usedPrefix}horario_
││🐶͘͜  _${usedPrefix}dropmail_
│╰────────────────
│
│╭─────────────┈⊷
││「 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 」
│╰────────────┈⊷
│╭────────────────             
││🐶͘͜  _${usedPrefix}sticker *<responder a imagen o video>*_
││🐶͘͜  _${usedPrefix}sticker *<enlace / link / url>*_
││🐶͘͜  _${usedPrefix}sticker2 *<responder a imagen o video>*_
││🐶͘͜  _${usedPrefix}sticker2 *<enlace / link / url>*_
││🐶͘͜  _${usedPrefix}s *<responder a imagen o video>*_
││🐶͘͜  _${usedPrefix}s *<enlace / link / url>*_
││🐶͘͜  _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
││🐶͘͜  _${usedPrefix}scircle *<imagen>*_
││🐶͘͜  _${usedPrefix}sremovebg *<imagen>*_
││🐶͘͜  _${usedPrefix}semoji *<tipo> <emoji>*_
││🐶͘͜  _${usedPrefix}qc *<texto>*_
││🐶͘͜  _${usedPrefix}attp *<texto>*_
││🐶͘͜  _${usedPrefix}attp2 *<texto>*_
││🐶͘͜  _${usedPrefix}attp3 *<texto>*_
││🐶͘͜  _${usedPrefix}ttp *<texto>*_
││🐶͘͜  _${usedPrefix}ttp2 *<texto>*_
││🐶͘͜  _${usedPrefix}ttp3 *<texto>*_
││🐶͘͜  _${usedPrefix}ttp4 *<texto>*_
││🐶͘͜  _${usedPrefix}ttp5 *<texto>*_
││🐶͘͜  _${usedPrefix}wm *<packname> <author>*_
││🐶͘͜  _${usedPrefix}stickermarker *<efecto> <imagen>*_
││🐶͘͜  _${usedPrefix}stickerfilter *<efecto> <imagen>*_
│╰────────────────
╰─────────────┈
`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|Comandos|comandos|cmds|cmd|MENU|help|ayuda)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
