import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home/Home';
import Sign from './components/sign/sign';
import Res from './components/recipecards/recipecards'
import './App.css';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/sign" element={<Sign/>}/>
        <Route path="/rec"element={<Res/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
