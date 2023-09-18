import logo from './logo.svg';
import './App.css';
import Guichet from './pages/Guichet';
import Footer from './components/Footer';

function App() {
  // document.addEventListener('contextmenu', (e) => {
  //   e.preventDefault();
  // });
  return (
    <div className="page">
      <Guichet />
      <Footer />
    </div>
  );
}

export default App;
