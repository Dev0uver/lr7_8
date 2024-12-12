import './App.css';
import ItemsList from './components/Items/ItemsList';
import Home from './components/Login/Home';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/itemsList" element={<ItemsList />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
