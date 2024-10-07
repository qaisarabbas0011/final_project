
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='OUR PROGRAM' title='What We Offer' />
        <Programs />
        <About />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='what student Says' />
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
