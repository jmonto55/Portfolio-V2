import { About, Contact, Experience, Hero, Navbar, Tech, Works } from './components'
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <div className="scroll-smooth relative z-0 bg-primary dark:bg-slate-200">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Works />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  )
};

export default App
