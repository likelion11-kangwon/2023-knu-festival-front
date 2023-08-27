import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import StadiumPage from './pages/StadiumPage/StadiumPage';
import SixtiethPage from './pages/60thPage/60thPage';
import HamInseobPage from './pages/HamInseobPage/HamInseobPage';
import FuturePage from './pages/FuturePage/FuturePage';
import LogPage from './pages/LogPage/LogPage';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />  {/* 홈 */}
        <Route path='/stadium' element={<StadiumPage />} />  {/* 대운동장 */}
        <Route path='/60th' element={<SixtiethPage />} />  {/* 60주념 기념관 */}
        <Route path='/haminseob' element={<HamInseobPage />} />  {/* 함인섭광장 */}
        <Route path='/future' element={<FuturePage />} />  {/* 미래광장 */}
        <Route path='/log' element={<LogPage />} />  {/* 방명록 */}
      </Routes>
    </div>
  );
};

export default App;