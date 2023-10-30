import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Digs from './components/Digs';
import Create from './components/Create';
import Current from './components/Current';
import CreateUser from './components/CreateUser';


function App() {

  return (

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/digs" element={<Digs />} />
          <Route path="/create" element={<Create />} />
          <Route path="/current" element={<Current />} />
          <Route path="/createuser" element={<CreateUser />} />

        </Routes>
      </Router>
     
  );
}

export default App;
