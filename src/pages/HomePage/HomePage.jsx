import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Menubar from '../../components/Menubar';
import './HomePage.css';
import SvgTitle from '../../components/Title';
import SvgSubTitle from '../../components/SubTitle';
import SvgHomePage from '../../components/HomePage';
import SvgSubTxt from '../../components/SubTxt';
import SvgMap from '../../components/Map';
import SvgBottomLogo from '../../components/BottomLogo';

import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

const MOBILE_KEYWORDS = ['Android', 'iPhone', 'iPod', 'iPad', 'Windows Phone', 'Blackberry'];
const TARGET_DATE = new Date(2023, 8, 20);

const calculateDateDifference = (targetDate) => {
  // 서울의 현재 날짜와 시간
  const seoulTimeZoneOffset = 9 * 60; // UTC+9
  const currentDateUTC = new Date();
  const currentDate = new Date(currentDateUTC.getTime() + seoulTimeZoneOffset * 60000);

  const differenceInMilliseconds = targetDate - currentDate;
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  switch (differenceInDays) {
    case 0:
      return 'Day1';
    case -1:
      return 'Day2';
    case -2:
      return 'Day3';
    default:
      if (differenceInDays > 0) {
        return `D-${differenceInDays}`;
      } else {
        return `D+${-(differenceInDays + 2)}`;
      }
  }
};

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (!isMobile()) {
      alert('이 페이지는 모바일 접속을 권장합니다. 모든 기능이 제한됩니다.');
    }

    const currentList = listRef.current;
    const handleScroll = () => {
      setShowButton(currentList.scrollTop > 100);
    };
    currentList.addEventListener('scroll', handleScroll, { passive: true });

    // IntersectObservers initialization
    const initObserver = (threshold, selector) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold });

      const items = currentList.querySelectorAll(selector);
      items.forEach(item => observer.observe(item));

      return observer;
    };

    const normalObserver = initObserver(1.0, '.fade-item:not(.map)');
    const mapObserver = initObserver(0.15, '.map');

    return () => {
      currentList.removeEventListener('scroll', handleScroll);

      // IntersectObservers removal
      const items = currentList.querySelectorAll('.fade-item:not(.map)');
      items.forEach(item => normalObserver.unobserve(item));

      const mapItems = currentList.querySelectorAll('.map');
      mapItems.forEach(item => mapObserver.unobserve(item));
    };
  }, []);

  const isMobile = () => {
    return MOBILE_KEYWORDS.some(keyword => window.navigator.userAgent.includes(keyword));
  };

  const dateDifference = calculateDateDifference(TARGET_DATE);

  return (
    <article ref={listRef}>
      <Menubar />
      <div className="centered-img">
        <SvgTitle className="title" width="30rem" height="27rem" />
      </div>
      <div className="centered-img">
        <SvgSubTitle className="sub-title" fontSize="13rem" />
      </div>
      <div className="centered-img">
        <div className="centered-date" style={{ fontFamily: 'Pretendard-Bold', fontWeight: 'bold', fontSize: '1.4rem' }}>
          {dateDifference}
        </div>
      </div>
      <div className="centered-img">
        <SvgHomePage className="home-page" width="17rem" height="8rem" />
      </div>
      <div className="page-container">
      <ul className="page-list" style={{ fontFamily: 'Pretendard-Bold', fontWeight: 'bold' }}>
          <li className="fade-item"><Link to="/timetable/day1">공연 및 행사 안내</Link></li>
          <li className="fade-item"><Link to="/stadium">대운동장</Link></li>
          <li className="fade-item"><Link to="/haminseob">함인섭광장</Link></li>
          <li className="fade-item"><Link to="/60th">60주념기념관</Link></li>
          <li className="fade-item"><Link to="/guestbook">방명록</Link></li>
          <li className="fade-item"><Link to="/notice">공지사항</Link></li>
      </ul>
      <SvgSubTxt className="sub-txt" fontSize="10rem" />
      </div>

      <div className="centered-map">
        <div className="map-txt fade-item" style={{ fontFamily: 'Pretendard-ExtraBold', fontWeight: '800' }}>축제 지도</div>
        <SvgMap className="map fade-item" width="100%" height="100%"/>
      </div>
      <div className='centered-copy'>
        <div className='about-makers fade-item' style={{ fontFamily: 'Pretendard-Bold', fontWeight: 'bold' }}>About Makers</div>
        <Link to="/intro" className='likelion-btn fade-item' style={{ fontFamily: 'Pretendard-Bold', fontWeight: 'bold' }}>멋쟁이사자처럼 강원대학교 <IoIosArrowForward style={{ width: '2rem' }}/></Link>
        <SvgBottomLogo className="bottom-logo" width="10rem" height="4.2rem"/>
        <div className='copyright'>Copyright 2023. LIKELION KNU all rights reserved.</div>
      </div>
      {showButton && (
        <div 
        className={`go-top-btn ${showButton ? 'visible' : ''}`} 
        onClick={() => listRef.current.scrollTo({top: 0, behavior: 'smooth'})}
      >
        <IoIosArrowUp color="white" size="1.6rem"/>
      </div>
      )}
    </article>
  );
};

export default HomePage;