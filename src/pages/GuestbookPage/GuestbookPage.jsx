import React, { useEffect, useState } from "react";
import Menubar from '../../components/Menubar';
import './GuestbookPage.css';
import GuestbookEntry from './GuestbookEntry';
import Modal from 'react-modal';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { HiOutlineX } from 'react-icons/hi';
import { IoIosAdd } from 'react-icons/io';
import { IoIosArrowRoundUp } from 'react-icons/io';
import { useAxios } from "../../libs/axios";
import SvgBottomLogo from '../../components/BottomLogo';
import userImg1 from './user-img1.png';
import userImg2 from './user-img2.png';
import userImg3 from './user-img3.png';
import userImg4 from './user-img4.png';
import userImg5 from './user-img5.png';
import userImg6 from './user-img6.png';
import userImg7 from './user-img7.png';
import userImg8 from './user-img8.png';
import userImg9 from './user-img9.png';
import userImg10 from './user-img10.png';
import userImg11 from './user-img11.png';
import userImg12 from './user-img12.png';
import userImg13 from './user-img13.png';
import userImg14 from './user-img14.png';

const GuestbookPage = () => {
  const [entries, setEntries] = useState([]);
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false); // 모달 열림 상태 추가
  const IMAGES = [ userImg1 , userImg2, userImg3, userImg4, userImg5, userImg6, userImg7, userImg8, userImg9, userImg10, userImg11, userImg12, userImg13, userImg14];
  const [currentPage, setCurrentPage] = useState(0); 
  const [totalPages, setTotalPages] = useState(0);

  const axios = useAxios();

  useEffect(() => {
    const fetchGuestbookEntries = async () => {
      try {
        const response = await axios.get(`/api/guestbook/pageList?page=${currentPage}`);
        setEntries(response.data.content);
        setTotalPages(response.data.totalPages); 
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
      }
    };

    fetchGuestbookEntries();
  }, [currentPage, axios]);

  const Pagination = () => {
    const MAX_VISIBLE_PAGES = 2;
    const firstVisiblePage = Math.floor(currentPage / MAX_VISIBLE_PAGES) * MAX_VISIBLE_PAGES;
    const pages = [...Array(Math.min(totalPages - firstVisiblePage, MAX_VISIBLE_PAGES)).keys()].map(i => i + firstVisiblePage);
  
    return (
      <div className="pagination" style={{ fontFamily: 'Pretendard-Bold'}}>
        {firstVisiblePage > 0 && (
          <button onClick={() => setCurrentPage(firstVisiblePage - 1)}>
            <HiOutlineX />
          </button>
        )}
  
        {pages.map(page => (
          <button 
            key={page} 
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? 'active' : ''}
          >
            {page + 1}
          </button>
        ))}
  
        {firstVisiblePage + MAX_VISIBLE_PAGES < totalPages && (
          <button onClick={() => setCurrentPage(firstVisiblePage + MAX_VISIBLE_PAGES)}>
            <HiOutlineChevronRight />
          </button>
        )}
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 욕설 체크
    if (containsBadWords(nickname) || containsBadWords(content)) {
      alert('욕설이나 비방 언어는 작성할 수 없습니다.');
      return; // 욕설이 포함된 경우 함수 종료
    }

    // 작성자와 내용이 공백인 경우 처리
    if (nickname.trim() === '' || content.trim() === '') {
      alert('닉네임과 내용을 작성해야 합니다.');
      return; // 작성자나 내용이 공백인 경우 함수 종료
    }

    const data = {
      content: content,
      writer: nickname,
    };

    try {
      const response = await axios.post(`/api/guestbook/register`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      setEntries([response.data, ...entries]);
    
      setNickname('');
      setContent('');
      setModalIsOpen(false); // 작성 완료 후 모달 닫기

      // 1페이지로 돌아가기
      if (currentPage !== 0) {
        setCurrentPage(0);
      } else {
        // 리로드
        const fetchGuestbookEntries = async () => {
          try {
            const response = await axios.get(`/api/guestbook/pageList?page=${currentPage}`);
            setEntries(response.data.content);
            setTotalPages(response.data.totalPages); 
          } catch (error) {
            console.error('API 호출 중 오류 발생:', error);
          }
        };

        fetchGuestbookEntries();
      }

    } catch (error) {
      console.error('API 호출 중 오류 발생:', error.response || error);
    }
  };

  // 욕설 체크 함수
  const containsBadWords = (text) => {
    const badWordList = ['새끼', 'fuck', '씨발', '시발', '좆', '썅', '미친놈', '미친년', '닥쳐', '병신', '장애', '지랄', '존나', '염병', '자살', 'ㅅㅂ', 'ㅈㄴ', 'ㅅㄲ', 'ㅂㅅ', 'ㅄ', 'ㅈㄹ', '애미', '애비', '대가리', '아가리', '죽어', '씹', '섹스', '짱깨']; // 욕설 목록을 여기에 추가
    for (const badWord of badWordList) {
      if (text.includes(badWord)) {
        return true;
      }
    }
    return false;
  };

  // 작성 버튼 활성화 여부 결정 함수
  const isSubmitDisabled = nickname.trim() === '' || content.trim() === '';

  return (
    <article className="guestbook-article">
      {modalIsOpen ? null : <Menubar />}
      <div  style={{ display: modalIsOpen ? 'none' : 'block' }}>
        <div className="guestbook-container">
          <span className="page-title">방명록</span>
          <div className="centered-container">
            <button className="centered-button" onClick={() => setModalIsOpen(true)}>
              <IoIosAdd className="plus-icon" /> 방명록 쓰기
            </button>
          </div>
          <div className="blur-background"></div>
        </div>
        <div className="guestbook-entries">
            <div className="entries">
              {entries.map((entry, index) => (
                <GuestbookEntry key={index} entry={entry} images={IMAGES}/>
              ))}
            </div>
        </div>
        <div className="guestbook-bottom">
          <Pagination />
        </div>
        <div className='centered-guest'>
          <SvgBottomLogo className="bottom-logo-com" width="10rem" height="2rem"/>
        <div className='copyright-com'>Copyright 2023. LIKELION KNU all rights reserved.</div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="custom-modal" // 모달 스타일
        overlayClassName="custom-overlay" // 모달 배경 스타일
      >
        <div className="modal-header">
          <span className="page-title">방명록</span>
        </div>
        <div className="close-icon">
          <div className="close-icon-box">
            <HiOutlineX onClick={() => setModalIsOpen(false)} />
          </div>
        </div>
        <form className="write-form" onSubmit={handleSubmit}>
        <span className="write-title">닉네임</span>
          <div>
          <input
              className="write-name"
              type="text"
              placeholder="닉네임을 입력하세요. (최대 12자)"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              maxLength="12"
              style={{ fontFamily: 'Pretendard', fontWeight: 'normal' }}
          />
          </div>
          <span className="write-title">방명록</span>
          <div>
          <textarea
            className="write-content"
            placeholder="내용을 입력하세요. (최대 100자)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            maxLength="100"
            style={{ fontFamily: 'Pretendard', fontWeight: 'normal' }}
          />
          </div>
          <button className="submit" type="submit" disabled={isSubmitDisabled} style={{ fontFamily: 'Pretendard-Bold', fontWeight: 'bold', fontSize: '1rem'}}>방명록 업로드 <IoIosArrowRoundUp size="1.6rem"/></button>
        </form>
      </Modal>
    </article>
  );
};

export default GuestbookPage;