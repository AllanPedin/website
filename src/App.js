import './App.css';
import About from './pages/about';
import Home from './pages/home';
import PageNotFound from './pages/pageNotFound';
import TopBar from './components/TopBar/TopBar';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header>
        <TopBar/>
      </header>
      <body className='App-body'>
        <BrowserRouter>
            <Routes>
              <Route path ="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
      </body>
    </div>
  );
}

export default App;
