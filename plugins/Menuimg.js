const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
try {
} catch (e) {
} finally {
//let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
let name = await conn.getName(m.sender)
let str = `──────────────────────
			𝑪 𝑶 𝑴 𝑨 𝑵 𝑫 𝑶 𝑺

╔════📄 𝑰𝒏𝒇𝒐 📄══════╗
║╭───────────────···
║│ .menu2
║│ .help2
║│ .?2
║│ .menuaudios
║│ .info
║│ .grupos
║│ .owner
║│ .totalplugins
║│ .runtime
║│ .runtime2
║╰────────────────···
╚══════════════════╝
╔════🎮 𝑱𝒖𝒆𝒈𝒐𝒔 🎮═════╗
║╭───────────────···
║│ .acertijo
║│ .adivinaelnumero
║│ .advpe
║│ .bandera
║│ .buscaminas
║╰────────────────···
╚══════════════════╝
╔════🤖𝑺𝒖𝒃 𝒃𝒐𝒕𝒔🤖═════╗
║╭───────────────···
║│ .listjadibot
║│ .bots
║│ .subsbots
║│ .jadibot
║│ .serbot
║│ .botclone
║╰────────────────···
╚══════════════════╝
╔════𝑬𝒄𝒐𝒏𝒐𝒎𝒊𝒂💸══════╗
║╭───────────────···
║│ .Buy <cantidad>
║│ .Buyall
║│ .lb
║│ .work
║╰────────────────···
╚══════════════════╝
╔════📊𝑹𝒆𝒈𝒊𝒔𝒕𝒓𝒐📊═════╗
║╭───────────────···
║│ .myns
║│ .perfil
║│ .perfil @user
║│ .reg <nombre.edad>
║│ .unreg <numero de serie>
║╰────────────────···
╚══════════════════╝
╔════📥𝑫𝒆𝒔𝒄𝒂𝒓𝒈𝒂𝒔📤════╗
║╭───────────────···
║│ .spotifydl *<texto>*
║│ .facebook
║│ .gitclone
║│ .igstory <username>
║│ .instagram
║│ .mediafire
║│ .play <formato> <búsqueda>
║│ .play1.1 < busqueda >
║│ .play2.2 < busqueda >
║│ .play3 <búsqueda>
║│ .spotify <texto>
║│ .tiktok
║│ .twitter
║│ .videodoc
║│ .yta <yt url>
║│ .ytv <yt url>
║╰────────────────···
╚══════════════════╝
╔════👤𝑺𝒕𝒂𝒍𝒌𝒆𝒓👤══════╗
║╭───────────────···
║│ .githubstalk
║│ .igstalk
║│ .whatsappStalk
║╰────────────────···
╚══════════════════╝
╔════🤖 𝑰𝑨 🤖═══════╗
║╭───────────────···
║│ .bardimg
║│ .bard
║│ .bingimg <texto>
║│ .iaimagen
║│ .chatgpt4
║╰────────────────···
╚══════════════════╝
╔════𝑬𝒇𝒆𝒄𝒕𝒐𝒔 𝒚 𝒍𝒐𝒈𝒐𝒔══════╗
║╭───────────────···
║│ .ytcomment <texto>
║╰────────────────···
╚══════════════════╝
╔════𝑨𝒄𝒕𝒊𝒗𝒂𝒅𝒐𝒓𝒆𝒔📋═════╗
║╭───────────────···
║│ .enable <opcion>
║│ .disable <opcion>
║╰────────────────···
╚══════════════════╝
╔════🌱 𝑮𝒓𝒖𝒑𝒐𝒔 🌱════╗
║╭───────────────···
║│ .hidetag <mesaje>
║│ .tagall <mesaje>
║╰────────────────···
╚══════════════════╝
╔═════🔎𝑩𝒖𝒔𝒄𝒂𝒅𝒐𝒓🔎════╗
║╭───────────────···
║│ .applemusicsearch
║│ .google <texto>
║│ .imagen <texto>
║│ .letra <nombre de la cancion>
║│ .npmsearch
║│ .playlist
║│ .playstore <aplicacion>
║│ .rule34
║│ .spotifysearch <texto>
║│ .tiktoksearch
║│ .wikipedia <texto>
║│ .youtubechannel
║│ .ytsearch *<texto>*
║╰────────────────···
╚══════════════════╝
╔═════🖼𝑰𝒎𝒂𝒈𝒆𝒏𝒆𝒔🖼═══╗
║╭───────────────···
║│ .loli
║╰────────────────···
╚══════════════════╝
╔════🛠𝑯𝒆𝒓𝒓𝒂𝒎𝒊𝒆𝒏𝒕𝒂𝒔🛠═══╗
║╭───────────────···
║│ .acortar <link>
║│ .clima *<ciudad/país>*
║│ .document *<audio/video>*
║│ .shazam (audio)
║│ .tomp3
║│ .tourl <reply image>
║╰────────────────···
╚══════════════════╝
╔═════🎉𝑫𝒊𝒗𝒆𝒓𝒔𝒊𝒐𝒏🎉════╗
║╭───────────────···
║│ .cuando <pregunta>
║│ .nombrealreves
║│ .simi <texto>
║│ .bot <texto>
║│ .toanime
║╰────────────────···
╚══════════════════╝
╔════𝑬𝒇𝒆𝒄𝒕𝒐𝒔 𝒅𝒆 𝒂𝒖𝒅𝒊𝒐═════╗
║╭───────────────···
║│ .bass [vn]
║│ .blown [vn]
║│ .deep [vn]
║│ .earrape [vn]
║│ .fast [vn]
║│ .fat [vn]
║│ .nightcore [vn]
║│ .reverse [vn]
║│ .robot [vn]
║│ .slow [vn]
║│ .smooth [vn]
║│ .tupai [vn]
║╰────────────────···
╚══════════════════╝
╔════🧸𝑺𝒕𝒊𝒄𝒌𝒆𝒓𝒔🧸══════╗
║╭───────────────···
║│ .smeme <responder a imagen + texto>
║│ .sticker
║│ .wm <packname>|<author>
║│ .toimg (reply)
║╰────────────────···
╚══════════════════╝
╔════🔞 𝑵𝒔𝒇𝒘 🔞══════╗
║╭───────────────···
║│ .genshin
║│ .swimsuit
║│ .schoolswimsuit
║│ .white
║│ .barefoot
║│ .touhou
║│ .gamecg
║│ .hololive
║│ .uncensored
║│ .sunglasses
║│ .glasses
║│ .weapon
║│ .shirtlift
║│ .chain
║│ .fingering
║│ .flatchest
║│ .torncloth
║│ .bondage
║│ .demon
║│ .wet
║│ .pantypull
║│ .headdress
║│ .headphone
║│ .tie
║│ .anusview
║│ .shorts
║│ .stokings
║│ .topless
║│ .beach
║│ .bunnygirl
║│ .bunnyear
║│ .idol
║│ .vampire
║│ .gun
║│ .maid
║│ .bra
║│ .nobra
║│ .bikini
║│ .whitehair
║│ .blonde
║│ .pinkhair
║│ .bed
║│ .ponytail
║│ .nude
║│ .dress
║│ .underwear
║│ .foxgirl
║│ .uniform
║│ .skirt
║│ .sex
║│ .sex2
║│ .sex3
║│ .breast
║│ .twintail
║│ .spreadpussy
║│ .tears
║│ .seethrough
║│ .breasthold
║│ .drunk
║│ .fateseries
║│ .spreadlegs
║│ .openshirt
║│ .headband
║│ .food
║│ .close
║│ .tree
║│ .nipples
║│ .erectnipples
║│ .horns
║│ .greenhair
║│ .wolfgirl
║│ .catgirl
║│ .ahegao
║│ .manga
║│ .tentaculos
║╰────────────────···
╚══════════════════╝
╔════🐕 𝑪𝒓𝒆𝒂𝒅𝒐𝒓 🐕═════╗
║╭───────────────···
║│ .creategroup
║│ .banchat
║│ .cleartmp
║│ .deleteplugin
║│ .getplugin
║│ .restart
║│ .saveplugin <nombre>
║│ .seradmin
║│ .unbanchat
║│ .update
║╰────────────────···
╚══════════════════╝

> 𝑩𝒚 𝑨𝑳𝑺
`
 await  conn.sendMessage(m.chat,{ image:{ url: "https://telegra.ph/file/d675b0f7778b8284067d5.jpg", }, caption: str,  
 contextInfo: { mentionedJid: [m.sender], externalAdReply: { title: `J O T C H U A - M I N I`,  
 sourceUrl: "https://atom.bio/als", mediaType: 1, showAdAttribution: true, thumbnailUrl: "https://telegra.ph/file/d675b0f7778b8284067d5.jpg",  
 }, }, }, { quoted: m,});}};
handler.help = ['']
handler.tags = ['']
handler.command = /^(XD)$/i
handler.fail = null
export default  handler
