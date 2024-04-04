
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contacts from './Components/Contacts';
import Form from './Components/Forms';
import Navbar from './NavBar';
import './App.css'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Form />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
