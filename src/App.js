import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Shared/Header/Header';
import Packages from './Components/Packages/Packages';
import PackageDetails from './Components/PackageDetails/PackageDetails';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={ <Home></Home> } ></Route>
        <Route path='/home' element={ <Home></Home> } ></Route>
        <Route path='/packages' element={ <Packages></Packages> }  ></Route>
        <Route path='packinfo/:id' element={ <PackageDetails></PackageDetails> } ></Route>
      </Routes>
      <Footer></Footer> 
    </div>
  );
}

export default App;
