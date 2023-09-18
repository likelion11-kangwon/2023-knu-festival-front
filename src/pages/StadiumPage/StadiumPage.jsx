// 대운동장
import React from 'react';
import Menubar from '../../components/Menubar';
import './StadiumPage.css';
import { useState } from 'react';
import {useEffect,useRef, forwardRef, } from 'react';

const StadiumPage = () => {

  let [booth, setBooth] = useState(false);
  let [list,setList] = useState(false);

  return (
    <article>
        <Menubar />
        {/* 아래부터 작업하면 됩니다. */}
        <div className='stadium'>


          <span onClick={()=>{setBooth(!booth)}} className='boothButton_1'>부쓰1</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_2'>부쓰2</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_3'>부쓰3</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_4'>부쓰4</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_5'>부쓰5</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_6'>부쓰6</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_7'>부쓰7</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_8'>부쓰8</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_9'>부쓰9</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_10'>부쓰10</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_11'>부쓰11</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_12'>부쓰12</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_13'>부쓰13</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_14'>부쓰14</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_15'>부쓰15</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_16'>부쓰16</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_17'>부쓰17</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_18'>부쓰18</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_19'>부쓰19</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_20'>부쓰20</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_21'>부쓰21</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_22'>부쓰22</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_23'>부쓰23</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_24'>부쓰24</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_25'>부쓰25</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
          <span onClick={()=>{setBooth(!booth)}} className='boothButton_26'>부쓰26</span>
          {booth === true ? <Booth setBooth={setBooth} /> : null}
        
          <div onClick={() => {setList(!list)} } className='listButtonInStadium'>
            <div className='listButtonTextInStadium'>부스 리스트 전체보기&nbsp;&nbsp;&gt;</div>
          </div>
          {list === true ? <List setList={setList} setBooth={setBooth}/> : null}

        </div>
    </article>
  );
};


// 부스들 모달창 컴포넌트
const Booth = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

  return (
    <>
    <div ref={wrapperRef} className='boothModal'>
      <span onClick={() => { props.setBooth(false)}} className='cancel'><b> X </b></span>
    </div>
    </>
  )
}


// 부스들 전체보기 컴포넌트
const List = (props) => {

  return (
    <div className='listModalInStadium'>

      <span onClick={() => { props.setList(false) }} className='cancel'><b> X </b></span> 
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스1 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스2 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스3 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스4 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스5 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스6 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스7 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스8 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스9 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스10 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스11 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스12 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스13 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스14 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스15 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스16 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스17 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스18 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스19 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스20 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스21 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스22 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스23 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스24 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스25 상세정보</span>
      </div>
      <div>
        <span className='boothButtonInList' onClick={() => {props.setBooth(true)}}>부스26 상세정보</span>
      </div>
    </div>
  )
}



export default StadiumPage;
