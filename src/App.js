import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Register from './components/Register';
import Welcome from './components/Welcome';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Register/>}/>
        <Route path='/welcome' element={<Welcome/>}/> 
      </Routes>
      
      </BrowserRouter>
  );
}

export default App;
