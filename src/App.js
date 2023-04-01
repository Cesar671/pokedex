import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import PaginateSection from './pages/PaginateSection';
import Background from './components/Background';
import Header from './components/Header';
import Pokemon from './pages/Pokemon';

function App() {
  return (
    <BrowserRouter> 
      <Background></Background>
      <Routes path='/'>
        <Route index element={<Main Section={PaginateSection}/>} exact/>
        <Route path='pokemon/:id' element={<Pokemon />} exact/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
