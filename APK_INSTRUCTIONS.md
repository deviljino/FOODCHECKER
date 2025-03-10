# הוראות ליצירת קובץ APK מהפרויקט

קיימות שתי אפשרויות פשוטות ליצירת APK מהפרויקט:

## אפשרות 1: שימוש בשירות HTML2APP (הפתרון המהיר ביותר)

1. דחוס את תיקיית `out` לקובץ ZIP
   - לחץ לחיצה ימנית על תיקיית `out` 
   - בחר "שלח אל" > "תיקייה דחוסה (מכווצת)"

2. היכנס לאתר https://html2app.dev/

3. לחץ על כפתור "Build Android App" והעלה את קובץ ה-ZIP שיצרת

4. המתן לסיום התהליך והורד את ה-APK המוכן

## אפשרות 2: שימוש ב-Android Studio

1. הורד והתקן את Android Studio מהקישור: https://developer.android.com/studio

2. פתח את Android Studio ובחר "Open an Existing Project"

3. נווט לתיקיית `android` בפרויקט שלך (הנתיב: C:\Users\xdevijno\Desktop\FoodChecker\template-2-main\android)

4. המתן לטעינת הפרויקט והשלמת הסנכרון של Gradle

5. בחר בתפריט "Build" > "Build Bundle(s) / APK(s)" > "Build APK(s)"

6. המתן לסיום הבנייה - ה-APK יהיה זמין בנתיב:
   `android/app/build/outputs/apk/debug/app-debug.apk`

## הסבר על התיקיות והקבצים בפרויקט

- תיקיית `out`: מכילה את הקבצים הסטטיים של האפליקציה (HTML, CSS, JavaScript)
- תיקיית `android`: מכילה את פרויקט האנדרואיד שמארח את האפליקציה

## הערות חשובות

- האפליקציה נבנתה עם Capacitor, שמאפשר להפוך אפליקציות ווב לאפליקציות מובייל
- הקבצים בתיקיית `out` כבר מוכנים ומותאמים לבניית APK
- ה-APK שייווצר יתאים לכל מכשיר אנדרואיד עם גרסת אנדרואיד 5.0 ומעלה 