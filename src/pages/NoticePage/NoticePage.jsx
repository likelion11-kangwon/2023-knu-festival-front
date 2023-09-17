// 공지사항
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Menubar from '../../components/Menubar';
import './NoticePage.css';
import Modal from 'react-modal';
import { useAxios } from '../../libs/axios';
import { HiOutlineX } from 'react-icons/hi';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import SvgBottomLogo from '../../components/BottomLogo';
import ReactMarkdown from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';

const NoticePage = () => {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const location = useLocation();
  
  const axios = useAxios();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchNoticeList = async () => {
      try {
        const response = await axios.get('/api/list/notices');
        setNotices(response.data.content);
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
      }
    };

    fetchNoticeList();
  }, []);

  const openModal = (notice) => {
    setSelectedNotice(notice);
  };

  const closeModal = () => {
    setSelectedNotice(null);
  };

  const nextNotice = () => {
    const currentIndex = notices.findIndex(n => n.noticeId === selectedNotice.noticeId);
    if (currentIndex === notices.length - 1) {
      alert("마지막 게시글입니다.");
      return;
    }
    setSelectedNotice(notices[currentIndex + 1]);
  };

  const prevNotice = () => {
    const currentIndex = notices.findIndex(n => n.noticeId === selectedNotice.noticeId);
    if (currentIndex === 0) {
      alert("처음 게시글입니다.");
      return;
    }
    setSelectedNotice(notices[currentIndex - 1]);
  };

  // 년, 월, 일 변환
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
  
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <article>
    {!selectedNotice && <Menubar />}
    <div className="notice-board">
      <div className="notice-container">
        <span className="notice-header">공지사항</span>
      </div>

      {!selectedNotice && 
      <div className="category">
      <Link
        to="/total"
        className={`category-total ${location.pathname === "/total" ? "active" : ""}`}
        style={{ fontFamily: 'Pretendard', fontSize: '1rem' }}
      ><button className="category-total" style={{ fontFamily: 'Pretendard', fontSize: '1rem' }}>전체</button></Link>
      <Link
        to="/notice" 
        className={`category-notice ${location.pathname === "/notice" ? "active" : ""}`} 
        style={{ fontFamily: 'Pretendard', fontSize: '1rem' }}
        ><button className="category-notice" style={{ fontFamily: 'Pretendard', fontSize: '1rem' }}>공지사항</button></Link>
      <Link
        to="/event" 
        className={`category-event ${location.pathname === "/event" ? "active" : ""}`} 
        style={{ fontFamily: 'Pretendard', fontSize: '1rem' }}
        ><button className="category-event" style={{ fontFamily: 'Pretendard', fontSize: '1rem' }}>이벤트</button></Link>
      </div>}

      <ul className={`notice-board ${selectedNotice ? 'hidden' : ''}`}>
        {notices.map((notice) => (
          <li key={notice.noticeId}>
            <div className="entries">
            <div className="guestbook-entry" onClick={() => openModal(notice)}>
              <div className="entry-notice-info">
                <p className="entry-notice-title" style={{ fontFamily: 'Pretendard-Bold', fontWeight: 'bold', fontSize: '1.1rem' }}>{notice.title}</p>
                <p className="entry-notice-date" style={{ fontFamily: 'Pretendard-Medium', fontWeight: '500', fontSize: '0.8rem', color: '#9CA3A9' }}>
                  {formatDate(notice.createDate)}
                </p>
              </div>
            </div>
            </div>
          </li>
        ))}
      </ul>
      {/* <div className='centered-guest'>
        <SvgBottomLogo className="bottom-logo-com" width="10rem" height="2rem"/>
        <div className='copyright-com'>Copyright 2023. LIKELION KNU all rights reserved.</div>
      </div> */}

      {/* 모달 */}
      <Modal
        isOpen={selectedNotice !== null}
        onRequestClose={closeModal}
        className="custom-modal-notice"
        overlayClassName="custom-overlay"
      >
        <div className="blur-box"></div>
        {selectedNotice && (
          <div>
            <div className="close-icon-box" onClick={closeModal}>
              <HiOutlineX />
            </div>
            <p className="notice-title">{selectedNotice.title}</p>
            <p className="notice-date" style={{ fontFamily: 'Pretendard-Medium', fontWeight: '500', fontSize: '0.9rem', color: '#9CA3A9' }}>{formatDate(selectedNotice.createDate)}</p>
            {/* 공지사항 내용을 ReactMarkdown으로 랜더링 */}
            <div className='markdown-box'>
            <ReactMarkdown 
              className="react-markdown"
              children={selectedNotice.content} 
              allowDangerousHtml={true} 
              rehypePlugins={[rehypeSanitize]}
              style={{ fontFamily: 'Pretendard', fontWeight: 'normal', fontSize: '1rem', color: '#E8E9EB' }}
          /></div>
          <div className="notice-btn">
            <button className="before-btn" onClick={prevNotice} style={{ fontFamily: 'Pretendard', fontWeight: 'normal', fontSize: '1rem', color: 'white'}}><IoIosArrowBack /> 이전글</button>
            <button className="next-btn" onClick={nextNotice} style={{ fontFamily: 'Pretendard', fontWeight: 'normal', fontSize: '1rem', color: 'white'}}>다음글 <IoIosArrowForward /></button>
          </div>
          </div>
        )}
      </Modal>
    </div>
  </article>
  );
};

export default NoticePage;