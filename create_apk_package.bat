@echo off
echo =================================
echo מכין קובץ ZIP עבור בניית APK
echo =================================

echo 1. דוחס את תיקיית out לקובץ ZIP...
powershell -command "Compress-Archive -Path out -DestinationPath out_for_apk.zip -Force"

echo 2. הקובץ נוצר בהצלחה! הקובץ נשמר בשם: out_for_apk.zip
echo.
echo 3. כעת עליך להעלות את הקובץ לאתר HTML2APP:
echo    https://html2app.dev/
echo.
echo 4. לחץ על "Build Android App" והעלה את הקובץ out_for_apk.zip
echo.
echo 5. המתן להורדת קובץ ה-APK המוכן
echo =================================

pause 