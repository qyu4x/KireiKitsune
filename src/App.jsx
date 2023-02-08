import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from "./pages/Cart";
import Comments from './pages/Comments';
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";


const App = () => {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/comments" element={<Comments/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/ProductList" element={<Product/>}/>
          <Route exact path="/Product" element={<ProductList/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>
    </Router>
  );
}

export default App;