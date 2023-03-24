import { About, Contact, Experience, Hero, Navbar, Tech, Works } from './components'
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Experience />
        <Works />
        <Contact />
      </div>
    </BrowserRouter>
  )
};

export default App
