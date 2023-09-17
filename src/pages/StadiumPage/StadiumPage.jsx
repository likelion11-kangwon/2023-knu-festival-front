// 대운동장
import React from 'react';
import Menubar from '../../components/Menubar';
import './StadiumPage.css';
import { useState } from 'react';
import {useEffect,useRef, forwardRef, } from 'react';

const StadiumPage = () => {

  let [booth_1, setBooth_1] = useState(false);


  return (
    <article>
        <Menubar />
        {/* 아래부터 작업하면 됩니다. */}
        크카카 크카카
    </article>
  );
};

export default StadiumPage;
