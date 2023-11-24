import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Digs from './components/Digs';
import Create from './components/Create';
import Current from './components/Current';
import CreateUser from './components/CreateUser';
import DataDisplay from './components/DataDisplay';
import DataPage from './components/DataPage';
import Search from './components/Search';
import Update from './components/Update';
import SearchResults from './components/SearchResults';
import ResultDetails from './components/ResultDetails';
import Completed from './components/Completed';
import CompletedDetails from './components/CompletedDetails';



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
          <Route path="/datadisplay" element={<DataDisplay />} />
          <Route path="/datapage" element={<DataPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/searchresults" element={<SearchResults />} />
          <Route path="/update/:documentId" element={<ResultDetails />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/completed/:documentId" element={<CompletedDetails />} />
        </Routes>
      </Router>
     
  );
}

export default App;
