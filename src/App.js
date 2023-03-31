import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import PaginateSection from './pages/PaginateSection';
import Background from './components/Background';
import Header from './components/Header';
import { Provider } from 'react-redux';

function App() {
  return (
    <BrowserRouter> 
      <Background></Background>
      <Header></Header>
      <Routes path='/'>
        <Route index element={<Main Section={PaginateSection}/>} exact/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
