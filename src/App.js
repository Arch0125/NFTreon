import './App.css';
import IPFSUploader from './utils/IPFSUploader';
import Minter from './Minter'
import Uploadpage from './Uploadpage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Upload' element={<Uploadpage/>} />
        <Route path='/Mint' element={<Minter/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
