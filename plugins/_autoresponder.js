import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𓆩✮͢𝙂𝙇𝙄𝙏𝘾𝙃-𝙈𝘿𓆪', body: '𓆩✮͢𝘿𝙞𝙥𝙖𝙠 𝙎𝙝𝙖𝙧𝙢𝙖𓆪', sourceUrl: md, thumbnail: imagen2}}})}
    
return !0 }
export default handler
