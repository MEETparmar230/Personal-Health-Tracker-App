# Personal Health Tracker (Expo React Native)

This repository scaffold implements the **Personal Health Tracker App** for the internship assignment. It uses **Expo** (managed workflow), **React Navigation**, and **AsyncStorage** to persist activities locally. The app contains: Welcome, Dashboard, Log Activity, and History screens.

---

## Project structure

```
personal-health-tracker-expo/
├─ App.js
├─ app.json
├─ package.json
├─ README.md
└─ src/
   ├─ navigation/
   │  └─ StackNavigator.js
   ├─ screens/
   │  ├─ WelcomeScreen.js
   │  ├─ DashboardScreen.js
   │  ├─ LogActivityScreen.js
   │  └─ HistoryScreen.js
   ├─ components/
   │  └─ SummaryCard.js
   ├─ store/
   │  └─ ActivitiesContext.js
   └─ utils/
      └─ storage.js
```

---

