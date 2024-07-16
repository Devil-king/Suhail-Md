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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_31_07_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDc1LFxuICAgICAgICA0OSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNixcbiAgICAgICAgOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDQsXG4gICAgICAgIDYzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzksXG4gICAgICAgIDUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM1LFxuICAgICAgICA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICA0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMixcbiAgICAgICAgODEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDksXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxLFxuICAgICAgICA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzksXG4gICAgICAgIDc5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDkxLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc1LFxuICAgICAgICAyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDc5LFxuICAgICAgICA4MixcbiAgICAgICAgMTExLFxuICAgICAgICA4NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJWStNaTFnSkt1RjZGS0RtRldma1ZWd2k3bUFsVzh4c0gxVXFlNFFYdkNRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzExOTQxNjA1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTVBRDIzNTY5OERENkYyOUEzRTVERTc3QzM2NjJGN0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwOTA5ODgzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkZmUDI3RHdpUzlHZXg2V1U2b1lBRkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDk4ZWYwOWYtNDgzYy00OTI1LWI1ZWQtMGJkMTNmMmNmMzRmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgMjIzLFxuICAgICAgMTgzLFxuICAgICAgMTI0LFxuICAgICAgNDgsXG4gICAgICA3NSxcbiAgICAgIDQxLFxuICAgICAgNjMsXG4gICAgICAyMTYsXG4gICAgICAyMTksXG4gICAgICAxNjQsXG4gICAgICAyNDQsXG4gICAgICA0MixcbiAgICAgIDksXG4gICAgICAyNTQsXG4gICAgICAyMjEsXG4gICAgICAyMTMsXG4gICAgICA3MixcbiAgICAgIDE1NixcbiAgICAgIDE4OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDMsXG4gICAgICAxNjQsXG4gICAgICA5NSxcbiAgICAgIDU4LFxuICAgICAgMjQ4LFxuICAgICAgNDMsXG4gICAgICAxOTQsXG4gICAgICAxNTYsXG4gICAgICAxMTksXG4gICAgICAxMzEsXG4gICAgICAxMDQsXG4gICAgICAyNTIsXG4gICAgICA5OSxcbiAgICAgIDIyMixcbiAgICAgIDE5OCxcbiAgICAgIDQyLFxuICAgICAgNzgsXG4gICAgICAxODIsXG4gICAgICAxNjUsXG4gICAgICA2NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaTjdZQzNRUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMTE5NDE2MDU4OjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRGV2aWxcIixcbiAgICBcImxpZFwiOiBcIjE0MDkwMTExNjU1NTQyMjo2NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMQ1VvTHNDRUxLQXpMUUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlVDY015NGVtUy9oOFNKTnVsVHFnY1RKbmUrVUUzUzE1TmZmY1UzMGpnRXc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZUNjNWY0V29vSEVIY253b05nejVVOFpYWXQzUkNLbHNoMkt6cllMMlRtZ0kvN0tkWW45b2RnYU5RT2pOMDJHTFNkOGhRMmxvSDBTSkt4YlJtbVRyQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQWV5SERHRFJ0SlJTUStJcWpPWDU0eEZCUlJjd0JiSEoyOFlCbDM3S0xWUjRoR2lKTFc0cUp4bVFWdm1iZnlHR1YzMGR2NFYrL3ZlVXE1cmN3T1NHQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTE5NDE2MDU4OjY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDkwOTg3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUVONlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRU42Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiR2VFaTB1VVVnM1V3dTZySUd1MTVmdDVXTzgwcTNKcktWQ25lYzVESVlPVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2NjExMjk3NzYsXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDVdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDg5ODc1MDgxMlwifSIKfQ=="  // PUT your SESSION_ID 


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
