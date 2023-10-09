
import './App.css';
import Header from './components/1Header/Header';
import HomePage from './components/2HomePage/HomePage';
import Footer from './components/z_Footer/Footer';
import GeneralPage from './components/GeneralPage/GeneralPage';
import Categories from './components/Categories/Categories';
import EachProduct from './components/EachProd/EachProduct';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div className="App">
     <Header />
     <Cart />
     <Footer />
    </div>
  );
}

export default App;
