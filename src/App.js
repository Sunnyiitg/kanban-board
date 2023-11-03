import { useContext } from 'react';
import './App.css';
import { AppContext } from './context/AppContext';
import Navbar from './containers/Navbar/Navbar';
import Footer from './containers/Footer/Footer';
import Home from './containers/Home/Home';
function App() {
  const {lightMode} = useContext(AppContext);
  return (
    <div className={lightMode?"lightMode":"darkMode"} id="mainDiv">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}
export default App;
