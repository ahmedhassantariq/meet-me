import './App.css';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Header/>
      <Blogs/>
      <Portfolio/>
      <Contact/>



    </div>
  );
}

export default App;
