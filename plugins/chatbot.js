// by https://github.com/elrebelde21

import '../plugins/_content.js'
let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
if (chat.isBanned) return
let vn = 'https://qu.ax/Ocxm.mp3'
let bot = `${pickRandom([`*¡👉👈 𝑯𝒆𝒚! 𝑰'𝒎 𝒉𝒆𝒓𝒆. 𝑰 𝒄𝒂𝒏 𝒉𝒆𝒍𝒑 🙌*`, `Aqui estoy | Here I am 😼`, `*Hello, I_m here how can i help you? | Hello, here I am, can I help? 😸*`])}`.trim()
let txt = `*\`💫 Te presentamos un nuevo hosting: "Infinity-Wa Host"\`*

*¿Your Nokia is very slow and you need to have your bot active 24/7?*

> *We have the best option for you to keep your bot active 24/7, at very affordable prices. It is very cheap and everyone can buy.*

*🚩Precios :*
* 1GB, 100 CPU = 1Dolar
* 2GB, 120 CPU = 2Dolar
* 3GB, 140 CPU = 3Dolar
* 4GB, 175 CPU = 4Dolar
* 5GB, 200 CPU = 5 Dólar. 

🟢 \`\`\`Host Information\`\`\`

💻 *Page:*
https://live.panel-infinitywa.store

*🟢 Dashboard:*
https://dashboard.infinitywa.xyz

*⚙️ Bot de Support: exclusivo para host*
https://wa.me/message/FETBF7YBO37CG1

🧡 *Canal de WhatsApp:*
${canal1}

💚 *Grupo:*
https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV

🛍️ *Método de pago:*
*• PayPal :* paypal.me/OfcGB
*• Mercado pago, alías:* OficialGB
*• Naranja x, alías:* OficialGL
*• Yape (Perú) :* +51948705559

*\`💙 Contactanos para más información o alquidir los servicios:\`*
• https://www.facebook.com/elrebelde21
• wa.me/527294888993
• wa.me/5492964650915` 

if (/^infinity|infinityWa|host|hosting$/i.test(m.text)) {
 await conn.sendMessage(m.chat, { text: txt,
contextInfo:{
forwardingScore: 9999999,
isForwarded: false, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
title: `🤖 𝐈𝐍𝐅𝐈𝐍𝐈𝐓𝐘𝐖𝐀-𝐇𝐎𝐒𝐓 🤖`,
body: `✅ Quality Hosting`,
"previewType": "PHOTO",
thumbnailUrl: 'https://qu.ax/EQTd.jpg', 
sourceUrl: accountsgb}}},
{ quoted: fkontak})
} 
 
if (/^bot$/i.test(m.text)) {
await conn.reply(m.chat, bot, m, fakeChannel)
await conn.sendPresenceUpdate('recording', m.chat)    
await conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true, quoted: m })   
}

if (/^e$/i.test(m.text) ) { //sin prefijo 
let teks = `${pickRandom([`Que bueno sabe la letra E`, `eeeeee`])}`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})}

/*if (/^Mande porno|porno|paja$/i.test(m.text) ) { //sin prefijo 
let teks = `${pickRandom([`no puedo esta contra las política del grupo.😸`, `_uff miren un pajero_`, `_pagame y paso mi pack😏🥵_`, `_que_`, `_que quiere pija dice 🤣_`, `_pasa el pack de tu hermana😏_`, `_mire un gilipolla_`, `_siuuu sexo sexo sexo😈_`, '_callate putito_'])}`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})}*/

if (/^reglas|normas|Reglas$/i.test(m.text) ) { //sin prefijo 
conn.reply(m.chat, `*╭┅〘 ⚠️ 𝗢𝗯𝗲𝗱𝗲𝗰𝗲 𝗹𝗮𝘀 𝗿𝗲𝗴𝗹𝗮𝘀 ⚠️ 〙*
➽❌ 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐥𝐥𝐚𝐦𝐚𝐫 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐒𝐩𝐚𝐦 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐍𝐨 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐑𝐞𝐬𝐩𝐞𝐭𝐚 𝐥𝐨𝐬 𝐭𝐞𝐫𝐦𝐢𝐧𝐨𝐬 𝐲 𝐜𝐨𝐧𝐝𝐢𝐜𝐢𝐨𝐧𝐞𝐬
*╰═┅ৡৢ͜͡✦═╡ 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 ╞═┅ৡৢ͜͡✦═╯*`, fkontak, m)}

if (/^I want a bot|how do I get a bot?|I want a bot?|I want a bot|solicitud|solicitó bot|solicito bot|Necesito un bot|necesito un bot$/i.test(m.text) ) {
conn.reply(m.chat,  `\`⚡¿Quieres un bot para tu grupo?\`

*🐈To install bot :*
* #instalarbot

*🧡type ser bot :*
* #serbot (escanea el QR) 
* #jadibot --code (Código de 8 dígitos)

*💖 You can request it.*

> 🚀 The bot will be active 24/7 for your group.

\`⚡ ¿Where can I donate??\`
> Through our PayPal or Mercado Pago.

*❇️PayPal:*
• https://www.paypal.com/paypalme/dipak-69

*❇️Payment market:*

*• Alias :* Dipak-69
*• CVU :* 0000003100059201491917

\`⏩ Siguiente paso ⏩\`

> Una vez realizado el pago, puedes enviar un comprobante de envío del dinero (captura de pantalla) para que pueda agregar el bot a tu grupo:

• https://chat.whatsapp.com/FDRfhecUGrCEQswkg8FUYz
• ${ig}
• https://www.facebook.com/elrebelde21

\`⚡ ¿El bot estará activo 24/7?\`
_*Sí, nuestro bot está alojado en un servidor de pago para mantenerlo activo 24/7 (por eso también solicitamos donaciones para mantenerlo en funcionamiento) 💞*_

> *𝙂𝙧𝙖𝙘𝙞𝙖𝙨 𝙥𝙤𝙧 𝙨𝙪𝙨 𝙥𝙧𝙚𝙛𝙚𝙧𝙚𝙣𝙘𝙞𝙖𝙨 𝙚𝙣 ${gt} 🐈💞*`, fkontak, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: `Hola ${name} 👋`, body: wm, previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})}
 
if (/^¿Qué es un Bot?|¿Qué es Bot?|Qué es Bot|qué es Bot|QUÉ ES UN BOT|¿QUÉ ES UN BOT?|¿qué es un Bot?|qué es un Bot|que es un Bot|Qué es un Bot?|Que es un Bot? $/i.test(m.text) ) {
conn.reply(m.chat, `\`✨ ¿𝐐𝐮𝐞́ 𝐞𝐬 𝐮𝐧 𝐁𝐨𝐭 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩? ✨\`

🍃 _Un Bot es una inteligencia programada que permite realizar actividades dependiendo de lo que solicite. En temas de WhatsApp, es posible crear stickers, descargar música, vídeos, crear logos, buscar imágenes, interactuar en modo de conversación,  participar en juegos dentro de chats etc..._

🍃 *_Para ver el menú de comandos puedes usar:_*
#menu

🐈 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈`, m)}  
return !0 
}
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
