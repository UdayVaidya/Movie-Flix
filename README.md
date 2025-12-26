# 🎬 MovieFlix — React Streaming UI

A modern **Netflix-style streaming UI** built with **React**.  
This project focuses on **real-world frontend logic**, clean component architecture, responsive design, and smooth user interactions.

---

## 🚀 Live Demo
👉 _Deployed on Vercel_  
(Add your Vercel link here after deployment)

---

## ✨ Features

- 🎥 **Hero Banner Carousel**
  - Auto-sliding background
  - Dynamic title, description, and tags
  - Overlay gradient for readability

- 📺 **Movie Sections**
  - Continue Watching
  - Trending
  - You Might Like
  - Horizontal scroll with arrow controls
  - Smooth scrolling using `scrollBy`

- 🎴 **Reusable Movie Cards**
  - Poster image
  - Season & episode info
  - Duration
  - Progress bar (continue watching style)

- 🧭 **Responsive Sidebar**
  - Desktop: fixed sidebar
  - Mobile: slide-in sidebar with overlay
  - Hamburger menu toggle
  - Overlay click to close

- 🔍 **Search Bar**
  - Mobile-friendly layout
  - Integrated with sidebar toggle

- 📱 **Fully Responsive**
  - Desktop, tablet, and mobile layouts
  - No horizontal overflow bugs
  - Touch-friendly interactions

---

## 🛠 Tech Stack

- **React** (Hooks: `useState`, `useEffect`, `useRef`)
- **CSS3**
  - Flexbox
  - Media Queries
  - Transitions & transforms
- **Vite / CRA** (any React setup)
- **Vercel** (deployment)

---

## 📁 Project Structure

```
src/
├── components/
│   ├── SideBar/
│   ├── HeroBanner/
│   ├── Section/
│   ├── MovieCard/
│   └── SearchBar/
│
├── Data/
│   └── movieData.js
│
├── assets/
│   └── icons/
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## 🧠 Key Learnings

- Component-driven UI architecture
- Data-driven rendering using `map()` and spread props
- Handling horizontal scroll without libraries
- Managing layout overflow bugs
- Mobile-first responsive design
- Sidebar animations without `display: none`
- Clean separation of UI, logic, and data

---

## 🧪 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 🔮 Future Improvements

- Route-based navigation (React Router)
- Skeleton loaders
- Keyboard navigation support
- Accessibility improvements (ARIA)
- Backend / API integration

---

## 👨‍💻 Author

**Built by:** Uday Vaidya 
Frontend Developer (React)

---

## ⭐ Feedback

If you find this project helpful or inspiring, feel free to ⭐ the repository.

Happy Coding 🚀
