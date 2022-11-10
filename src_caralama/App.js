import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [orang,setOrang] = useState(data);
  const [nomor,setNomor] = useState(0);
  

  const checkNomor = (angka) =>{
    if (angka > orang.length - 1){
      return 0;
    }
    //soalnya indexnya dihitung dr 0, sedangkan length dihitung dari 1
    if (angka < 0 ){
      return orang.length - 1
    }
    return angka;
  }

  const tombolNext = (angka)=>{
    let nomorBaru = angka + 1;
    setNomor(checkNomor(nomorBaru));
  }

  const tombolPrev = (angka)=>{
    let nomorBaru = angka - 1;
    setNomor(checkNomor(nomorBaru));
  }

  const {image,name,title,quote} = orang[nomor];

  return (
  <section className='section'>
    <div className='title'>
      <h2>
        <span>/</span>Reviews
      </h2>
    </div>

    <div className='section-center'>
      {orang.map((org,orgIndex)=>{
        return (
          <article key={orgIndex}>
            <img src={image} alt={name} className='person-img'></img>
            <h4>{name}</h4>
            <h5>{title}</h5>
            <p className='text'>{quote}</p>
            <div className='icon'>
              <FaQuoteRight />
            </div>
            

          </article>
        );
      })}
      
      <button className='prev' onClick={()=>tombolPrev(nomor)}>
        <FiChevronLeft></FiChevronLeft>
      </button>
      <button className='next' onClick={()=>tombolNext(nomor)}>
        <FiChevronRight></FiChevronRight>
      </button>
    </div>
  </section>
  );
}

export default App;
