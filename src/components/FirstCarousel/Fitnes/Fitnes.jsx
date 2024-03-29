import React from 'react'
import styled from 'styled-components'

import image11 from '../../../assets/Yusuf/Image/image11.png'
import image12 from '../../../assets/Yusuf/Image/image12.png'

function Fitnes() {

  const BigBox = styled.div`
  width: 1410px;
  height: 725px;
  display: grid;
  grid-gap: 30px;
  margin: 120px auto;

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

const BotBox = styled.div`
width: 330px;
height: 590px;
display: grid;
grid-template-columns: repeat(4, 330px);
grid-gap: 30px;

.pic11 {
  background-image: url(${image11});
  background-position: right bottom;
  background-repeat: no-repeat;
  object-fit: cover;
  background-color: #bbbbc0;
  border-radius: 5px;
}

.pic12 {
  background-image: url(${image11});
  background-position: right bottom;
  background-repeat: no-repeat;
  object-fit: cover;
  background-color: #bbbbc0;
  border-radius: 5px;
  grid-column: span 2;
}

.pic11 h3 {
  width: 50px;
  padding-top: 20px;
  padding-left: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.pic12 h3 {
  width: 50px;
  padding-top: 20px;
  padding-left: 30px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
`


  return (
    <BigBox>
      <p>Для фитнес клубов</p>

      <div className='main'>
        
        <BotBox>

          <div className='pic12'>
            <h3>Профессиональные кардиотренажеры</h3>
          </div>

          <div className='pic11'>
            <h3>Профессиональные кардиотренажеры</h3>
          </div>

          <div className='pic11'>
            <h3>Профессиональные кардиотренажеры</h3>
          </div>

          <div className='pic11'>
            <h3>Профессиональные кардиотренажеры</h3>
          </div>

          <div className='pic11'>
            <h3>Профессиональные кардиотренажеры</h3>
          </div>

          <div className='pic11'>
            <h3>Профессиональные кардиотренажеры</h3>
          </div>

          <div className='pic11'>
            <h3>Профессиональные кардиотренажеры</h3>
          </div>

        </BotBox>

      </div>

      <button className='LastButton'>Все категории</button>
    
    </BigBox>
  )
}

export default Fitnes