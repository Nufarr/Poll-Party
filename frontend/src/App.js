import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './Pages/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return ( <>
      <Router>
        <div className='bg'>
          <Navbar/>
          <Routes>
          <Route path='/' element={<LandingPage/>} />
          </Routes>
          <Footer/>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
