// 60주념기념관
import React from 'react';
import Menubar from '../../components/Menubar';
import './60thPage.css';
import { useState } from 'react';

const SixtiethPage = () => {

  let [modal, setModal] = useState(false);

  return (
    <article>
        <Menubar />
        {/* 아래부터 작업하면 됩니다. */}
        <div className="sixth">
          <div onClick={() => {setModal(!modal)}} className='truck'>
            트럭
          </div>
          {modal === true ? <Modal setModal={setModal} /> : null}
        </div>
    </article>

  );
};

const Modal = (props) => {

  let [pub,setPub] = useState(false);

  return (
    <>
    <div className='modal'>
      <span onClick={() => { props.setModal(false) }} className='cancel'><b> &#8678; </b></span>

      <div>음식 종류</div>
      <div>가격</div>
      <div>기타 등등</div>

      <div onClick={() => {setPub(!pub)}} className='list'>리스트 전체보기</div>
      {pub === true ? <Pub setPub={setPub} /> : null}
    </div>
    </>
  )
}

const Pub = (props) => {

  return (
    <div className='pub'>
      <span onClick={() => { props.setPub(false) }} className='cancel'><b> &#8678; </b></span>

      <div>주점 ~ </div>
      <div>주점 ~ </div>
      <div>주점 ~ </div>
    </div>
  )
}



export default SixtiethPage;
