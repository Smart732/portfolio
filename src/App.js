import{BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Contact from './compont/Contact';
import Home from './compont/Home';
import Navbar from './compont/Navbar';
import Project from './compont/Project';
import About from './compont/About';
import Features from './compont/Features';

function App() {
  
  return (

    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/features' element={<Features />}/>
        <Route path='/Project' element={<Project />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/About' element={<About />}/>
        {/* <Route path="/" element={<Home  amount={5000}/>}/>
        <Route path="/verify" element={<Success />}/> */}
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
