// 함인섭광장
import React, { useState, useEffect, useRef } from 'react';
import Menubar from '../../components/Menubar';
import './HamInseobPage.css';
import hamData from './ham.json';
import icon from './icon.png';

// 메인 페이지 컴포넌트
const HamInseobPage = () => {
  const [activeTruckId, setActiveTruckId] = useState(null); // 푸드트럭의 ID 관리
  const [likes, setLikes] = useState({}); // 각 푸드트럭별 '좋아요' 수 관리
  const [list, setList] = useState(false);  // 전체 푸드트럭 리스트 표시 여부 관리

  // 특정 푸드트럭의 '좋아요'를 증가시키는 함수
  const handleLike = (id) => {
    setLikes({
      ...likes,
      [id]: (likes[id] || 0) + 1
    });
  };

  // 페이지의 렌더링 내용
  return (
    <article>
      <Menubar />
      <div id='map'>
      <div className='sik'>
        <div><span>석재</span></div>
      </div>
      <div className="sixth">
        {/* 각 푸드트럭 정보를 매핑해서 표시 */}
        {hamData.data.map((truck) => (
          // 푸드트럭 이름과 '좋아요' 버튼, 모달 표시 여부 관리
          <span key={truck.id} className={`truck_${truck.id}`}>
            <span onClick={() => setActiveTruckId(truck.id)} className='truckButton'><img src={icon} alt="로고" /></span>
            <div className='like' onClick={() => handleLike(truck.id)}>  {likes[truck.id] || 0} </div>
            {activeTruckId === truck.id ? <TruckModal data={truck} close={() => setActiveTruckId(null)} /> : null}
          </span>
        ))}
        {/* 광장 내 다른 위치 정보 */}

        <span className='enter_1'>갤럭시 스튜디오</span>
        <span className='enter_2'>대운동장</span>
        {/* 전체 푸드트럭 리스트 보기 버튼 */}
        <div onClick={() => setList(!list)} className='listButton'>푸드트럭 리스트<br></br> 전체보기</div>
        {/* 리스트가 활성화되었을 때 푸드트럭 리스트 표시 */}
        {list && <List data={hamData.data} setActive={setActiveTruckId} closeList={() => setList(false)} />}
      </div>
      </div>
    </article>
  );
};

// 푸드트럭 정보를 표시하는 모달 컴포넌트
const TruckModal = ({ data, close }) => {
  const wrapperRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        close();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [close]);

  // 모달 내용 렌더링
  return (
    <div ref={wrapperRef} className='truck'>
      <span onClick={close} className='cancel'><b> X </b></span>
      {data.img}
      <div>{data.name}</div>
      <div>{data.comment}</div>
    </div>
  )
};

// 전체 푸드트럭 리스트를 표시하는 컴포넌트
const List = ({ data, setActive, closeList }) => {
  const handleItemClick = (id) => {
    setActive(id);   // 해당 푸드트럭의 모달 표시
    closeList();     // 전체 푸드트럭 리스트 닫기
  };

  return (
    <div className="list">
      {data.map((truck) => (
        <div key={truck.id} onClick={() => handleItemClick(truck.id)}>
          <div className='menu' > 
          <span className='truck-id'>{truck.id}</span>
          {truck.name}{truck.startday}<br></br>
          <div className='comment_list' style={{ whiteSpace: "pre-line" }}>{truck.comment}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HamInseobPage;
