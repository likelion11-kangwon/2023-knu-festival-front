// 대운동장
import React from 'react';
import { Link } from 'react-router-dom';
import IntroData from './intro.json';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import './IntroPage.css';

const IntroPage = () => {

  return (
    <article>
        <div className="close-icon">
          <div className="close-icon-box">
            <Link to="/"><HiOutlineChevronLeft style={{ color: "white" }}/></Link>
          </div>
        </div>
        <div className="notice-board">
        <div className="intro-container">
          <span className="notice-header">Makers</span>
        </div>

        <div>
        <div className="image-container">
          <img src="/img/intro-header.svg" alt="LIKILION 소개"/>
        </div>
        <ul className="intro-board">
                {IntroData.map((item, index) => (
                    <React.Fragment key={item.id}>
                        {(index === 0 || index === 3 || index === 7 || index === 8) && (
                            <li className="part-title" style={{ fontFamily: 'Pretendard-Bold', fontWeight: 'bold', fontSize: '1.3rem', paddingTop: '1rem', paddingLeft: '0.2rem', paddingRight: '0.2rem', paddingBottom: '1rem'}}>
                                {item.part}
                            </li>
                        )}
                        <li>
                            <div className="item-container">
                                <a href={item.url} target="_blank" rel="noopener noreferrer">
                                  <img src={item.img} alt={item.title} width="110" />
                                </a>
                                <div className="text-container">
                                    <p className="intro-title" style={{ fontFamily: 'Pretendard-Bold', fontWeight: 'bold', fontSize: '1.2rem' }}>{item.name}</p>
                                    <p className="intro-subtitle" style={{ fontFamily: 'Pretendard-Medium', fontWeight: '500', fontSize: '0.9rem' }}>{item.role}</p>
                                    <p className="intro-subtitle" style={{ fontFamily: 'Pretendard-Medium', fontWeight: '500', fontSize: '0.9rem' }}>{item.content}</p>
                                    <p className="intro-content" style={{ fontFamily: 'Pretendard', fontSize: '0.7rem' }}>{item.intro}</p>
                                </div>
                            </div>
                        </li>
                    </React.Fragment>
                ))}
            </ul>
        </div>
      </div>
    </article>
  );
};

export default IntroPage;
