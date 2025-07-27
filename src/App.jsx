import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import NoticeList from './components/NoticeList'
import DownloadList from './components/DownloadList'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: '1100px', margin: '0 auto', backgroundColor: '#fff' }}>
        <HeroSection />
        <About />
        <NoticeList />
        <DownloadList />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
