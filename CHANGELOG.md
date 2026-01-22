# Changelog

All notable changes to this project will be documented in this file.  
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)  
and the project adheres to [Semantic Versioning](https://semver.org/).

---

## [0.1.0] - 2026-01-22

### Initial Release (MVP Setup)

First public version of the project.  
Goal: establish a **clean**, **scalable**, and **MVP-oriented** technical foundation for an asynchronous social mobile game.

---

### Added

- Project initialization with **Expo**
- **Expo Go** configuration for fast development
- Feature-based project structure
- **NativeWind** setup (utility-first styling for React Native)
- **@expo/vector-icons** integration
- ESLint configuration
- Standard Expo scripts (`start`, `android`, `ios`)
- GitHub Actions **CI pipeline**
- Deployment workflow setup
- GitHub templates (issues, conventions)
- Base documentation (`README`, `CHANGELOG`)

---

### Architecture

- Clear separation between:
  - Generic UI components
  - Business features (auth, session, challenge, score)
- Prepared for:
  - Firebase backend
  - Push notifications
  - Multiplayer game sessions

---

### Known Limitations

- No backend connected yet
- No gameplay logic implemented
- No remote persistence
- Minimal UI (structure-first approach)

---

### Next Steps (0.2.0)

- Anonymous authentication
- Create / join game sessions
- Real-time player synchronization
- First simple challenges
