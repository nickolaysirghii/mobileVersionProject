
import './App.css';
import Header from './components/1Header/Header';
import HomePage from './components/2HomePage/HomePage';
import Footer from './components/z_Footer/Footer';
import GeneralPage from './components/GeneralPage/GeneralPage';

function App() {
  return (
    <div className="App">
     <Header />
     <GeneralPage />
     <Footer />
    </div>
  );
}

export default App;
