const handler = async (m, {conn, isPrems}) => {
  const hasil = Math.floor(Math.random() * 1000);
  const time = global.db.data.users[m.sender].lastmiming + 600000;
  if (new Date - global.db.data.users[m.sender].lastmiming < 600000) throw `*[ ⏲️ ] espera ${msToTime(time - new Date())} para volver a conseguir pesos`;
  m.reply(`*[ 🎉 ] Conseguiste ${hasil} Pesos*` , m adReply);
  global.db.data.users[m.sender].lastmiming = new Date * 1;
};
handler.help = ['work2'];
handler.tags = ['rpg'];
handler.command = ['work2', 'Work2', 'trabajar2'];
handler.fail = null;
export default handler;

function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;

  return minutes + ' m y ' + seconds + ' s ';
}
