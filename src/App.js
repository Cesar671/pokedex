import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import CardSection from './pages/CardSection';

function App() {
  return (
    <BrowserRouter>
      <Routes path='/'>
        <Route index element={<Main Section={CardSection}/>} exact/>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
