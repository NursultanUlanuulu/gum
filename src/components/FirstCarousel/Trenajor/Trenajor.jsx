import React from 'react'
import styled from 'styled-components'

import image1 from '../../../assets/Yusuf/Image/image1.png'
import image3 from '../../../assets/Yusuf/Image/image3.png'
// import image8 from '../../../assets/Yusuf/Image/image8.png'

function Trenajor() {
    
    const BigBox = styled.div`
      /* display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 15px;
      margin-right: 15px; */

      .FirstText {
        width: 369px;
        height: 33px;
        /* margin-top: -25px; */
        font-size: 30px;
        color: #384255;;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      .main {
        border: 1px solid black;

        width: 1410px;
        height: 875px;
        display: grid;
        /* justify-content: space-between;
        align-items: center;
        gap: 30px;
        grid-gap: 30px; */

        grid-template-columns: repeat(4, 330px);
        grid-template-rows: repeat(2, 430px);

      }

      /* .topBox {
        width: 1410px;
        display: flex;
        gap: 30px;
      } */

      /* .rBox {
        width: 705px;
        height: 430px;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
      } */

      /* .lBox {
        display: flex;
        left: 30px;
        gap: 30px;
      } */

      /* .lastBox {
        display: flex;
        gap: 30px;
      } */

      .pic1 {
        width: 330px;
        height: 430px;
        background-image: url(${image1});
        background-color: #1a1a25;;
        border-radius: 5px;

        grid-column: span 2;
      }

      .pic1 h3{
        width: 50px;
        color: white;
        padding-top: 20px;
        padding-left: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      .pic2 {
        width: 330px;
        height: 430px;
        background-image: url(${image1});
        background-color: #97979b;
        border-radius: 5px;

        grid-row: span 2;
      }

      .pic2 h3{
        width: 50px;
        color: #282020;
        padding-top: 20px;
        padding-left: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      .pic3 {
        width: 330px;
        height: 200px;
        border-radius: 5px;
        background-image: url(${image3});
        background-color: #bbbbc0;
        background-repeat: no-repeat;
        background-position: right bottom;
      }

      .pic3 h3 {
        width: 50px;
        padding-top: 20px;
        padding-left: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      .pic4 {
        width: 330px;
        height: 200px;
        border-radius: 5px;
        background-image: url(${image3});
        background-color: #bbbbc0;
        background-repeat: no-repeat;
        background-position: right bottom;
      }

      .pic4 h3 {
        width: 50px;
        padding-top: 20px;
        padding-left: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }

      .pic8 {
        width: 330px;
        height: 280px;
        border-radius: 5px;
        background-image: url(${image3});
        background-color: #bbbbc0;
        background-repeat: no-repeat;
        background-position: right bottom;
      }

      .pic8 h3 {
        width: 50px;
        padding-top: 20px;
        padding-left: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
        padding: 12px 20px 13px 20px;
        justify-content: center;
        align-items: center;
      }
    `
  
    return (
      <BigBox>
            <h2 className='FirstText'>Тренажеры для дома</h2>
          <div className='main'>

            <div className='topBox'>

              <div className='lBox'>
                <div className='pic1'>
                  <h3>Беговые дорожки</h3>
                </div>

                <div className='pic2'>
                  <h3>Беговые дорожки</h3>
                </div>
              </div>

              <div className='rBox'>

                <div className='pic4'>
                  <h3>Силовые тренажеры</h3>
                </div>

                <div className='pic3'>
                  <h3>Силовые тренажеры</h3>
                </div>
                
                <div className='pic4'>
                  <h3>Силовые тренажеры</h3>
                </div>
              </div>


            <div className='lastBox'>
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

            </div>
            </div>

          </div>
          
          <button className='LastButton'>Все категории</button>
      </BigBox>
    )
}

export default Trenajor
