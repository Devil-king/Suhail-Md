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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_24_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDE0LFxuICAgICAgICA4MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc4LFxuICAgICAgICAxODQsXG4gICAgICAgIDY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg4LFxuICAgICAgICA3NixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDk2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDg4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA1OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICA2MCxcbiAgICAgICAgODksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNyxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgNTQsXG4gICAgICAgIDg4LFxuICAgICAgICA1LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MyxcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA1MixcbiAgICAgICAgNzksXG4gICAgICAgIDI0NixcbiAgICAgICAgOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODEsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ1LFxuICAgICAgICA3NixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MCxcbiAgICAgICAgODQsXG4gICAgICAgIDY0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQzLFxuICAgICAgICA2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzAsXG4gICAgICAgIDY4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTc1LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUHNBRzBLRC9PVnhMNVhlUEJiVlhKWmI4VVlDOFdFL1NpSmR2R1pSYklGQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjEzMjg2MzE5MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkExRUM0MTM2QTRGNTVDNDhFNjU4MjFEQzI1M0Q0Qzg0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxODE2OTg2NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI2MTMyODYzMTkyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNEI5MzFERDc1NTgzNkM0OTFEQTNGMzc1RjBDMjE3Q0ZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE4MTY5ODY2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNjNXhncUlKUzN1eEYtd2U1dFZINHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWI5OTVhMTYtMjU1Ny00MGFhLTkyZGQtMzZmZjQzZmY4OTVmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkwLFxuICAgICAgMTk0LFxuICAgICAgNDMsXG4gICAgICAxNjYsXG4gICAgICAyMTYsXG4gICAgICAyMjcsXG4gICAgICAxNTAsXG4gICAgICAxOCxcbiAgICAgIDEzNixcbiAgICAgIDMxLFxuICAgICAgMjM1LFxuICAgICAgMTY5LFxuICAgICAgNTQsXG4gICAgICAxNjMsXG4gICAgICA5LFxuICAgICAgMTEzLFxuICAgICAgMTc1LFxuICAgICAgMjEyLFxuICAgICAgMTE5LFxuICAgICAgNzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgMjM4LFxuICAgICAgMjI2LFxuICAgICAgMjQsXG4gICAgICAyNDcsXG4gICAgICAxNzksXG4gICAgICA0NyxcbiAgICAgIDExOCxcbiAgICAgIDE5OCxcbiAgICAgIDIwMSxcbiAgICAgIDgwLFxuICAgICAgNjMsXG4gICAgICAxNTksXG4gICAgICAxOTMsXG4gICAgICAxNjQsXG4gICAgICAxMDgsXG4gICAgICA1LFxuICAgICAgMTQxLFxuICAgICAgODEsXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRTJaUlZRTlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MTMyODYzMTkyOToyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE0MTQzMzI4MTIwOTIwOjIxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIktpbmdcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKdlArckFIRUlEaXBMTUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIngwM3lLNVgrS2xSNENhWUI2S3k3QjZxeVB2M3ZtWmh5YU1XWkNSSUhGeEk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaEc1dXRLUkVUbTlZL05QemhldEFPaGg5L1BIR3MyVFIwMnpRcGY4dldSc0M5THdhazUvbHVsMDhQY0xQN25ZWjFyRm9lbnk0RzJJaVdEenUyRUpkQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOXhoT1krc3JhS0MyaGZVZW5VaExreXJaVXBmSm9PZXJ6WVNCYVBtcW1OTm5nTFVFVDIvbHpVZEkxaG0vaTVJanlPUERvei9GaFcrYk1hZXZYaWIxRFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYxMzI4NjMxOTI5OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MTY5ODU5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS1J2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLUnYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUK0VvdW41UjJ6cjdnazFkd3ZoYVNqSVRRSkdjdWI2TG5WNnN0TFFkQTBZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5ODE3MjA0NzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxODA3NTE0ODY5OVwifSIKfQ=="  // PUT your SESSION_ID 


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


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
