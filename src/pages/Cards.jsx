import React from 'react'
import styled from 'styled-components';
import logo1 from '../assets/image/logo(1).png'
import logo2 from '../assets/image/logo(2).png'
import logo3 from '../assets/image/logo(3).png'
import logo4 from '../assets/image/logo(4).png'
import logo5 from '../assets/image/logo(5).png'
import logo6 from '../assets/image/logo(6).png'
import logo7 from '../assets/image/logo(7).png'
import logo8 from '../assets/image/logo(8).png'
import logo9 from '../assets/image/logo(9).png'
import logo10 from '../assets/image/logo(10).png'
import logo11 from '../assets/image/logo(11).png'
import logo12 from '../assets/image/logo(12).png'
import logo13 from '../assets/image/logo(13).png'
import logo14 from '../assets/image/logo(14).png'
import logo15 from '../assets/image/logo(15).png'

const MyBox=styled.div`
width:1450px;
height:700px;
margin: 0 auto;

.CardText{
    width: 369px;
    height: 33px;
   
font-family: Inter;
font-size: 30px;
font-weight: 700;
line-height: 33px;
text-align: left;

}
ul{
    display:flex;
    gap:3rem;
}
li{
    list-style:none;
}
.CardImages{
    display: grid;
  grid-template-columns: repeat(5, 1fr);
}

`
const MyButton=styled.button`
width: Hug (125px)px;
height: Hug (42px)px;
padding: 12px 20px 13px 20px;
gap: 10px;
border-radius: 4px 0px 0px 0px;
border: 1px solid red;
color:rgba(245, 59, 73, 1);
margin-top:45px;


`
const Cards = () => {
  return (
    <MyBox>
        <div className="CardText">Популярные бренды</div>
        <ul>
            <li>Беговые дорожки</li>
            <li>Эллиптические тренажеры</li>
            <li>Велотренажеры</li>
            <li>Силовые тренажеры</li>
            <li>Батуты</li>
            <li>Игровые столы</li>
        </ul>
        <div className="CardImages">
            <img src={logo15} alt="" />
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
            <img src={logo6} alt="" />
            <img src={logo7} alt="" />
            <img src={logo8} alt="" />
            <img src={logo9} alt="" />
            <img src={logo10} alt="" />
            <img src={logo11} alt="" />
            <img src={logo12} alt="" />
            <img src={logo13} alt="" />
            <img src={logo14} alt="" />
        </div>
        <MyButton>Все бренды</MyButton>
    </MyBox>
  )
}

export default Cards