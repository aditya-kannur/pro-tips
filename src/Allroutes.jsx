import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home';
import Contacts from './Components/Contacts';
import Form from './Components/Forms';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/pro-tips' element={<Home />} />
      <Route path='/registration' element={<Form />} />
      <Route path='/contacts' element={<Contacts />} />
    </Routes>
  );
};

export default AllRoutes