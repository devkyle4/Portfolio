import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Publications from './components/Publications'
import Media from './components/Media'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-black font-sans antialiased selection:bg-black selection:text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-14 sm:pt-20 pb-28">
        <Hero />
        <Projects />
        <Publications />
        <Media />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
