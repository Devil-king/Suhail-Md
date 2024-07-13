const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "wa.me/923119416058";
global.gurl  =process.env.GURL  || "wa.me/923119416058";
global.website=process.env.GURL || "wa.me/923119416058" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/c92f7937ca8e9cb3d7ce5.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ DEVIL-KING²²¹-ᴍᴅ" 


global.devs = "923119416058" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923119416058";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923119416058,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_58_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1NixcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTU2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk2LFxuICAgICAgICA5OCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA1OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODgsXG4gICAgICAgIDgwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICA4NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTksXG4gICAgICAgIDgwLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjU1LFxuICAgICAgICA0OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM4LFxuICAgICAgICA1LFxuICAgICAgICA5NyxcbiAgICAgICAgMzksXG4gICAgICAgIDkyLFxuICAgICAgICA0MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDM1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI3LFxuICAgICAgICAzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDM2LFxuICAgICAgICA4NixcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MixcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA2LFxuICAgICAgICA1MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMCxcbiAgICAgICAgODYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDU0LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDU2LFxuICAgICAgICA0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMSxcbiAgICAgICAgNjgsXG4gICAgICAgIDUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzNixcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI2LFxuICAgICAgICA2LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImtRN2YxMEt5WEZURCtZc09IRnhOVEZLYldod05EKzJmbDhidXlQMHhtL2M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInpxNVBnejZ6US15bS1IMjhCdndiTWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzllZTk4MWQtMzhiMC00Y2Y0LTgwMDAtMzE3NDczN2I0M2QwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyOSxcbiAgICAgIDE5OSxcbiAgICAgIDE3MixcbiAgICAgIDE3MCxcbiAgICAgIDIzNCxcbiAgICAgIDkyLFxuICAgICAgMjI0LFxuICAgICAgMjQ0LFxuICAgICAgMjMxLFxuICAgICAgMTUwLFxuICAgICAgODUsXG4gICAgICA3MixcbiAgICAgIDQsXG4gICAgICAxOSxcbiAgICAgIDExNixcbiAgICAgIDEyOCxcbiAgICAgIDgzLFxuICAgICAgMTgyLFxuICAgICAgMTc5LFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAxMDIsXG4gICAgICAyMDAsXG4gICAgICAyNTQsXG4gICAgICAyMTYsXG4gICAgICA3NSxcbiAgICAgIDEyNyxcbiAgICAgIDQ2LFxuICAgICAgMTUxLFxuICAgICAgMTkzLFxuICAgICAgMTUxLFxuICAgICAgMjM4LFxuICAgICAgMjQzLFxuICAgICAgMjUsXG4gICAgICAxNSxcbiAgICAgIDIzNCxcbiAgICAgIDE5MCxcbiAgICAgIDYzLFxuICAgICAgMjA5LFxuICAgICAgMjIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldNQ0xGTldYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMjc4MDIyNDI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInNoYW5cIixcbiAgICBcImxpZFwiOiBcIjIzODk3Njc2MTg3MjM5OToxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1BtUnBjOENFUFNNekxRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieFRZdnkvdklaTWt0Yys1TkR5SFVkemdXVFNPUHRGV0tCMXNiVDVRQlZFbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIySTFNazFrSGMwRTRGaDhPVjZxcjlJQWliUnFlakZvcWtrUHc2VjNuSUxWcHVLRE1TcWtxTFBpaUFLOSt4cWlDWmtwMThkVC81MjN5TmFuNFNiUi9DZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFRCt1b0lJY2lDWmxoQkZ2S29kSzRBYmd3bkRwQWxlckNCT0dLQytWbFZ0UmFYTzBNNCs2SzM3QkUyRTlEeDI0cVowM25CT0hVcjZXeURLa2VEU1dpUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwMjc4MDIyNDI6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA5MTE0NzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQZFJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBkUi5qc29uIjogIntcImtleURhdGFcIjpcIms4Y3M3Q0pHY1FlRnFzV1RsZHBKcUJZYjB1RzBHZHBRTS9kQkRjR29ub0k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzAzMTU0NDI1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA5MTE0ODU3MjJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Devil-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ DEVIL-KING²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • Devil ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "im' Devill",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "Devil"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "ture",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
