import React from 'react'
import styled from 'styled-components'

import image1 from '../../../assets/Yusuf/Image/image1.png'
import image3 from '../../../assets/Yusuf/Image/image3.png'

function Trenajor2() {
  const BigBox = styled.div`
    width: 1410px;
    height: 875px;
    display: grid;
    grid-gap: 30px;
    margin: 0 auto;

    p {
      margin-top: 0;
      margin-bottom: -10px;
      font-size: 30px;
      font-weight: 700;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .main {
      width: 100%;
      display: grid;
      grid-gap: 30px;
    }

    .LastButton {
      width: 142px;
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

  const TopBox = styled.div`
    width: 330px;
    height: 430px;
    display: grid;
    grid-template-columns: repeat(4, 330px);
    grid-template-rows: repeat(2, 200px);
    grid-gap: 30px;

    .pic1 {
      background-image: url(${image1});
      background-color: #1a1a25;;
      border-radius: 5px;
      grid-row: span 2;
    }

    .pic1 h3{
      width: 50px;
      color: white;
      padding-top: 10px;
      padding-left: 30px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .pic3 {
      background-image: url(${image3});
      background-position: right bottom;
      background-repeat: no-repeat;
      object-fit: cover;
      background-color: #bbbbc0;
      border-radius: 5px;
    }

    .pic3 h3{
      width: 50px;
      color: #282020;
      padding-top: 10px;
      padding-left: 30px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

  `

  const BotBox = styled.div`
    width: 330px;
    height: 280px;
    display: grid;
    grid-template-columns: repeat(4, 330px);
    grid-gap: 30px;

    .pic8 {
      background-image: url(${image3});
      background-position: right bottom;
      background-repeat: no-repeat;
      object-fit: cover;
      background-color: #bbbbc0;
      border-radius: 5px;
    }

    .pic8 h3 {
      width: 50px;
      padding-top: 20px;
      padding-left: 30px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
  `

  return (
    <BigBox>
      <p>Тренажеры для дома</p>
      <div className='main'>

        <TopBox>

          <div className='pic1'>
             <h3>Беговые дорожки</h3>
          </div>

          <div className='pic1'>
             <h3>Беговые дорожки</h3>
          </div>

          <div className='pic3'>
            <h3>Силовые тренажеры</h3>
          </div>

          <div className='pic3'>
            <h3>Силовые тренажеры</h3>
          </div>

          <div className='pic3'>
            <h3>Силовые тренажеры</h3>
          </div>

          <div className='pic3'>
            <h3>Силовые тренажеры</h3>
          </div>

        </TopBox>

        <BotBox>
          <div className='pic8'>
            <h3>Фитнес аксессуары</h3>
          </div>

          <div className='pic8'>
            <h3>Фитнес аксессуары</h3>
          </div>

          <div className='pic8'>
            <h3>Фитнес аксессуары</h3>
          </div>

          <div className='pic8'>
            <h3>Фитнес аксессуары</h3>
          </div>
        </BotBox>

      </div>
              
      <button className='LastButton'>Все категории</button>
    
    </BigBox>
  )
}

export default Trenajor2