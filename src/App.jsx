
import HeroSection from './components/HeroSection'
import About from './components/About'
import NoticeList from './components/NoticeList'
import DownloadList from './components/DownloadList'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NoticeTicker from './components/NoticeTicker'  
import TopInfoBar from './components/TopInfoBar'
import MainHeader from './components/MainHeader'
import NavigationBar from './components/NavigationBar'


function App() {
  return (
    <>
      <TopInfoBar /> 
      <MainHeader/>
      <NavigationBar />
      <NoticeTicker />
        <HeroSection />
        <About />
        <NoticeList />
        <DownloadList />
        <Contact />
      <Footer />
    </>
  )
}

export default App
