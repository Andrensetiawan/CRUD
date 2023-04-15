import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './component/Home';
import Tambahdata from './component/Tambahdata';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/home'element={<Home/>}/>
        <Route path='/tambahdata' element={<Tambahdata/>}/>
      </Routes>
    </div>
  );
}

export default App;
