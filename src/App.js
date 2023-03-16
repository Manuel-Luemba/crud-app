
import './App.css';

import Menu from './Menu';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ViewEstudante from './components/ViewEstudante';
import AddEstudante from './components/AddEstudante';
import EditEstudante from './components/EditEstudante';


function App() {
  return (
    <>
    <Router>
    
   <Menu />

   <Routes>
    <Route path="/" element={<ViewEstudante />} />
    <Route path="/add-student" element={<AddEstudante />} />
    <Route path="/edit-student/:id" element={<EditEstudante />} />
   </Routes>

   </Router>
    </>
  );
}

export default App;
