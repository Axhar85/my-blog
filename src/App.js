import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from 'react-router';
import ArticleList from './pages/ArticleList';

function App() {
  return (
    <Router> 
    <div className='max-w-screen-md mx-auto pt-20'>
      <Routes> 
      <Route exact path='/' element={<Home />} /> 
      <Route exact path='/About' element={<About />} /> 
      <Route exact path='/Article' element={<Article />} /> 
      <Route exact path='/ArticleList' element={<ArticleList />} /> 
      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
