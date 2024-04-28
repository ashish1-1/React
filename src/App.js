import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Error from './Error';

// ----------------------- How to Use Routes and Route and BrowseRouter ------------- 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div><h1>Hello This Is Router</h1></div>} />
          <Route path='/' element={<Home/>} />

          <Route path='/about' element={<div><h1>Hello This Is About Router</h1></div>} />
          <Route path='/about' element={<About/>} />

          <Route path='/contact' element={<div><h1>Hello This Is Contact Router</h1></div>} />
          <Route path='/contact' element={<Contact/>} />

          {/* Route For 404 Error Page */}
          <Route path='*' element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


// ---------------------- Use of Nested Routes -----------------

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='*' element={<Error/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
