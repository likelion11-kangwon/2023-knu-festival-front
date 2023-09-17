// 60주념기념관
import React from 'react';
import Menubar from '../../components/Menubar';
import './60thPage.css';
import { useState } from 'react';
import {useEffect,useRef, forwardRef, } from 'react';



const SixtiethPage = () => {

  let [truck_1, setTruck_1] = useState(false);
  let [truck_2, setTruck_2] = useState(false);
  let [truck_3, setTruck_3] = useState(false);
  let [truck_4, setTruck_4] = useState(false);
  let [truck_5, setTruck_5] = useState(false);
  let [truck_6, setTruck_6] = useState(false);
  let [truck_7, setTruck_7] = useState(false);
  let [truck_8, setTruck_8] = useState(false);
  let [truck_9, setTruck_9] = useState(false);
  let [truck_10, setTruck_10] = useState(false);
  let [truck_11, setTruck_11] = useState(false);
  let [truck_12, setTruck_12] = useState(false);
  let [truck_13, setTruck_13] = useState(false);
  let [truck_14, setTruck_14] = useState(false);
  let [truck_15, setTruck_15] = useState(false);
  let [truck_16, setTruck_16] = useState(false);
  let [truck_17, setTruck_17] = useState(false);

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

  let [alcohol,setAlcohl] = useState(false);
  let [council,setCouncil] = useState(false);
  let [potato,setPotato] = useState(false);


  return (
    <article>
      
        <Menubar />
        {/* 아래부터 작업하면 됩니다. */}
        <div className="sixth">
          <span className='truck_1'>
            <span onClick={() => {setTruck_1(!truck_1)}} className='truckButton'> 트1</span>
            <div className='like' onClick={() => {좋아요_1변경(좋아요_1+1)} }> ❤ {좋아요_1} </div>
            {truck_1 === true ? <Truck_1 setTruck_1={setTruck_1} /> : null}            
          </span>

          <span className='truck_2'>
            <span onClick={() => {setTruck_2(!truck_2)}} className='truckButton'> 트2</span>
            <div className='like' onClick={() => {좋아요_2변경(좋아요_2+1)}}> ❤ {좋아요_2} </div>
            {truck_2 === true ? <Truck_2 setTruck_2={setTruck_2} /> : null}            
          </span>


          <span className='truck_3'>
            <span onClick={() => {setTruck_3(!truck_3)}} className='truckButton'> 트3</span>
            <div className='like' onClick={() => {좋아요_3변경(좋아요_3+1)}}> ❤ {좋아요_3} </div>
            {truck_3 === true ? <Truck_3 setTruck_3={setTruck_3} /> : null}            
          </span>


          <span className='truck_4'>
            <span onClick={() => {setTruck_4(!truck_4)}} className='truckButton'> 트4</span>
            <div className='like' onClick={() => {좋아요_4변경(좋아요_4+1)}}> ❤ {좋아요_4} </div>
            {truck_4 === true ? <Truck_4 setTruck_4={setTruck_4} /> : null}            
          </span>


          <span className='truck_5'>
            <span onClick={() => {setTruck_5(!truck_5)}} className='truckButton'> 트5</span>
            <div className='like' onClick={() => {좋아요_5변경(좋아요_5+1)}}> ❤ {좋아요_5} </div>
            {truck_5 === true ? <Truck_5 setTruck_5={setTruck_5} /> : null}            
          </span>


          <span className='truck_6'>
            <span onClick={() => {setTruck_6(!truck_6)}} className='truckButton'> 트6</span>
            <div className='like' onClick={() => {좋아요_6변경(좋아요_6+1)}}> ❤ {좋아요_6} </div>
            {truck_6 === true ? <Truck_6 setTruck_6={setTruck_6} /> : null}            
          </span>


          <span className='truck_7'>
            <span onClick={() => {setTruck_7(!truck_7)}} className='truckButton'> 트7</span>
            <div className='like' onClick={() => {좋아요_7변경(좋아요_7+1)}}> ❤ {좋아요_7} </div>
            {truck_7 === true ? <Truck_7 setTruck_7={setTruck_7} /> : null}            
          </span>


          <span className='truck_8'>
            <span onClick={() => {setTruck_8(!truck_8)}} className='truckButton'> 트8</span>
            <div className='like' onClick={() => {좋아요_8변경(좋아요_8+1)}}> ❤ {좋아요_8} </div>
            {truck_8 === true ? <Truck_8 setTruck_8={setTruck_8} /> : null}            
          </span>


          <span className='truck_9'>
            <span onClick={() => {setTruck_9(!truck_9)}} className='truckButton'> 트9</span>
            <div className='like' onClick={() => {좋아요_9변경(좋아요_9+1)}}> ❤ {좋아요_9} </div>
            {truck_9 === true ? <Truck_9 setTruck_9={setTruck_9} /> : null}            
          </span>


          <span className='truck_10'>
            <span onClick={() => {setTruck_10(!truck_10)}} className='truckButton'> 트10</span>
            <div className='like' onClick={() => {좋아요_10변경(좋아요_10+1)}}> ❤ {좋아요_10} </div>
            {truck_10 === true ? <Truck_10 setTruck_10={setTruck_10} /> : null}            
          </span>


          <span className='truck_11'>
            <span onClick={() => {setTruck_11(!truck_11)}} className='truckButton'> 트11</span>
            <div className='like' onClick={() => {좋아요_11변경(좋아요_11+1)}}> ❤ {좋아요_11} </div>
            {truck_11 === true ? <Truck_11 setTruck_11={setTruck_11} /> : null}            
          </span>


          <span className='truck_12'>
            <span onClick={() => {setTruck_12(!truck_12)}} className='truckButton'> 트12</span>
            <div className='like' onClick={() => {좋아요_12변경(좋아요_12+1)}}> ❤ {좋아요_12} </div>
            {truck_12 === true ? <Truck_12 setTruck_12={setTruck_12} /> : null}            
          </span>


          <span className='truck_13'>
            <span onClick={() => {setTruck_13(!truck_13)}} className='truckButton'> 트13</span>
            <div className='like' onClick={() => {좋아요_13변경(좋아요_13+1)}}> ❤ {좋아요_13} </div>
            {truck_13 === true ? <Truck_13 setTruck_13={setTruck_13} /> : null}            
          </span>


          <span className='truck_14'>
            <span onClick={() => {setTruck_14(!truck_14)}} className='truckButton'> 트14</span>
            <div className='like' onClick={() => {좋아요_14변경(좋아요_14+1)}}> ❤ {좋아요_14} </div>
            {truck_14 === true ? <Truck_14 setTruck_14={setTruck_14} /> : null}            
          </span>


          <span className='truck_15'>
            <span onClick={() => {setTruck_15(!truck_15)}} className='truckButton'> 트15</span>
            <div className='like' onClick={() => {좋아요_15변경(좋아요_15+1)}}> ❤ {좋아요_15} </div>
            {truck_15 === true ? <Truck_15 setTruck_15={setTruck_15} /> : null}            
          </span>


          <span className='truck_16'>
            <span onClick={() => {setTruck_16(!truck_16)}} className='truckButton'> 트16</span>
            <div className='like' onClick={() => {좋아요_16변경(좋아요_16+1)}}> ❤ {좋아요_16} </div>
            {truck_16 === true ? <Truck_16 setTruck_16={setTruck_16} /> : null}            
          </span>


          <span className='truck_17'>
            <span onClick={() => {setTruck_17(!truck_17)}} className='truckButton'> 트17</span>
            <div className='like' onClick={() => {좋아요_17변경(좋아요_17+1)}}> ❤ {좋아요_17} </div>
            {truck_17 === true ? <Truck_17 setTruck_17={setTruck_17} /> : null}            
          </span>




          <span className='alcohol_1'>
            <span onClick={() => {setAlcohl(!alcohol)}} className='alcohlButton'>주류판매</span>
            <div className='like' onClick={() => {좋아요_주류판매_1변경(좋아요_주류판매_1+1)}}> ❤ {좋아요_주류판매_1} </div>
            {alcohol === true ? <Alcohol setAlcohl={setAlcohl} /> : null}     
          </span>


          <span className='alcohol_2'>
            <span onClick={() => {setAlcohl(!alcohol)}} className='alcohlButton'>주류판매</span>
            <div className='like' onClick={() => {좋아요_주류판매_2변경(좋아요_주류판매_2+1)}}> ❤ {좋아요_주류판매_2} </div>
            {alcohol === true ? <Alcohol setAlcohl={setAlcohl} /> : null}     
          </span>


          <span className='council'>
            <span onClick={() => {setAlcohl(!alcohol)}} className='councilButton'>총학생회</span>
            <div className='like' onClick={() => {좋아요_총학생회변경(좋아요_총학생회+1)}}> ❤ {좋아요_총학생회} </div>
            {council === true ? <Council setCouncil={setCouncil} /> : null}     
          </span>


          <span className='potato'>
            <span onClick={() => {setAlcohl(!alcohol)}} className='alcohlButton'>감자아일랜드</span>
            <div className='like' onClick={() => {좋아요_감자아일랜드변경(좋아요_감자아일랜드+1)}}> ❤ {좋아요_감자아일랜드} </div>
            {potato === true ? <Potato setPotato={setPotato} /> : null}     
          </span>


          <span className='enter_1'>입장안내</span>

          <span className='enter_2'>입장안내</span>


          

          <div onClick={() => {setList(!list)} } className='listButton'>푸드트럭 리스트 전체보기</div>
          {list === true ? <List setList={setList} setTruck_1={setTruck_1} 
          setTruck_2={setTruck_2} setTruck_3={setTruck_3} setTruck_4={setTruck_4} setTruck_5={setTruck_5} 
          setTruck_6={setTruck_6} setTruck_7={setTruck_7} setTruck_8={setTruck_8} 
          setTruck_9={setTruck_9} setTruck_10={setTruck_10} setTruck_11={setTruck_11} 
          setTruck_12={setTruck_12} setTruck_13={setTruck_13} setTruck_14={setTruck_14} 
          setTruck_15={setTruck_15} setTruck_16={setTruck_16} setTruck_17={setTruck_17} /> 
          : null}

        </div>


    </article>
  );
};


// 트럭 모달창 컴포넌트

const Truck_1 = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setTruck_1(false);
      }
    } 

  return (
    <>
    <div ref={wrapperRef} className='truck'>
      <span onClick={() => { props.setTruck_1(false)}} className='cancel'><b> X </b></span>

    </div>
    </>
  )
}

// 트럭 모달창 컴포넌트

const Truck_2 = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setTruck_2(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='truck'>
        <span onClick={() => { props.setTruck_2(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}



// 트럭 모달창 컴포넌트

const Truck_3 = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setTruck_3(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='truck'>
        <span onClick={() => { props.setTruck_3(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}



// 트럭 모달창 컴포넌트

const Truck_4 = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setTruck_4(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='truck'>
        <span onClick={() => { props.setTruck_4(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}



// 트럭 모달창 컴포넌트

const Truck_5 = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setTruck_5(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='truck'>
        <span onClick={() => { props.setTruck_5(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}



// 트럭 모달창 컴포넌트

const Truck_6 = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setTruck_6(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='truck'>
        <span onClick={() => { props.setTruck_6(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}



// 트럭 모달창 컴포넌트

const Truck_7 = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setTruck_7(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='truck'>
        <span onClick={() => { props.setTruck_7(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}



// 트럭 모달창 컴포넌트

const Truck_8 = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setTruck_8(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='truck'>
        <span onClick={() => { props.setTruck_8(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}



// 트럭 모달창 컴포넌트

const Truck_9 = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setTruck_9(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='truck'>
        <span onClick={() => { props.setTruck_9(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}



// 트럭 모달창 컴포넌트

const Truck_10 = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setTruck_10(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='truck'>
        <span onClick={() => { props.setTruck_10(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}



// 트럭 모달창 컴포넌트

const Truck_11 = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setTruck_11(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='truck'>
        <span onClick={() => { props.setTruck_11(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}



// 트럭 모달창 컴포넌트

const Truck_12 = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setTruck_12(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='truck'>
        <span onClick={() => { props.setTruck_12(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}



// 트럭 모달창 컴포넌트

const Truck_13 = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setTruck_13(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='truck'>
        <span onClick={() => { props.setTruck_13(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}



// 트럭 모달창 컴포넌트

const Truck_14 = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setTruck_14(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='truck'>
        <span onClick={() => { props.setTruck_14(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}



// 트럭 모달창 컴포넌트

const Truck_15 = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setTruck_15(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='truck'>
        <span onClick={() => { props.setTruck_15(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}



// 트럭 모달창 컴포넌트

const Truck_16 = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setTruck_16(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='truck'>
        <span onClick={() => { props.setTruck_16(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}



// 트럭 모달창 컴포넌트

const Truck_17 = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setTruck_17(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='truck'>
        <span onClick={() => { props.setTruck_17(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}



// 주류판매 모달창 컴포넌트

const Alcohol = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setAlcohl(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='alcoholModal'>
        <span onClick={() => { props.setTruck_17(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}





// 총학생회 모달창 컴포넌트

const Council = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setCouncil(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='councilModal'>
        <span onClick={() => { props.setCouncil(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}





// 감자아일랜드 모달창 컴포넌트

const Potato = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setPotato(false);
      }
    } 

  return (
    <>
    
      <div ref={wrapperRef} className='potatoModal'>
        <span onClick={() => { props.setPotato(false)}} className='cancel'><b> X </b></span>

      </div>

    </>
  )

}








// 주점 리스트 컴포넌트

const List = (props, ref) => {

  let wrapperRef = useRef(); //모달창 가장 바깥쪽 태그를 감싸주는 역할

    useEffect(()=>{
      document.addEventListener('mousedown', handleClickOutside);
      return()=>{
        document.removeEventListener('mousedown', handleClickOutside);
      }
    })
    const handleClickOutside=(event)=>{
      if (wrapperRef && !wrapperRef.current.contains(event.target)) {
        props.setTruck_1(false);
        props.setTruck_2(false);
        props.setTruck_3(false);
        props.setTruck_4(false);
        props.setTruck_5(false);
        props.setTruck_6(false);
        props.setTruck_7(false);
        props.setTruck_8(false);
        props.setTruck_9(false);
        props.setTruck_10(false);
        props.setTruck_11(false);
        props.setTruck_12(false);
        props.setTruck_13(false);
        props.setTruck_14(false);
        props.setTruck_15(false);
        props.setTruck_16(false);
        props.setTruck_17(false);
      }
    } 


  return (
    <div ref={wrapperRef} className='list'>
      <span onClick={() => { props.setList(false) }} className='cancel'><b> X </b></span>  
      
      <div>
        <span className='truckInfo' onClick={() => {props.setTruck_1(true)}}>트럭1 상세정보</span>
      </div>
      <div>
        <span className='truckInfo' onClick={() => {props.setTruck_2(true)}}>트럭2 상세정보</span>
      </div>
      <div>
        <span className='truckInfo' onClick={() => {props.setTruck_3(true)}}>트럭3 상세정보</span>
      </div>
      <div>
        <span className='truckInfo' onClick={() => {props.setTruck_4(true)}}>트럭4 상세정보</span>
      </div>
      <div>
        <span className='truckInfo' onClick={() => {props.setTruck_5(true)}}>트럭5 상세정보</span>
      </div>
      <div>
        <span className='truckInfo' onClick={() => {props.setTruck_6(true)}}>트럭6 상세정보</span>
      </div>
      <div>
        <span className='truckInfo' onClick={() => {props.setTruck_7(true)}}>트럭7 상세정보</span>
      </div>
      <div>
        <span className='truckInfo' onClick={() => {props.setTruck_8(true)}}>트럭8 상세정보</span>
      </div>
      <div>
        <span className='truckInfo' onClick={() => {props.setTruck_9(true)}}>트럭9 상세정보</span>
      </div>
      <div>
        <span className='truckInfo' onClick={() => {props.setTruck_10(true)}}>트럭10 상세정보</span>
      </div>
      <div>
        <span className='truckInfo' onClick={() => {props.setTruck_11(true)}}>트럭11 상세정보</span>
      </div>
      <div>
        <span className='truckInfo' onClick={() => {props.setTruck_12(true)}}>트럭12 상세정보</span>
      </div>
      <div>
        <span className='truckInfo' onClick={() => {props.setTruck_13(true)}}>트럭13 상세정보</span>
      </div>
      <div>
        <span className='truckInfo' onClick={() => {props.setTruck_14(true)}}>트럭14 상세정보</span>
      </div>
      <div>
        <span className='truckInfo' onClick={() => {props.setTruck_15(true)}}>트럭15 상세정보</span>
      </div>
      <div>
        <span className='truckInfo' onClick={() => {props.setTruck_16(true)}}>트럭16 상세정보</span>
      </div>
      <div>
        <span className='truckInfo' onClick={() => {props.setTruck_17(true)}}>트럭17 상세정보</span>
      </div>

    </div>
  )
}


export default SixtiethPage;
