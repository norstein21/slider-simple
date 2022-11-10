import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import people from './data';

function App() {
  const [orang,setOrang] = useState(data);
  const [nomorIndex,setNomorIndex] = useState(0);

  useEffect(()=>{
    let indexAwal = 0;
    let lastNomorIndex = orang.length - 1;
    if ( nomorIndex < 0){
      setNomorIndex(lastNomorIndex)
    }
    if (nomorIndex === orang.length - 1){
      setNomorIndex(indexAwal)
    }
  },[orang,nomorIndex])

  useEffect(()=>{
    let slider = setInterval(()=>{
      setNomorIndex(nomorIndex + 1)
    },4000);
    return ()=> clearInterval(slider);
  },[nomorIndex])

  return (
  <section className='section'>
    <div className='title'>
      <h2>
        <span>/</span>Reviews
      </h2>
    </div>

    <div className='section-center'>
      {orang.map((org,orgIndex)=>{
        const {id,name,image,title,quote} = org;
        console.log('index dalem',orgIndex)
        console.log('nomorIndex',nomorIndex)
        let posisi = 'nextSlide'
        if ( orgIndex === nomorIndex){
          posisi = 'activeSlide'
        }
        if ( orgIndex === nomorIndex - 1 || (nomorIndex === 0 && orgIndex === orang.length - 1)){
          posisi = 'lastSlide'
        }
    
        return (
          <article key={id} className={posisi}>
            <img src={image} alt={name} className='person-img'></img>
            <h4>{name}</h4>
            <h5>{title}</h5>
            <p className='text'>{quote}</p>
            <FaQuoteRight className='icon' />
            

          </article>
        );
      })}
      
      <button className='prev' onClick={()=>setNomorIndex(nomorIndex - 1)}>
        <FiChevronLeft></FiChevronLeft>
      </button>
      <button className='next' onClick={()=>setNomorIndex(nomorIndex + 1)}>
        <FiChevronRight></FiChevronRight>
      </button>
    </div>
  </section>
  );
}

export default App;
