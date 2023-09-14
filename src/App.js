import './App.css';
import Cardmini from './components/Cardmini';
import Footer from './components/Footer';
import Header from './components/Header';
import Middle from './components/Middle';
import Online from './components/Online';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <div className="App">
    <Header />
    <Middle />
    <Cardmini />
    <Online />
    <Testimonials />
    <Footer />
    </div>
  );
}

export default App;
