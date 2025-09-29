import React from "react"
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home'
import Header from "./components/Header";
import AddRecipeForm from "./components/Add_Recipe";
import Box from '@mui/material/Box';



const App = () => {
  return (
    <Router>
      <Box sx={{m: 0, p: 0}}>
        <Header/>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-recipe' element={<AddRecipeForm />}/>
      </Routes>
      </Box>
    </Router>
  );
};

export default App
