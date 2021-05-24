import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/permanentes/header'
import Nav from './Components/permanentes/nav'
import Footer from './Components/permanentes/footer'
import CardContainer from './Components/card/cardContainer'
import ItemDetailContainer from './Views/detalles/itemDetailContainer'
import Home from './Views/home'
import Cart from './Views/cartContainer'
import { CartProvider } from './Contextos/cartContext';
import './App.scss';
function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Header/>
          <Nav/>
          <Switch>
            <Route path ="/" exact component={Home}/>
            <Route path ="/item/:id" component={ItemDetailContainer}/>
            <Route path ="/category/:id" component={CardContainer}/>
            <Route path ="/cart" component={Cart}/>
          </Switch>
          <Footer/>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
