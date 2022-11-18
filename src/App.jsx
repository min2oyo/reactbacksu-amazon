import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {

  // 출력
  return (
    <>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<h1>장바구니 페이지임</h1>} />
        </Routes>
      </div>
    </>
  );

}

export default App;
