import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleGameStats from "./pages/SingleGameStats";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/:gameId' element={<SingleGameStats/>}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
