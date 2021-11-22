import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from 'react-router';

function App() {
  return (
    <Router> 
    <div className='max-w-screen-md mx-auto pt-20'>
      <Routes> 
      <Route exact path='/' element={<Home />} /> 
      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
