import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import PaginateSection from './pages/PaginateSection';
import Background from './components/Background';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter> 
      <Background></Background>
      <Header></Header>
      <Main Section={PaginateSection}/>
    </BrowserRouter>
  
  );
}

export default App;
