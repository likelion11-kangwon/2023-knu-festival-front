import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/Menubar.css'; // 스타일링을 위한 CSS 파일

const Menubar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`menubar ${menuOpen ? 'open' : ''}`}>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>
      <div className={`categories ${menuOpen ? 'visible' : ''}`}>
        <ul className="category-list">
        <li><Link to="/">홈</Link></li>
          <li><Link to="/stadium">대운동장</Link></li>
          <li><Link to="/60th">60주념 기념관</Link></li>
          <li><Link to="/haminseob">함인섭광장</Link></li>
          <li><Link to="/future">미래광장</Link></li>
          <li><Link to="/log">방명록</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Menubar;