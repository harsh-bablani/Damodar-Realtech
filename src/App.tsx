import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Directors from './components/Directors';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Directors />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
