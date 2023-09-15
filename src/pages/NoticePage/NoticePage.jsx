// 공지사항
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menubar from '../../components/Menubar';
import './NoticePage.css';
import Modal from 'react-modal';

const NoticePage = () => {
  const [notices, setNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    const fetchNoticeList = async () => {
      try {
        const response = await axios.get('http://49.50.172.190:8080/api/notice/list');
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

  return (
    <article>
      <Menubar />
      <div className="notice-board">
        <div className="notice-container">
          <span className="page-title">공지사항</span>
        </div>
        <ul className={`notice-board ${selectedNotice ? 'hidden' : ''}`}>
          {notices.map((notice) => (
            <li key={notice.noticeId}>
              <div className="notice-entry" onClick={() => openModal(notice)}>
                <p>{notice.title}</p>
                <p>{notice.createDate}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* 모달 */}
        <Modal
          isOpen={selectedNotice !== null}
          onRequestClose={closeModal}
          className="custom-modal"
          overlayClassName="custom-overlay"
        >
          {selectedNotice && (
            <div>
              <p className="notice-title">{selectedNotice.title}</p>
              <p>{selectedNotice.createDate}</p>
              <p>{selectedNotice.content}</p>
              <button onClick={prevNotice}>이전글</button>
              <button onClick={nextNotice}>다음글</button>
              <button onClick={closeModal}>닫기</button>
            </div>
          )}
        </Modal>
      </div>
    </article>
  );
};

export default NoticePage;