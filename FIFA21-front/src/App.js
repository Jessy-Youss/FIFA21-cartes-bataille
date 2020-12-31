import './App.css';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer'
import Routes from './Routes'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
