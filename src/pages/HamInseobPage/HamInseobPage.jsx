// 함인섭광장
import React, { useState } from "react";
import Modal from 'react-modal';
import Menubar from '../../components/Menubar';
import './HamInseobPage.css';
import hamData from './ham.json';
import SvgHam from '../../components/Ham';
import { HiOutlineX } from 'react-icons/hi';

const HamInseobPage = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (id) => {
    // "rect" 문자열을 제거하고 남은 부분을 숫자로 변환
    const numId = parseInt(id.replace('rect', ''), 10);
    const content = hamData.find(data => data.id === numId);

    if (content) {
        setModalContent(content);
        setIsModalOpen(true);
    }
};

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
        <SvgHam 
          onClick={(e) => {
            console.log("Clicked element ID:", e.target.id); // 클릭된 요소의 ID를 출력합니다.
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
          <span className="notice-header">함인섭광장</span>
        </div>
        <div className="close-icon-box" onClick={closeModal}>
          <HiOutlineX />
        </div>

        <div className="modal-content">
        {modalContent && (
            <>
            <img src={modalContent.img} alt={modalContent.title} />

            <div className="id-title-container" style={{ fontFamily: 'Pretendard-Bold', fontWeight: 'bold' }}>
              <p className="id-circle">{modalContent.id}</p>
              <p style={{ fontSize: '1.4rem' }}>{modalContent.title}</p>
            </div>

            <div className="location-container" style={{ fontFamily: 'Pretendard' }}>
              {Array.isArray(modalContent.location) ? (
                  modalContent.location.map((loc, index) => (
                      <div key={index} className="location-item">{loc}</div>
                  ))
              ) : (
                  <div className="location-box">{modalContent.location}</div>
              )}
            </div>

            {modalContent.description && (
                <ul className="description-list">
                {Array.isArray(modalContent.description) ? modalContent.description.map(description => (
                    <li key={description}>{description}</li>
                )) : <li>{modalContent.description}</li>}
                </ul>
            )}
            </>
        )}
    </div>
      </Modal>
  </article>
  );
};

export default HamInseobPage;