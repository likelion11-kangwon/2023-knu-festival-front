import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Menubar from '../../components/Menubar';
import './HomePage.css';
import SvgTitle from '../../components/Title';
import SvgSubTitle from '../../components/SubTitle';
import SvgHomePage from '../../components/HomePage';
import SvgSubTxt from '../../components/SubTxt';

const calculateDateDifference = (targetDate) => {
  // 서울의 현재 날짜와 시간을 가져옴.
  const seoulTimeZoneOffset = 9 * 60; // 서울은 UTC+9
  const currentDate = new Date();
  const seoulCurrentDate = new Date(currentDate.getTime() + seoulTimeZoneOffset * 60000);

  // 목표 날짜를 서울 시간대로 설정함.
  const seoulTargetDate = new Date(targetDate.getTime() + seoulTimeZoneOffset * 60000);

  // 날짜 차이를 계산함.
  const differenceInMilliseconds = seoulTargetDate - seoulCurrentDate;
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  if (differenceInDays >= 0) {
    return `D-${differenceInDays}`;
  } else {
    return `D+${-differenceInDays}`;
  }
};

const HomePage = () => {
  const targetDate = new Date(2023, 8, 18, 23, 59, 59); // 월은 0부터 시작함.
  const dateDifference = calculateDateDifference(targetDate);
  const listRef = useRef(null);

  // 움직이는 애니메이션 적용
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, {
        threshold: 1.0  // 화면에 완전히 들어온 상태에서만 애니메이션을 시작
    });

    if (listRef.current) {
        const listItems = listRef.current.querySelectorAll('li');
        listItems.forEach(item => observer.observe(item));
    }

    return () => {
        if (listRef.current) {
            const listItems = listRef.current.querySelectorAll('li');
            listItems.forEach(item => observer.unobserve(item));
        }
    };
}, []);

  return (
    <article>
      <Menubar />
      <div className="centered-img">
        <SvgTitle className="title" width="30rem" height="27rem" />
      </div>
      <div className="centered-img">
        <SvgSubTitle className="sub-title" font-size="13rem" />
      </div>
      <div className="centered-img">
        <div className="centered-date" style={{ fontFamily: 'Pretendard', fontWeight: 'bold', fontSize: '1.4rem' }}>
          {dateDifference}
        </div>
      </div>
      <div className="centered-img">
        <SvgHomePage className="home-page" width="17rem" height="8rem" />
      </div>
      <div className="page-container">
      <ul className="page-list" ref={listRef} style={{ fontFamily: 'Pretendard', fontWeight: 'bold' }}>
          <li><Link to="/performance">공연 및 행사 안내</Link></li>
          <li><Link to="/stadium">대운동장</Link></li>
          <li><Link to="/haminseob">함인섭광장</Link></li>
          <li><Link to="/60th">60주념기념관</Link></li>
          <li><Link to="/guestbook">방명록</Link></li>
          <li><Link to="/notice">공지사항</Link></li>
      </ul>
      <SvgSubTxt className="sub-txt" font-size="10rem" />
      </div>
      <div className='copyright'>
        <span>Copyright 2023. LIKELION KNU all rights reserved.</span>
      </div>
      
    </article>
  );
};

export default HomePage;