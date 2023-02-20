import './style.css';
import NavBar from './components/NavBar.js';
import Banner from './components/Banner.js';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
