import React from 'react'
import Logo from '../../assets/Abdurahman/svg/Logo.svg'
import styled from 'styled-components'
import svg from '../../assets/Abdurahman/svg/profile.svg'
import menu from '../../assets/Abdurahman/svg/menu.svg'
import search from '../../assets/Abdurahman/svg/search.svg'
import diagram from '../../assets/Abdurahman/svg/diagram.svg'
import lock from '../../assets/Abdurahman/svg/lock.svg'
import like from '../../assets/Abdurahman/svg/like.svg'



function Header() {

    

    const StyledButton = styled.button`
        width: 142px;
        height: 30px;
        padding: 5px;
        color: rgb(247, 247, 247);
        font-family: Inter;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        letter-spacing: 0%;
        border-radius: 6px;
        background: rgb(56, 66, 85);
        margin-right: 30px;
    `
    const FlexContainer = styled.div`
      display: flex;
      width: 1410px;
      margin: 0 auto;
      height: 40px;
      padding: 24px 0px 20px 0px;
      // border: 1px solid red;

    `
    const Wrapper = styled.div`
      
      width: 1920px;
      height: auto;
      margin: 0 auto;
      background: rgb(26, 26, 37);

      .logo{
        width: 397px;
        height: 28.9px;
        display:flex;
        gap: 50px;
      }
      .for-diler{
        color: rgb(144, 156, 181);
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: 0%;
        text-align: left;
        margin-left: 229px;
        margin-right: 30px;
        width: 89px;
        height: 20px;
        
        
        
      }
      .border-r{
        height: 30px;
        border-right: 1px solid rgba(133, 143, 164, 0.15);
        margin-right: 38px;
      }
      .header-phone{
        width: 339px;
        height: 17px;
        display:flex;
        justify-content: center;
        align-items:center;
        gap: 4px;
        padding:0;
      }
      .phone-number{
        color: rgb(255, 255, 255);
        font-family: Inter;
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
        letter-spacing: 0%;
        text-align: left;
      }
      .header-phone select{
        margin-right: 26px;
        background-color: transparent;
        border: none;
        color: rgb(133, 143, 164);
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: 0%;
        text-align: right;
      }
      .header-register{
        // border: 1px solid red;
        width: 76px;
        height: 20px;
        display:flex;
        gap: 14px;
        align-items: center
      }
      .header-register p{
        /* txt/meny2 */
        color: rgb(255, 255, 255);
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: 0%;
        text-align: left;
      }
      .logo select{
        background-color: transparent;
        border: none;
        color: rgb(133, 143, 164);
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: 0%;
        text-align: right;
      }
      .call{
        margin-left: 26px;
        margin-right: 30px;
   

      }
      .inside{
        display:flex;
        height:24px;
        justify-content: center;
        align-items: cente;
        padding: 0 auto;
      }
      .diler{
        display:flex;
        align-items: center;
      }
      .zakaz{
        color: rgb(245, 59, 73);
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: 0%;
        text-align: left;
      }
      .header{
        // border:1px solid red;
        width: 1410px;
        height: 51px;
        margin: 0 auto;
        display:flex;
        justify-content: space-between;    
        padding: 16px 0px 16px 0px;
      }
      .in-header{
        width: 1031.5px;
        height: 49px;
        display:flex;
        justify-content: space-between;
        // border:1px solid red;
      }
      .in-header2{
        width: 167.5px;
        height: 49px;
        display:flex;
        justify-content: space-between;
        align-items: center;
        // border:1px solid red;
      }
      .in-header2 img {
        width: 24px;
        height: 19.98px;

      }
      .catalog{
        width: 229.5px;
        height: 100%;
        display: flex;
        gap: 65px;
        // justify-content: space-between;  
        border-right: 1px solid rgba(133, 143, 164, 0.15);
        align-items: center;
      }
      .catalog img{
        width: 20px;
        height: 20px;
      }
      .in-catalog{
        width: 127px;
        height: 49px;
        display: flex;
        gap: 6px;
        justify-content:center;
        align-items: center;
        border-radius: 4px;
        background: rgb(245, 59, 73);
        color: rgb(255, 255, 255);
        font-family: Inter;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        letter-spacing: 0%;
        text-align: left;
        border: none;
      }
      .header-category{
        width: 768px;
        height: 45px;
        // border:1px solid red;
        display:flex;
        justify-content: center;
        aligb-items: center;
        gap: 45px;
        color: rgb(255, 255, 255);
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;
        letter-spacing: 0%;
        text-align: center;
      }
      .main-header{
        height: 44px;
        background: rgb(42, 44, 56);
        display: flex;
        align-items: center;
      }
      .in-main-header{
        margin-left:250px
      }
      .in-main-header select{
        background-color: transparent;
        border: none;
        color: rgb(255, 255, 255);
        font-family: Inter;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        letter-spacing: 0%;
        text-align: left;
      }
    `

  return (
    <div>
      <Wrapper>
        <FlexContainer>
          <div className='logo'>
            <img  src={Logo}/>
            <select>
                <option>Москва</option>
            </select>
          </div>
          <div className='inside'>
            <div className='diler'>
              <p className='for-diler'>Для дилеров</p>
              <StyledButton>Become a partner</StyledButton>
            </div>
            <div className='border-r'></div>
            <div className='header-phone'>
              <p className='phone-number'>+7 (800) 000-00-00</p>
              <select>
                  <option>МCK</option>
              </select>
              <p className='zakaz'>Заказать звонок</p>
            </div>
            <div className='border-r'></div>
            <div className='header-register'>
              <p>Войти</p>
              <img  src={svg}/>
            </div>
          </div>
        </FlexContainer>
        <div className='header'>
          <div className='in-header'>
            <div className='catalog'>
              <button className='in-catalog'>
                <img src={menu}/>
                <p>Каталог</p>
              </button>
              <img src={search}/>
            </div>
            <div className='header-category'>
              <p>Бренды </p>
              <p>Сервис</p>
              <p>Услуги</p>
              <p>Поддержка</p>
              <p>О компании</p>
              <p>Блог</p>
              <p>Где купить</p>
              <p>Контакты</p>
            </div>
          </div>
          <div className='in-header2'>
            <img src={diagram}/>
            <img src={like}/>
            <img src={lock}/>
          </div>
        </div>
        <div className='main-header'>
          <div className='in-main-header'>
            <select>
              <option>Для дома</option>
            </select>
            <select>
              <option>Для фитнес клуба</option>
            </select>
          </div> 
        </div>
      </Wrapper>


    </div>
  )
}

export default Header