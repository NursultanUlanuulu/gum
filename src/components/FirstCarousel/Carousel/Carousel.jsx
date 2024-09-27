import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../Carousel/style.css'

import image29 from '../../../assets/Yusuf/Image/image29.png'

// import required modules
import { Navigation } from 'swiper/modules';
import styled from 'styled-components';

function Carousel() {
  const Box = styled.div`
    width: 1800px;
    height: 500px;
    margin-inline: auto;
    margin-bottom: 203px;
    display: flex;
    `

  const Main = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: space-around;
    background-image: linear-gradient(to right, #d7d8db, #dce0e2, #e2e8e8, #eaefec, #f4f6f1);
    border-radius: 10px;
    /* border: 1px solid black; */
      
    img {
      width: 648px;
      height: 500px;
      mix-blend-mode: darken;
    }
    
    .carTxt {
      width: 512.8px;
      height: 336px;
      display: grid;
      margin-inline: 70px;
      grid-gap: 24px;
    }

    .carTxt p {
      color: rgb(245, 59, 73);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 24px;
      font-weight: 900;
      line-height: 110%;
      letter-spacing: 0%;
      text-align: left;
      text-transform: uppercase;
      margin-top: 83px;
    }

    .carTxt span {
      color: rgb(26, 26, 37);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 49.55px;
      font-weight: 800;
      line-height: 110%;
      letter-spacing: 0%;
      text-align: left;
      text-transform: uppercase;
    }

    .carTxt button {
      width: 147px;
      height: 42px;
      border: 1px solid #F53B49;
      border-radius: 8px;
      box-sizing: border-box;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 14px;
      font-weight: 700;
      color: #F53B49;
      padding: 10px 20px 13px 20px;
      background-color: transparent;
    }
  `
    


  return (
    <>
    <Swiper 
      navigation={true} 
      modules={[Navigation]}
      className="mySwiper">
    <SwiperSlide>

        <Box>

          <Main>
            <div className='carTxt'>
              <p>ZERO RUNNER</p>
              <span>Бег с нулевой ударной нагрузкой</span>
              <span>на суставы</span>
              <button>Узнать больше</button>
            </div>
  
            <img src={image29} alt="" />
          
          </Main>
          
        </Box>

      </SwiperSlide>
    <SwiperSlide>

        <Box>

          <Main>
            <div className='carTxt'>
              <p>ZERO RUNNER</p>
              <span>Бег с нулевой ударной нагрузкой</span>
              <span>на суставы</span>
              <button>Узнать больше</button>
            </div>
  
            <img src={image29} alt="" />
          
          </Main>
          
        </Box>

      </SwiperSlide>
    </Swiper>
  </>  )
}

export default Carousel