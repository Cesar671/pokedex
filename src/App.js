import './App.css';
import { BrowserRouter,HashRouter , Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import PaginateSection from './pages/PaginateSection';
import Background from './components/Background';
import Pokemon from './pages/Pokemon';
import Menu from './pages/Menu';
import { MainContainer, RootContainer } from './styles/style-main-page';

function App() {
  return (<>
    
    <RootContainer> 
    
    <Background></Background>
      <MainContainer>
      <div style={{width:"180px"}}>

      </div>
      <HashRouter> 
        <Menu />
        <Routes path='/'>
          
          <Route index element={<Main Section={PaginateSection}/>} exact/>
          <Route path='/pokemon/:id' element={<Pokemon />} exact/>
        </Routes>
      </HashRouter>
    </MainContainer>
    </RootContainer>
    
    
  
  </>
    
  );
}

export default App;
