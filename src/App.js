import './App.css';
import { BrowserRouter,HashRouter , Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import PaginateSection from './pages/PaginateSection';
import Background from './components/Background';
import Header from './components/Header';
import Pokemon from './pages/Pokemon';
import Menu from './pages/Menu';

function App() {
  return (
    <HashRouter> 
      <Background></Background>

      <Routes path='/'>
        <Route index element={<Main Section={PaginateSection}/>} exact/>
        <Route path='/pokemon/:id' element={<Pokemon />} exact/>
      </Routes>
    </HashRouter>
  
  );
}

export default App;
