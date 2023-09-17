// 60주념기념관
import React from 'react';
import Menubar from '../../components/Menubar';
import './60thPage.css';
import { useState } from 'react';
import {useEffect,useRef, forwardRef, } from 'react';
import dummy60thData from './dummy60thData.json'



const SixtiethPage = () => {

  let [modal, setModal] = useState(false);

  let [좋아요_1, 좋아요_1변경] = useState(0);
  let [좋아요_2, 좋아요_2변경] = useState(0);
  let [좋아요_3, 좋아요_3변경] = useState(0);
  let [좋아요_4, 좋아요_4변경] = useState(0);
  let [좋아요_5, 좋아요_5변경] = useState(0);
  let [좋아요_6, 좋아요_6변경] = useState(0);
  let [좋아요_7, 좋아요_7변경] = useState(0);
  let [좋아요_8, 좋아요_8변경] = useState(0);
  let [좋아요_9, 좋아요_9변경] = useState(0);
  let [좋아요_10, 좋아요_10변경] = useState(0);
  let [좋아요_11, 좋아요_11변경] = useState(0);
  let [좋아요_12, 좋아요_12변경] = useState(0);
  let [좋아요_13, 좋아요_13변경] = useState(0);
  let [좋아요_14, 좋아요_14변경] = useState(0);
  let [좋아요_15, 좋아요_15변경] = useState(0);
  let [좋아요_16, 좋아요_16변경] = useState(0);
  let [좋아요_17, 좋아요_17변경] = useState(0);
  let [좋아요_주류판매_1, 좋아요_주류판매_1변경] = useState(0);
  let [좋아요_주류판매_2, 좋아요_주류판매_2변경] = useState(0);
  let [좋아요_총학생회, 좋아요_총학생회변경] = useState(0);
  let [좋아요_감자아일랜드, 좋아요_감자아일랜드변경] = useState(0);

  let [list,setList] = useState(false);

  return (
    <article>
      
        <Menubar />
        {/* 아래부터 작업하면 됩니다. */}
        <div className="sixth">


          <span className='truck_1Move'>
            <span id='1' onClick={() => {setModal(!modal)}} className='truckButton'> 트1</span>
            <div className='like' onClick={() => {좋아요_1변경(좋아요_1+1)} }> ❤ {좋아요_1} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>

          <span className='truck_2Move'>
            <span id='2' onClick={() => {setModal(!modal)}} className='truckButton'> 트2</span>
            <div className='like' onClick={() => {좋아요_2변경(좋아요_2+1)}}> ❤ {좋아요_2} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_3Move'>
            <span id='3' onClick={() => {setModal(!modal)}} className='truckButton'> 트3</span>
            <div className='like' onClick={() => {좋아요_3변경(좋아요_3+1)}}> ❤ {좋아요_3} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_4Move'>
            <span id='4' onClick={() => {setModal(!modal)}} className='truckButton'> 트4</span>
            <div className='like' onClick={() => {좋아요_4변경(좋아요_4+1)}}> ❤ {좋아요_4} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_5Move'>
            <span id='5' onClick={() => {setModal(!modal)}} className='truckButton'> 트5</span>
            <div className='like' onClick={() => {좋아요_5변경(좋아요_5+1)}}> ❤ {좋아요_5} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_6Move'>
            <span  onClick={() => {setModal(!modal)}} className='truckButton'> 트6</span>
            <div className='like' onClick={() => {좋아요_6변경(좋아요_6+1)}}> ❤ {좋아요_6} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_7Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> 트7</span>
            <div className='like' onClick={() => {좋아요_7변경(좋아요_7+1)}}> ❤ {좋아요_7} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_8Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> 트8</span>
            <div className='like' onClick={() => {좋아요_8변경(좋아요_8+1)}}> ❤ {좋아요_8} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_9Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> 트9</span>
            <div className='like' onClick={() => {좋아요_9변경(좋아요_9+1)}}> ❤ {좋아요_9} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_10Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> 트10</span>
            <div className='like' onClick={() => {좋아요_10변경(좋아요_10+1)}}> ❤ {좋아요_10} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_11Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> 트11</span>
            <div className='like' onClick={() => {좋아요_11변경(좋아요_11+1)}}> ❤ {좋아요_11} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_12Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> 트12</span>
            <div className='like' onClick={() => {좋아요_12변경(좋아요_12+1)}}> ❤ {좋아요_12} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_13Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> 트13</span>
            <div className='like' onClick={() => {좋아요_13변경(좋아요_13+1)}}> ❤ {좋아요_13} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_14Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> 트14</span>
            <div className='like' onClick={() => {좋아요_14변경(좋아요_14+1)}}> ❤ {좋아요_14} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_15Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> 트15</span>
            <div className='like' onClick={() => {좋아요_15변경(좋아요_15+1)}}> ❤ {좋아요_15} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_16Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> 트16</span>
            <div className='like' onClick={() => {좋아요_16변경(좋아요_16+1)}}> ❤ {좋아요_16} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_17Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> 트17</span>
            <div className='like' onClick={() => {좋아요_17변경(좋아요_17+1)}}> ❤ {좋아요_17} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>




          <span className='alcohol_1Move'>
            <span onClick={() => {setModal(!modal)}} className='alcohlButton'>주류판매</span>
            <div className='like' onClick={() => {좋아요_주류판매_1변경(좋아요_주류판매_1+1)}}> ❤ {좋아요_주류판매_1} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}     
          </span>


          <span className='alcohol_2Move'>
            <span onClick={() => {setModal(!modal)}} className='alcohlButton'>주류판매</span>
            <div className='like' onClick={() => {좋아요_주류판매_2변경(좋아요_주류판매_2+1)}}> ❤ {좋아요_주류판매_2} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}     
          </span>


          <span className='councilMove'>
            <span onClick={() => {setModal(!modal)}} className='councilButton'>총학생회</span>
            <div className='like' onClick={() => {좋아요_총학생회변경(좋아요_총학생회+1)}}> ❤ {좋아요_총학생회} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}     
          </span>


          <span className='potatoMove'>
            <span onClick={() => {setModal(!modal)}} className='alcohlButton'>감자아일랜드</span>
            <div className='like' onClick={() => {좋아요_감자아일랜드변경(좋아요_감자아일랜드+1)}}> ❤ {좋아요_감자아일랜드} </div>
            {modal === true ? <Modal setModal={setModal} /> : null}     
          </span>


          <span className='enter_1'>입장안내</span>

          <span className='enter_2'>입장안내</span>


          

          <div onClick={() => {setList(!list)} } className='listButton'>
            <div className='listButtonText'>푸드트럭 리스트 전체보기&nbsp;&nbsp;&gt;</div>
          </div>
          {list === true ? <List setList={setList} setModal={setModal}/> : null}

        </div>


    </article>
  );
};


// 트럭 모달창 컴포넌트

const Modal = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setModal(false);
      }
    } 

  return (
    <>
    <div ref={wrapperRef} className='modal'>
      <span onClick={() => { props.setModal(false)}} className='cancel'><b> X </b></span>
    

    </div>
    </>
  )
}


// 주점 리스트 컴포넌트

const List = (props) => {

  return (
    <div className='listModal'>

      <span onClick={() => { props.setList(false) }} className='cancel'><b> X </b></span> 
      <div>
        <span className='guideButton' onClick={()=>{props.setModal(true)}}>백령술상 이용 방법 및 입장 안내 &gt;</span>
      </div>
      <div>
        <span className='guideButton' onClick={()=>{props.setModal(true)}}>백령술상 주류 및 음료 가격 안내 &gt;</span>
      </div>
      <div>
        <span className='truckButtonInList' onClick={() => {props.setModal(true)}}>트럭1 상세정보</span>
      </div>
      <div>
        <span className='truckButtonInList' onClick={() => {props.setModal(true)}}>트럭2 상세정보</span>
      </div>
      <div>
        <span className='truckButtonInList' onClick={() => {props.setModal(true)}}>트럭3 상세정보</span>
      </div>
      <div>
        <span className='truckButtonInList' onClick={() => {props.setModal(true)}}>트럭4 상세정보</span>
      </div>
      <div>
        <span className='truckButtonInList' onClick={() => {props.setModal(true)}}>트럭5 상세정보</span>
      </div>
      <div>
        <span className='truckButtonInList' onClick={() => {props.setModal(true)}}>트럭6 상세정보</span>
      </div>
      <div>
        <span className='truckButtonInList' onClick={() => {props.setModal(true)}}>트럭7 상세정보</span>
      </div>
      <div>
        <span className='truckButtonInList' onClick={() => {props.setModal(true)}}>트럭8 상세정보</span>
      </div>
      <div>
        <span className='truckButtonInList' onClick={() => {props.setModal(true)}}>트럭9 상세정보</span>
      </div>
      <div>
        <span className='truckButtonInList' onClick={() => {props.setModal(true)}}>트럭10 상세정보</span>
      </div>
      <div>
        <span className='truckButtonInList' onClick={() => {props.setModal(true)}}>트럭11 상세정보</span>
      </div>
      <div>
        <span className='truckButtonInList' onClick={() => {props.setModal(true)}}>트럭12 상세정보</span>
      </div>
      <div>
        <span className='truckButtonInList' onClick={() => {props.setModal(true)}}>트럭13 상세정보</span>
      </div>
      <div>
        <span className='truckButtonInList' onClick={() => {props.setModal(true)}}>트럭14 상세정보</span>
      </div>
      <div>
        <span className='truckButtonInList' onClick={() => {props.setModal(true)}}>트럭15 상세정보</span>
      </div>
      <div>
        <span className='truckButtonInList' onClick={() => {props.setModal(true)}}>트럭16 상세정보</span>
      </div>
      <div>
        <span className='truckButtonInList' onClick={() => {props.setModal(true)}}>트럭17 상세정보</span>
      </div>

    </div>
  )
}


export default SixtiethPage;
