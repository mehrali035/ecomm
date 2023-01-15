import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import ProductsContextProvider from './Global/ProductsContext';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <div>
        <ProductsContextProvider>
          <Router>
            <Navbar />
            <Banner />
            <Routes>
              <Route exact path="/" component={<Products />} />
              <Route  path="/cart" component={<Cart />} />
            </Routes>
          </Router>
        </ProductsContextProvider>
      </div>
    </>
  );
}

export default App;
