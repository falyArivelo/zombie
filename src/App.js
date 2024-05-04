import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Chat from './components/Chat';
import Vittou from './components/Vittou';
import Courses from './components/Courses';
import Lesson from './components/Lesson';

import { Route, Routes, useLocation } from 'react-router-dom';
import './styles/page_transition.css'
import { AnimatePresence, motion as m } from 'framer-motion';
import Cursor from './components/Cursor';
import { createContext, useState } from 'react';
import './global.scss'

import message_fr from './components/Langues/fr.json'
import message_en from './components/Langues/en.json'
import { IntlProvider } from 'react-intl';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Login from './components/Authentification/login';
import Signup from './components/Authentification/signup';
// import HandDetection from './components/GestureRecognition/HandDetection';
import { Quiz } from './components/quizz/Quiz';

gsap.registerPlugin(ScrollTrigger);

const messages = {
  fr: message_fr,
  en: message_en,
}

export const ThemeContext = createContext(null)

// gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    console.log(theme)

    setTheme((curr) => (curr == "dark" ? "light" : "dark"))
    console.log(theme)
    // document.body.classList.toggle('theme-light', theme === 'dark');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <IntlProvider locale='en' messages={messages['en']} >
        <div className='App' id={theme}>
          <Cursor />
          <Navbar />
          {/* {!location.pathname.startsWith('/auth') && <Navbar />} */}
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} className='page' />
              <Route path="/about" element={<About />} className='page' />
              <Route path="/home" element={<Home />} className='page' />
              <Route path="/contact" element={<Contact />} className='page' />
              <Route path="/chat" element={<Chat />} className='page' />
              <Route path="/forum" element={<Chat />} className='page' />

              <Route path="/vittou" element={<Vittou />} className='page' />
              <Route path="/courses" element={<Courses />} className='page' />

              <Route path="/auth" element={<Login />} className='page' />
              <Route path="/auth/login" element={<Login />} className='page' />
              <Route path="/auth/signup" element={<Signup />} className='page' />
              <Route path="/lesson" element={<Lesson />} className='page' />


              <Route path="/quizz" element={<Quiz type="20" />} className='page' />
              
            </Routes>
          </AnimatePresence>
        </div>
      </IntlProvider>

    </ThemeContext.Provider>

  );
}

export default App;
