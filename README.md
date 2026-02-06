# 🎮 Game Name (working title)

### Asynchronous Social Multiplayer Mobile Game

<div align="center">

[![Expo](https://img.shields.io/badge/Expo-SDK-black?style=for-the-badge&logo=expo)](https://docs.expo.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-0.7x-61DAFB?style=for-the-badge&logo=react)](https://reactnative.dev/)
[![NativeWind](https://img.shields.io/badge/NativeWind-4.1-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=61DAFB)](https://www.nativewind.dev/)

[![CI](https://github.com/Kirabill/social-game/actions/workflows/ci.yml/badge.svg)](https://github.com/Kirabill/social-game/actions/workflows/ci.yml)

**A social, in-person, asynchronous mobile game built with Expo and React Native**

[🐛 **Signaler un bug**](https://tally.so/r/) • [💬 **Discuter**](https://github.com/Kirabill/social-game/)

[![social-game](<https://img.shields.io/badge/socialgame-Bêta(0.2.0)-b55447?style=for-the-badge&logo=react&logoColor=b55447>)](https://github.com/Kirabill/social-game/)

</div>

---

## 📋 Table of Contents

- [🎯 About](#-about)
- [🕹️ Game Concept](#️-game-concept)
- [✨ Planned Features](#-planned-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ Architecture](#️-architecture)
- [🚀 Getting Started](#-getting-started)
- [📚 Documentation](#-documentation)
- [📞 Contact](#-contact)

---

## 🎯 About

This project is a **social multiplayer mobile game**, designed to be played **in person**, over several hours or even multiple days.

Each player:

- uses their **own smartphone**
- receives **secret challenges**
- interacts with others through **human validation**
- progresses through a **hidden leaderboard**, revealed at the end

🎯 Main goal:

> Create fun, social, competitive moments without constantly demanding players’ attention.

---

## 🕹️ Game Concept

- 👥 **4 to 10 players (or more)**
- 📱 One mobile app per player
- 🔔 Challenges delivered via notifications
- 🧠 Challenge types:
  - individual
  - collaborative
  - multi-level (difficulty = points)
- ⏸️ Game session:
  - can be paused
  - resumed anytime
- 🏆 Leaderboard:
  - real-time
  - hidden most of the time

---

## ✨ Planned Features

### 🎮 Gameplay

- Secret challenges per player
- Human validation system
- Progressive scoring system
- Dynamic leaderboard

### 🤝 Social

- Player-to-player notifications
- Collaborative challenges
- Asynchronous interactions

### ⚙️ Technical

- Persistent game sessions
- Basic anti-cheat mechanisms
- Partial offline support

---

## 🛠️ Tech Stack

### 📱 Mobile

- **Expo** – tooling & runtime
- **React Native** – native UI
- **NativeWind** – utility-first styling for RN
- **@expo/vector-icons** – icon library

### 🔧 Tooling

- **Expo Go** – fast local development
- **ESLint** – code quality
- **GitHub Actions** – CI / CD

### 🔥 Backend (planned)

- **Firebase**
  - Anonymous authentication
  - Firestore
  - Cloud Functions
  - Push notifications

---

## 🏗️ Architecture

```bash
src/
├── components/ # Generic UI components
├── features/ # Domain-based business logic
│ ├── auth
│ ├── session
│ ├── challenge
│ ├── validation
│ └── score
├── screens/ # App screens
├── navigation/ # Navigation logic
├── services/ # Firebase / APIs
├── hooks/ # Shared hooks
└── utils/ # Helpers & utilities
```

🎯 Architecture goals:

- Fast MVP iteration
- Scalability
- Easy maintenance

---

## 🚀 Getting Started

### Requirements

- Node.js ≥ 18
- Expo Go (Android / iOS)

#### Install dependencies

```bash
npm install
```

#### Start the app

```bash
npx expo start
```

📱 Scan the QR code using Expo Go

### 📚 Documentation

📞 Contact
Full Stack Developer

🐙 GitHub: [KiraBill](https://github.com/Kirabill)

<div align="center">
⭐ Feel free to star the project if you like it

</div> ```
