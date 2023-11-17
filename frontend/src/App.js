import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './Pages/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Navbar/>
      <LandingPage/>
    </div>
  );
}

export default App;
