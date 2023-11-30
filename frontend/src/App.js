import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './Pages/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='bg'>
      <Navbar/>
      <LandingPage/>
      <Footer/>
    </div>
    
  );
}

export default App;
