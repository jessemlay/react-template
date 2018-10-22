if not "%minimized%"=="" goto :minimized
set minimized=true
@echo off
cd "C:\Users\USER2\Desktop\webchat"

start /min cmd /C "nodemon server.js"
goto :EOF
:minimized