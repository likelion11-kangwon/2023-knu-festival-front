import React, { useEffect, useState } from "react";
import Menubar from '../../components/Menubar';
import './GuestbookPage.css';
import GuestbookEntry from './GuestbookEntry';
import Modal from 'react-modal';
import { IoIosClose } from 'react-icons/io';
import { IoIosAdd } from 'react-icons/io';
import { IoIosArrowRoundUp } from 'react-icons/io';
import { useAxios } from "../../libs/axios";

const GuestbookPage = () => {
  const [entries, setEntries] = useState([]);
  const [nickname, setNickname] = useState('');
  const [content, setContent] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false); // 모달 열림 상태 추가
  
  const axios = useAxios();

  useEffect(() => {
    const fetchGuestbookEntries = async () => {
      try {
        const response = await axios.get('http://49.50.172.190:8080/api/guestbook/pageList');
        setEntries(response.data.content);
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
      }
    };

    fetchGuestbookEntries();
  }, []);

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
      const response = await axios.post('http://49.50.172.190:8080/api/guestbook/register', data);

      setEntries([...entries, response.data]);

      setNickname('');
      setContent('');
      setModalIsOpen(false); // 작성 완료 후 모달 닫기
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error);
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

  // 작성 버튼 활성화 여부를 결정하는 함수
  const isSubmitDisabled = nickname.trim() === '' || content.trim() === '';

  return (
    <article>
      {modalIsOpen ? null : <Menubar />}
      <div className="guestbook-container" style={{ display: modalIsOpen ? 'none' : 'block' }}>
        <span className="page-title">방명록</span>
        <div className="centered-container">
          <button className="centered-button" onClick={() => setModalIsOpen(true)}>
            <IoIosAdd className="plus-icon" /> 방명록 쓰기
          </button>
        </div>
      </div>
      <div className="centered-container" style={{ display: modalIsOpen ? 'none' : 'block' }}>
          <div className="entries">
            {entries.map((entry, index) => (
              <GuestbookEntry key={index} entry={entry} />
            ))}
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
            <IoIosClose onClick={() => setModalIsOpen(false)} />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
        <span className="write-title">닉네임</span>
          <div>
          <input
            type="text"
            placeholder="사용할 닉네임을 입력하세요."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          </div>
          <span className="write-title">방명록</span>
          <div>
          <textarea
            placeholder="방명록 내용을 입력하세요.
욕설 또는 부정적인 단어의 사용은 제한돼요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          </div>
          <button type="submit" disabled={isSubmitDisabled}>방명록 업로드 <IoIosArrowRoundUp/></button>
        </form>
      </Modal>
    </article>
  );
};

export default GuestbookPage;