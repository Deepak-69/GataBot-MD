//
//By @NeKosmic || https://github.com/NeKosmic/
//
import * as fs from 'fs'

let handler = m => m
handler.before = async function (m, { conn, isAdmin, isBotAdmin, text, participants, usedPrefix }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n')
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
let delet = m.key.participant
let bang = m.key.id
let name = await conn.getName(m.sender)
const user = `@${m.sender.split`@`[0]}`;
let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": 'ɢᴀᴛᴀʙᴏᴛ-ᴍᴅ', 'jpegThumbnail': null}}}
if (chat.antiTraba && m.text.length > 4000) { //Maximum number of characters accepted in a message//
if (isAdmin) return conn.sendMessage(m.chat, { text: `${lenguajeGB['smsAvisoAG']()} ${mid.smsAntiTraba(m)}`, mentions: [m.sender] }, { quoted: fakemek })
if (!isBotAdmin) return conn.sendMessage(m.chat, {text: mid.smsAntiTraba2 + `\n${listAdmin}\n\n${lenguajeGB['smsAllAdmin']()}`, mentions: [...groupAdmins.map(v => v.id)] }, {quoted: m})
//await conn.sendButton(m.chat, `*[ ! ] A message containing many characters was detected [ ! ]*\n`, `${isBotAdmin ? '' : 'I am not an administrator, I can not do anything :/'}`, author, ['[ ᴅᴇsᴀᴄᴛɪᴠᴀ ᴀɴᴛɪᴛʀᴀʙᴀ ]', usedPrefix+'apagar antitraba'], fakemek )
if (isBotAdmin) {
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
setTimeout(() => {   
conn.sendMessage(m.chat, { text: `${lenguajeGB['smsAvisoAG']()}${mid.smsAntiTraba3}\n${"\n".repeat(400)}\n• ${mid.smsAntiTraba4(m, name)}`, mentions: [m.sender] }, { quoted: fakemek })}, 0)
setTimeout(() => { 
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}, 1000)} else if (!bot.restrict) return m.reply(`${lenguajeGB['smsSoloOwner']()}`)
}
return !0
} 
export default handler
