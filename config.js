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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa,Dodoma";
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
global.userImages= process.env.USER_IMAGES || "https://moewalls.com/movies/miles-morales-neon-snowy-night-spider-man-live-wallpaper/" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_53_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDk2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxODEsXG4gICAgICAgIDU2LFxuICAgICAgICA1MixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzLFxuICAgICAgICA0MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAwLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY5LFxuICAgICAgICA1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMixcbiAgICAgICAgMTQwLFxuICAgICAgICA2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjksXG4gICAgICAgIDc4LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MixcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwLFxuICAgICAgICA2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDExLFxuICAgICAgICAxODgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDMyLFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzLFxuICAgICAgICAzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxODMsXG4gICAgICAgIDM3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQ3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDgsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDgsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJSQjJiQXdrNTRXN1BHdWM3NXJPOXlHTW9KQnFOeTgxTXlsS1BrUUtYUFRvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJKQXgwXy12LVNoQ0JiQkVpbl9KNTR3XCIsXG4gIFwicGhvbmVJZFwiOiBcImU2MDY2YzgzLTdlMGItNDg3ZC1hYzhkLWYxNTcyN2E2NTcwMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OCxcbiAgICAgIDEwMixcbiAgICAgIDEwNCxcbiAgICAgIDE1NixcbiAgICAgIDIxNSxcbiAgICAgIDE2MyxcbiAgICAgIDYsXG4gICAgICA3OSxcbiAgICAgIDE1LFxuICAgICAgMjEwLFxuICAgICAgODQsXG4gICAgICAxODEsXG4gICAgICAyNTEsXG4gICAgICAxMTEsXG4gICAgICAzLFxuICAgICAgMjQ4LFxuICAgICAgNTIsXG4gICAgICAyNDQsXG4gICAgICAyMjIsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzQsXG4gICAgICAxMjIsXG4gICAgICAyNCxcbiAgICAgIDkyLFxuICAgICAgMTA0LFxuICAgICAgMTkzLFxuICAgICAgMTkxLFxuICAgICAgMjM3LFxuICAgICAgMTA2LFxuICAgICAgNjYsXG4gICAgICAwLFxuICAgICAgMTA0LFxuICAgICAgMzIsXG4gICAgICAyMzksXG4gICAgICAxNzUsXG4gICAgICAyMjQsXG4gICAgICAyMDgsXG4gICAgICAxMTUsXG4gICAgICAxMzcsXG4gICAgICAxMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMVQyWEM5OVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTYyNzc4Njg4Njo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NjI5ODk4NDk2ODMwMDo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AzOWtjY0hFTG1Na0xRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRDdnYkJLSFUwK2xJVkhwREllVjNwSGFESXg3a0dwbUMzS0tqT0htTExWQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFdVJ1SG9JRHJVdzB1Qzl6blNUK3pNTi9TRGU4enJsNFZqVVprckhLTWdjWlJlUE4ycnRwVEtvdVNHY1pVeEg4VHBDdmw5cmEraVl2ajBBY3d5V1hBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJLRUZscUtXZ21hKzlQM3ZKYUJKUFZKZUNiRmo4V1VKZGZRenQ2VWl5Y2dWNVR3T0ZiN29zN0RsSGVoVE41ZFJjbGFqS240ajJhNHA3TlJWTUN4cWdEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU2Mjc3ODY4ODY6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5MjgzODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNY2pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1jai5qc29uIjogIntcImtleURhdGFcIjpcIkVlOUNEaXJKenFPZXFQNnpvNUE5MmpSc2Zib2JBdUcvWU51ejZYV2RhL1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjAyODI0MDYzNyxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTk5Mjc4Njk5MDdcIn0iCn0="  // PUT your SESSION_ID 


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
  KOYEB_API : process.env.KOYEB_API  || "ui561xo63kec4v1gbuzqccerxp96c2uc4nmvk5j0fg2fh5cvj1cbqj6fy232zhyg",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-drrich8600-ccinwOp6eE5nmkTBqm5NT3BlbkFJndfMhtazPYWzPypVkGq9",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "𝔻𝒓. 𝐑ⅈ𝐜𝒉-MD"  ).toUpperCase(),



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
