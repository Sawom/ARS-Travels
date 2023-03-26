import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Shared/Header/Header';
import Packages from './Components/Packages/Packages';
import PackageDetails from './Components/PackageDetails/PackageDetails';
import Footer from './Components/Shared/Footer/Footer';
import About from './Components/About/About';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Shipment from './Components/Shipment/Shipment';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={ <Home></Home> } ></Route>
        <Route path='/home' element={ <Home></Home> } ></Route>
        <Route path='/about' element={ <About></About> } ></Route>
        <Route path='/packages' element={ <Packages></Packages> }  ></Route>
        <Route path='/register' element={ <Register></Register> } ></Route>
        <Route path='/login' element={ <Login></Login> } ></Route>
        <Route path='packinfo/:id' element={ <PackageDetails></PackageDetails> } ></Route>
        <Route path='/shipment' element={ <Shipment></Shipment> } ></Route>
        <Route path='*' element={ <NotFound></NotFound> } ></Route>
      </Routes>
      <Footer></Footer> 
    </div>
  );
}

export default App;
