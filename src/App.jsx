import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';

import HomePage from './pages/HomePage/HomePage';
import StadiumPage from './pages/StadiumPage/StadiumPage';
import SixtiethPage from './pages/60thPage/60thPage';
import HamInseobPage from './pages/HamInseobPage/HamInseobPage';
import GuestbookPage from './pages/GuestbookPage/GuestbookPage';
import NoticePage from './pages/NoticePage/NoticePage';
import PerformancesPage from './pages/PerformancesPage/PerformancesPage';

const App = () => {
  const [circles, setCircles] = useState([]);
  const maxCircleCount = 10; // 최대 원 개수

  // 원하는 색상만 선택하도록 수정
  const getRandomColor = () => {
    const colors = ['#8A61BF', '#8A61BF', '#261855', '#7111B6'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const isOverlap = (circle1, circle2) => {
    const dx = circle1.x - circle2.x;
    const dy = circle1.y - circle2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < (circle1.size / 2 + circle2.size / 2);
  };

  const handleAnimationEnd = (index) => {
    // 애니메이션이 끝난 후 실행되는 함수 (원하는 작업을 추가하십시오)
  };

  useEffect(() => {
    const newCircle = (currentCircles) => {
      let size;
      let x, y;
      let isColliding;

      // 원 생성 위치를 충돌하지 않을 때까지 재시도
      do {
        isColliding = false;
        size = Math.random() * 200 + 100;
        x = Math.random() * (window.innerWidth - size);
        y = Math.random() * (window.innerHeight - size);

        for (const existingCircle of currentCircles) {
          if (isOverlap(existingCircle, { x, y, size })) {
            isColliding = true;
            break;
          }
        }
      } while (isColliding);

      const initialCircle = {
        size: size,
        x: x,
        y: y,
        animationDuration: `${Math.random() * 10 + 16}s`, // 애니메이션 총 소요시간
        // 랜덤 색상 선택 (getRandomColor 함수 사용)
        color: getRandomColor(),
      };
      return initialCircle;
    };

    if (circles.length < maxCircleCount) {
      const initialCircles = [];
      for (let i = 0; i < maxCircleCount; i++) {
        const initialCircle = newCircle(initialCircles);
        initialCircles.push(initialCircle);
      }
      setCircles((prevCircles) => [...prevCircles, ...initialCircles]);
    } // 처음에 실행될 때만 10개를 생성

    return () => {};
  }, [circles.length]);

  return (
    <div className="App">
      {/*<BrowserView>모바일을 통해 접속해주시기 바랍니다.</BrowserView>
      <MobileView></MobileView>*/}
      {circles.map((circle, index) => (
        <div
          className="circle"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            left: `${circle.x}px`,
            top: `${circle.y}px`,
            animation: `moveCircle ${circle.animationDuration} linear infinite`, // 애니메이션 적용
            backgroundColor: circle.color, // 랜덤 색상 적용
          }}
          key={index}
          onAnimationEnd={() => handleAnimationEnd(index)}
        ></div>
      ))}
      <Routes>
        <Route path='/' element={<HomePage />} />  {/* 홈 */}
        <Route path='/stadium' element={<StadiumPage />} />  {/* 대운동장 */}
        <Route path='/60th' element={<SixtiethPage />} />  {/* 60주념 기념관 */}
        <Route path='/haminseob' element={<HamInseobPage />} />  {/* 함인섭광장 */}
        <Route path='/performance' element={<PerformancesPage />} />  {/* 공연 */}
        <Route path='/guestbook' element={<GuestbookPage />} />  {/* 방명록 */}
        <Route path='/notice' element={<NoticePage />} />  {/* 공지사항 */}
      </Routes>
    </div>
  );
};

export default App;