import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import Article from './pages/Article';
import ArticleList from './pages/ArticleList';
import NevBar from "./components/NevBar";
import NotFound from "./pages/NotFound";


function App() {
  return (
   <Router> 
     <NevBar />
    <div className='max-w-screen-md mx-auto pt-20'>
      <Routes> 
      <Route exact path='/' element={<Home />} /> 
      <Route exact path='/About' element={<About />} /> 
      <Route exact path='/Article/:name' element={<Article />} /> 
      <Route exact path='/ArticleList' element={<ArticleList />} /> 
      <Route element={<NotFound />} /> 
      
      </Routes>
    </div>
   </Router>
  );
}

export default App;
