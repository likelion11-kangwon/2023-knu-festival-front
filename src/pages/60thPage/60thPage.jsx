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
          <div onClick={() => {setModal(!modal)}}className='truck'>
            트럭
          </div>
          {modal === true ? <Modal/> : null}
        </div>
    </article>

  );
};

const Modal = () => {

  return (
    <div className='modal'>
      <div>음식 종류</div>
      <div>가격</div>
      <div>기타 등등</div>
    </div>
  )
}



export default SixtiethPage;
