// 60주념기념관
import React from 'react';
import Menubar from '../../components/Menubar';
import './60thPage.css';
import { useState } from 'react';
import {useEffect,useRef, forwardRef, } from 'react';
import dummy60thData from './dummy60thData.json'
import icon from './Property 1=Food Truck.png'



const SixtiethPage = () => {

  let [modal, setModal] = useState(false);
  let [list,setList] = useState(false);

  return (
    <article>
      
        <Menubar />
        {/* 아래부터 작업하면 됩니다. */}
        <div className="sixth">
          <span className='truck_1Move'>
            <span id='1' onClick={() => {setModal(!modal)}} className='truckButton'><img src={icon} alt='로고'></img></span>
            <div> 1 </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>

          <span className='truck_2Move'>
            <span id='2' onClick={() => {setModal(!modal)}} className='truckButton'><img src={icon} alt='로고'></img></span>
            <div> 1 </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_3Move'>
            <span id='3' onClick={() => {setModal(!modal)}} className='truckButton'> <img src={icon} alt='로고'></img></span>
            <div> 1 </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_4Move'>
            <span id='4' onClick={() => {setModal(!modal)}} className='truckButton'> <img src={icon} alt='로고'></img></span>
            <div> 1 </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_5Move'>
            <span id='5' onClick={() => {setModal(!modal)}} className='truckButton'> <img src={icon} alt='로고'></img></span>
            <div> 1 </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_6Move'>
            <span  onClick={() => {setModal(!modal)}} className='truckButton'> <img src={icon} alt='로고'></img></span>
            <div> 1 </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_7Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> <img src={icon} alt='로고'></img></span>
            <div> 1 </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_8Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> <img src={icon} alt='로고'></img></span>
            <div> 1 </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_9Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> <img src={icon} alt='로고'></img></span>
            <div> 1 </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_10Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> <img src={icon} alt='로고'></img></span>
            <div> 1 </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_11Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> <img src={icon} alt='로고'></img></span>
            <div> 1 </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_12Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> <img src={icon} alt='로고'></img></span>
            <div> 1 </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_13Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> <img src={icon} alt='로고'></img></span>
            <div> 1 </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_14Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> <img src={icon} alt='로고'></img></span>
            <div> 1 </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_15Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> <img src={icon} alt='로고'></img></span>
            <div> 1 </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_16Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> <img src={icon} alt='로고'></img></span>
            <div> 1 </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>


          <span className='truck_17Move'>
            <span onClick={() => {setModal(!modal)}} className='truckButton'> <img src={icon} alt='로고'></img></span>
            <div> 1 </div>
            {modal === true ? <Modal setModal={setModal} /> : null}            
          </span>




          <span className='alcohol_1Move'>
            <span onClick={() => {setModal(!modal)}} className='alcohlButton'>주류판매</span>
            {modal === true ? <Modal setModal={setModal} /> : null}     
          </span>


          <span className='alcohol_2Move'>
            <span onClick={() => {setModal(!modal)}} className='alcohlButton'>주류판매</span>
            {modal === true ? <Modal setModal={setModal} /> : null}     
          </span>


          <span className='councilMove'>
            <span onClick={() => {setModal(!modal)}} className='councilButton'>총학생회</span>
            {modal === true ? <Modal setModal={setModal} /> : null}     
          </span>


          <span className='potatoMove'>
            <span onClick={() => {setModal(!modal)}} className='alcohlButton'>감자아일랜드</span>
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


  let [좋아요_1, 좋아요_1변경] = useState(0);
  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할



  return (
    <>
    <div ref={wrapperRef} className='modal'>
      <span onClick={() => { props.setModal(false)}} className='cancel'><b> X </b></span>
      <div className='like' onClick={() => {좋아요_1변경(좋아요_1+1)} }>❤️{좋아요_1} </div>

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
