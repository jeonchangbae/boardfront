import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Board from './components/board/Board';
import BoardWrite from './components/board/BoardWrite';
import BoardDetail from './components/board/BoardDetail';
import BoardEdit from './components/board/BoardEdit';

function App() {
  return (
    <div >      
      <BrowserRouter>      
        <Routes>          
          <Route exact path = "/" element = {<Board />} />
          <Route path = "/write" element = {<BoardWrite />} />
          <Route path = "/post/:id" element = {<BoardDetail/>} />
          <Route path = "/edit/:id" element = {<BoardEdit />} />
        </Routes>
      </BrowserRouter>
      board test1
    </div>
  );
}

export default App;
