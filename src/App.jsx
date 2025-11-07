import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Jobs from './components/Jobs';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Jobs />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
