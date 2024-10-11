import './App.css';
import Navbar from './Components/Navbar.js';
import Routers from './router.js';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/' && <Navbar />}
      <Routers />
    </>
  );
};

export default App;
