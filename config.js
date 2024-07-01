const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Dar es Salaam,Tanzania."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://drrich:Dr.Rich@8600@cluster0.nzuiaok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa,Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/KdJInxet8xtDxAFlO1JcH5";
global.website=process.env.GURL || "https://chat.whatsapp.com/KdJInxet8xtDxAFlO1JcH5" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "255627786886" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255744822228";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255627786886";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "255627786886";
global.read_status_from =  process.env.READ_STATUS_FROM  || "255627786886";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_37_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDU5LFxuICAgICAgICA2MixcbiAgICAgICAgMTcxLFxuICAgICAgICAzMixcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwLFxuICAgICAgICAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMixcbiAgICAgICAgMzksXG4gICAgICAgIDE0NixcbiAgICAgICAgMzUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY0LFxuICAgICAgICAzOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMixcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA3LFxuICAgICAgICA5NixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDU2LFxuICAgICAgICA3MSxcbiAgICAgICAgNixcbiAgICAgICAgMTUxLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIzLFxuICAgICAgICA2NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQwLFxuICAgICAgICA0NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNCxcbiAgICAgICAgNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM0LFxuICAgICAgICA4NSxcbiAgICAgICAgMixcbiAgICAgICAgMTQwLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2NixcbiAgICAgICAgNixcbiAgICAgICAgMjMyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTM0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAyNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDU0LFxuICAgICAgICA1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgODAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNzYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiTmgzZExoc2hJQW1SYXB3ZGRJNGNGSENzTHRXakNBNUExNzVrZklEVC9hZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia1ZXMXowZEVSQk9UU05vY3YzLWNDZ1wiLFxuICBcInBob25lSWRcIjogXCI4NDQ1YzVjMS00MTgzLTQ1ZDYtODgxZi00MjJkMzc4OWU4NDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQwLFxuICAgICAgNDAsXG4gICAgICA0LFxuICAgICAgNjgsXG4gICAgICAyMDEsXG4gICAgICA2LFxuICAgICAgMTkwLFxuICAgICAgMTc3LFxuICAgICAgOTgsXG4gICAgICAyMDMsXG4gICAgICAzNCxcbiAgICAgIDgyLFxuICAgICAgNzAsXG4gICAgICAxNzUsXG4gICAgICA2NixcbiAgICAgIDkxLFxuICAgICAgMTI2LFxuICAgICAgNjQsXG4gICAgICAxNjQsXG4gICAgICAxNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMzMsXG4gICAgICA2NCxcbiAgICAgIDE3OCxcbiAgICAgIDI0NSxcbiAgICAgIDUyLFxuICAgICAgMTY4LFxuICAgICAgMTU1LFxuICAgICAgNDYsXG4gICAgICAyNCxcbiAgICAgIDI2LFxuICAgICAgMTE3LFxuICAgICAgODEsXG4gICAgICA2NCxcbiAgICAgIDEwMSxcbiAgICAgIDIxMCxcbiAgICAgIDI0NCxcbiAgICAgIDI0MCxcbiAgICAgIDEsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWUJRVjhZQUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTYyNzc4Njg4Njo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NjI5ODk4NDk2ODMwMDo2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AzOWtjY0hFTmFmaDdRR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRDdnYkJLSFUwK2xJVkhwREllVjNwSGFESXg3a0dwbUMzS0tqT0htTExWQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsaGFHcHJNREgxRlRDZ3JoSXo4VFlmVUpPeVVZL3A0YmJzc0NsVlJKYU4yd3RpTUVLL3BBY2pNQUFFcThNa1VDOHFxL2VGd0xHZ1hnU1RFeG9hUmNDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrYm5ZekZlbHBRUGhTSHV6V0xJS3dZbC84NERteGtFL2x0cUJrZFpDSzNKN0dKY21CdzBka0J5TlVwampyejdFM25BV3lNYmdWNDZ6OTZIVFc5dmtDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2Mjc3ODY4ODY6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk3ODMzOTFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Richard James",
  packname: process.env.PACK_NAME || "༼⁠ ⁠つ⁠ ⁠◕⁠‿⁠◕⁠ ⁠༽⁠つ✨",
  botname : process.env.BOT_NAME  || "𝔻𝒓. 𝐑ⅈ𝐜𝒉_Bot👻",
  ownername:process.env.OWNER_NAME|| "𝔻𝒓. 𝐑ⅈ𝐜𝒉💉",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "true",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-drrich8600-ccinwOp6eE5nmkTBqm5NT3BlbkFJndfMhtazPYWzPypVkGq9",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
