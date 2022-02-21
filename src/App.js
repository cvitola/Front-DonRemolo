/*import logo from './logo.svg';*/
import './App.css';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar'
import Router from './Router/Router';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
