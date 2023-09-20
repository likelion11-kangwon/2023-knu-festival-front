import React, { useState, useEffect } from "react";
import Modal from 'react-modal';
import Menubar from '../../components/Menubar';
import './60thPage.css';
import sixData from './60th.json'
import SvgSix from '../../components/Six';
import { HiOutlineX } from 'react-icons/hi';

const SixtiethPage = () => {
  const [modalContents, setModalContents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('1일차');  // 현재 선택된 '일차'

  const allDays = Array.from(new Set(sixData.flatMap(data => {
    const locations = Array.isArray(data.location) ? data.location : [data.location];
    return locations.filter(loc => loc.includes("일차"));
  })));

  const filteredContents = selectedDay ? modalContents.filter(content => content.location.includes(selectedDay)) : modalContents;

  const openModal = (id) => {
    // 현재 화면의 가로 크기를 체크
    if (window.innerWidth > 500) {
      alert("이 기기로는 접근할 수 없습니다.");
      return; // 이 부분을 통해 모달창 여는 로직이 실행되지 않습니다.
    }
    
    const rawId = id.replace('rect', '');
    console.log("Clicked ID:", id);
    // rawId가 숫자만 포함하는지 확인하여 해당 값을 numId에 할당
    const numId = /^[0-9]+$/.test(rawId) ? parseInt(rawId, 10) : (rawId.includes('-') ? parseInt(rawId.split('-')[0], 10) : rawId);
    const relatedContents = sixData.filter(data => parseInt(data.id.split('-')[0], 10) === parseInt(numId, 10));

    console.log("Related contents for ID:", rawId, relatedContents);
  
    if (relatedContents.length > 0) {
      setModalContents(relatedContents);
      setIsModalOpen(true);
    }

    if (relatedContents.length > 0) {
      setModalContents(relatedContents);
      setIsModalOpen(true);
      
      // 히스토리 항목 추가
      window.history.pushState(null, null, window.location.pathname);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDay('1일차');  // 모달을 닫을 때 "1일차"로 리셋
  };

  useEffect(() => {
    const handlePopState = (e) => {
      if (isModalOpen) {
        e.preventDefault();
        closeModal();
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isModalOpen]);

  const customStyles = {
    content: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      margin: '0',
      padding: '0',
      border: 'none',
      background: 'transparent',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '0px',
      outline: 'none'
    },
    overlay: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      backgroundColor: 'transparent'
    }
  };

  return (
    <article>
      {!isModalOpen && <Menubar />}
      {!isModalOpen && (
        <SvgSix 
          onClick={(e) => {
            if (e.target.id.startsWith("rect")) {
              openModal(e.target.id);
            }
          }} 
          className="ham-container"
        />
      )}
    
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Modal Content"
        style={customStyles}    
      >
        <div className="intro-container">
          <span className="notice-header">60주념기념관</span>
          <div className="filter-buttons">
            <div className="sta-category">
            {allDays.map(day => (
              
              <button 
                key={day}
                onClick={() => setSelectedDay(day)}
                className={selectedDay === day ? "selected" : ""}
              >
                {day}
              </button>
              
            ))}
            </div>
          </div>
        </div>
        <div className="close-icon-box" onClick={closeModal}>
          <HiOutlineX />
        </div>
        <div className="modal-content">
          {filteredContents.map((content, idx) => (
              <React.Fragment key={idx}>
                  <img src={content.img} alt={content.title} />
                  <div className="id-title-container" style={{ fontFamily: 'Pretendard-Bold', fontWeight: 'bold' }}>
                      <p className="id-circle">{content.id.includes('-') ? content.id.split('-')[0] : content.id}</p>
                      <p style={{ fontSize: '1.4rem' }}>{content.title}</p>
                  </div>
                  <div className="location-container" style={{ fontFamily: 'Pretendard' }}>
                      {Array.isArray(content.location) ? (
                          content.location.map((loc, index) => (
                              <div key={index} className="location-item">{loc}</div>
                          ))
                      ) : (
                          <div className="location-box">{content.location}</div>
                      )}
                  </div>
                  {content.description && (
                      <ul className="description-list">
                          {content.team && <li>(종류) {content.team}</li>}  {/* 종류 추가 */}
                          {Array.isArray(content.description) ? content.description.map(description => (
                              <li key={description}>{description}</li>
                          )) : <li>{content.description}</li>}
                      </ul>
                  )}
                  {content.price && (
                      <ul className="description-list">
                          {Array.isArray(content.price) ? content.price.map(price => (
                              <li key={price}>{price}</li>
                          )) : <li>{content.price}</li>}
                      </ul>
                  )}
              </React.Fragment>
          ))}
      </div>
      </Modal>
    </article>
  );
};

export default SixtiethPage;