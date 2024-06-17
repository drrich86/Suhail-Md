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
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
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
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_58_05_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDYwLFxuICAgICAgICA5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDksXG4gICAgICAgIDExOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDgwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4LFxuICAgICAgICAzMSxcbiAgICAgICAgODEsXG4gICAgICAgIDU2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAzLFxuICAgICAgICAxODksXG4gICAgICAgIDc1LFxuICAgICAgICA0NixcbiAgICAgICAgMTgwLFxuICAgICAgICA1MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNyxcbiAgICAgICAgODAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICA1OSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAxODEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDksXG4gICAgICAgIDQyLFxuICAgICAgICA3MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjE3LFxuICAgICAgICA1OSxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQzRETlR1WlJzY1FNblpNTzl4ZEJ1dFRhV0pPTjJMYU01M2N1ZVpqQ1NjYz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidDlsbU5BT3FRUC0tenFlWGV4RlJjZ1wiLFxuICBcInBob25lSWRcIjogXCIwMTBlOGY1My05MzA3LTRhOTMtYmQ1Zi02NzAyYzE1NDM5ZGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzcsXG4gICAgICA2NyxcbiAgICAgIDE0NSxcbiAgICAgIDIwMyxcbiAgICAgIDI1MyxcbiAgICAgIDI3LFxuICAgICAgMTkxLFxuICAgICAgMTksXG4gICAgICAxODMsXG4gICAgICAxNjAsXG4gICAgICAxNzUsXG4gICAgICAxMjUsXG4gICAgICAxMzgsXG4gICAgICAxNixcbiAgICAgIDY5LFxuICAgICAgNzUsXG4gICAgICAxNzksXG4gICAgICAyMDcsXG4gICAgICAxNDgsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDE4OSxcbiAgICAgIDIyMSxcbiAgICAgIDU1LFxuICAgICAgMTM3LFxuICAgICAgMjksXG4gICAgICA5NCxcbiAgICAgIDY1LFxuICAgICAgMTMwLFxuICAgICAgMTc1LFxuICAgICAgMTMzLFxuICAgICAgMTM0LFxuICAgICAgOTEsXG4gICAgICAyMDksXG4gICAgICA2OCxcbiAgICAgIDExOSxcbiAgICAgIDIwNCxcbiAgICAgIDIsXG4gICAgICAzNCxcbiAgICAgIDIyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1B6OWtjY0hFTFA2bjdJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRDdnYkJLSFUwK2xJVkhwREllVjNwSGFESXg3a0dwbUMzS0tqT0htTExWQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJCdnNqc2lwelhrRnFhVSt1bWNjZjNaamtOdndOUVh3NllKNWhSUlhiQU9vcUJnZjZqdnFBYW1JQUxNYzlrYlU0a3pWMkkzSlp5NFgrTDM2VnV5d0hEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXd25ienZvclFyR0t1S0Y5WlYybC9PZm1ZcDJyRjFoQmI1aExNdmltSUt2elNXTkMvdS9JUCswVHRJMkFOeC9uNDAxdzVobHByVXJoWjB1aFMwT0lBUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTYyNzc4Njg4Njo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NjI5ODk4NDk2ODMwMDo0QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjI3Nzg2ODg2OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE1OTkzOTEzXG59Igp9"  // PUT your SESSION_ID 


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
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
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
