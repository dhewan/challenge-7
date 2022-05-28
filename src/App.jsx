
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import  Search  from './pages/search';
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route  path="/search" element={<Search />}/>
            <Route  path="/" element={<Home />}/>
            
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
