// 공연
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Menubar from '../../components/Menubar';
import Modal from 'react-modal';
import './TimeTablePage.css';
import day3Data from './day3.json';
import { HiOutlineX } from 'react-icons/hi';
import { IoIosArrowForward } from 'react-icons/io';

const TimeTable3Page = () => {
  const location = useLocation();
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [selectedFestivalType, setSelectedFestivalType] = useState("");

  const openModal = (festival, type) => {
    setSelectedFestival(festival);
    setSelectedFestivalType(type);
  };

  const closeModal = () => {
    setSelectedFestival(null);
    setSelectedFestivalType("");
  };

  const isCurrentTimeBetween = (start, end) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // JavaScript에서 월은 0부터 시작
    const currentDay = currentDate.getDate();
    
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

    if (currentYear !== 2023 || currentMonth !== 9 || currentDay !== 21) {
        return false;  // 2023년 9월 21일
    }

    const [startHour, startMinute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);

    return (currentHour > startHour || (currentHour === startHour && currentMinute >= startMinute)) &&
           (currentHour < endHour || (currentHour === endHour && currentMinute <= endMinute));
}

  return (
    <article>
      {selectedFestival === null && (
        <>
          <Menubar />
        <div className="notice-board">
        <div className="notice-container">
          <span className="notice-header">타임테이블</span>
        </div>

        <div className="perfo-category">
          <Link
            to="/timetable/day1"
            className={`category-total ${location.pathname === "/timetable/day1" ? "active" : ""}`}
            style={{ fontFamily: 'Pretendard', fontSize: '1rem' }}
          ><button className="category-total" style={{ fontFamily: 'Pretendard', fontSize: '1rem' }}>1일차</button></Link>
          <Link
            to="/timetable/day2" 
            className={`category-notice ${location.pathname === "/timetable/day2" ? "active" : ""}`} 
            style={{ fontFamily: 'Pretendard', fontSize: '1rem' }}
            ><button className="category-notice" style={{ fontFamily: 'Pretendard', fontSize: '1rem' }}>2일차</button></Link>
          <Link
            to="/timetable/day3" 
            className={`category-event ${location.pathname === "/timetable/day3" ? "active" : ""}`} 
            style={{ fontFamily: 'Pretendard', fontSize: '1rem' }}
            ><button className="category-event" style={{ fontFamily: 'Pretendard', fontSize: '1rem' }}>3일차</button></Link>
        </div>

        <div>
        <ul className="perfo-board">
    {day3Data.map((item) => {
      const isSvg = item.img && item.img.endsWith('.svg');
      const isNow = isCurrentTimeBetween(item.startTime, item.endTime);

      return (
        <li className='perfo-item' key={item.id} onClick={() => {
          if (item.detail) {
            openModal(item, "detail");
          } else if (item['detailOther']) {
            openModal(item, "detailOther");
          }
        }}>
            
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
              <div className="perfo-time" style={{ fontFamily: 'Pretendard-Bold', fontWeight: 'bold', fontSize: '1rem', backgroundColor: isNow ? 'white' : '', color: isNow ? '#8A61BF' : '#C9CCD1' }}>
                  {isNow && <span style={{color: "#68CE67", marginRight: "5px"}}>●</span>}
                  {item.startTime}~{item.endTime}
              </div>

              <div className="perfo-artist" style={item.detail ? { display: 'flex', alignItems: 'center', backgroundColor: 'rgb(255, 255, 255, 0.12)' } : {}}>
                  {item.img && <img src={item.img} alt={item.title} width={isSvg ? "100%" : "92"} style={{ marginRight: '1rem', borderRadius: '16px'}}/>}

                        {item.detail ? (
                        <div>
                            <div className="perfo-content-v2" style={{ fontFamily: 'Pretendard', fontSize: '0.6rem' }}>
                                {item.content}
                            </div>
                            <div className="perfo-title-v2" style={{ fontFamily: 'Pretendard-Bold', fontWeight: 'bold', fontSize: '1.2rem' }}>
                                <div className="perfo-title-left">{item.title}</div> <div className="perfo-title-right"><IoIosArrowForward /></div>
                            </div>
                            <div className="perfo-subtitle" style={{ fontFamily: 'Pretendard-Medium', fontWeight: '500', fontSize: '0.8rem' }}>
                                {item.subTitle}
                            </div>
                        </div>
                        ) : (
                        <div>
                          <div className="perfo-title" style={{ fontFamily: 'Pretendard-Bold', fontWeight: 'bold', fontSize: '1.2rem' }}>
                              {item.title}
                          </div>
                          <div className="perfo-content" style={{ fontFamily: 'Pretendard', fontSize: '1rem' }}>
                              {item.content}
                              {item.detailOther && <div className="prefo-other" style={{ fontSize: '0.8rem' }}>더 보기 <div className="prefo-other-right"><IoIosArrowForward /></div></div> }
                          </div>
                        </div>
                        )}
                    </div>
                </div>
              </li>
              );
            })}
          </ul>
            </div>
          </div>
        </>
      )}

        <Modal
            isOpen={selectedFestival !== null}
            onRequestClose={closeModal}
            className="custom-modal-perfo"
            overlayClassName="custom-overlay"
          >
          {selectedFestival && (
            <div>
              <div className="close-icon-box" onClick={closeModal}>
                <HiOutlineX />
              </div>

              {/* detail modal */}
                {selectedFestivalType === "detail" && (
            <div style={{ fontFamily: 'Pretendard'}}>
              <img src={selectedFestival.img2} alt={selectedFestival.title} width="100%"/>
              <div className='detail-box'>
                  <h2>아티스트 인기곡</h2>
                  (업데이트 중)
                  {/* {selectedFestival.popularSongs.map((song, index) => (
                    <div key={index}>
                      {song.title} - {song.album} ({song.date})
                    </div>
                  ))} */}
                  <h2>아티스트 미리 듣기</h2>
                  (업데이트 중)
                  <h2>아티스트 정보</h2>
                  <div style={{ whiteSpace: "pre-line" }}>{selectedFestival.artistInfo}</div>
                </div>
              </div>
              )}


            {/* detailOther modal */}
            {selectedFestivalType === "detailOther" && (
            <div style={{ fontFamily: 'Pretendard'}}>
              <h2>{selectedFestival.title}</h2>
              <div>(업데이트 중)</div>
            </div>
          )}

            </div>
          )}
        </Modal>
    </article>
  );
};

export default TimeTable3Page;