import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import '../styles/Menubar.css'; // 스타일링을 위한 CSS 파일

const Menubar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    {menuOpen && <div className="blur-layer"></div>}
    <div className={`menubar ${menuOpen ? 'open' : ''}`}>
      <div className="menu-icon-box" onClick={toggleMenu}>
        {menuOpen ? <HiOutlineChevronLeft /> : <HiOutlineMenuAlt4 />}
      </div>
      <div className={`categories ${menuOpen ? 'visible' : ''}`}>
        <ul className="category-list" style={{ fontFamily: 'Pretendard', fontWeight: 'bold', fontSize: '1.2rem' }}>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/timetable/day1">공연 및 행사 안내</Link></li>
          <li><Link to="/stadium">대운동장</Link></li>
          <li><Link to="/haminseob">함인섭광장</Link></li>
          <li><Link to="/60th">60주념기념관</Link></li>
          <li><Link to="/guestbook">방명록</Link></li>
          <li><Link to="/total">공지사항</Link></li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Menubar;