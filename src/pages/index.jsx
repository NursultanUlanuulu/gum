import React from "react";
import styled from "styled-components";
import myImage from "../assets/svg/Rectangle171.svg";
import Group from "../assets/svg/Mask.svg";
import Images from "../assets/image/image1.png";
import Max from "../assets/image/Max.png";
import Photo from "../assets/image/photo_2024.jpg";
import Image17 from "../assets/image/image17.png";
import Image19 from "../assets/image/image19.png"

const FlexBox = styled.div`
background-color: black;
width:1600px;
height:756px;
margin: 0 auto;


.DivCard{
  width:1590px;
  height:600px;
  display: flex;
  gap:17rem;

  margin-left: 50px


}


.Card{

  width: 20rem;
  height:20rem
  background: red;
  background-image: url(${myImage});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  width: 490px;
  height: 500px;
  position: relative;
  margin-top:100px;
  .New{


    font-family: Raleway;
    font-size: 32px;
    font-weight: 800;
    line-height: 35.2px;
    padding-top:25px;
    padding-left:34px;
    color:white;
    }

    .Image{
        background-image:url(${Images});
        height:100vh;
        background-repeat: no-repeat;
        background-size: cover;
        width:150px;
        height:150px;
        margin-left:2rem;
        padding-top:15px;
    }
    .ImageText{
      font-family: Inter;
font-size: 20px;
font-weight: 400;
line-height: 22.99px;
text-align: left;
padding-top:30px;
    }
}

.HeaderImage{
  background-image: url(${Group});
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  width: 390px;
  height: 500px;
  position: absolute;
  left: 330px;
  bottom:0.001rem;
}
.Max{
  background-image: url(${Max});
  height:100vh;
  background-repeat: no-repeat;
  margin-left:2rem;
  margin-top:45px;
  
 
 

}
`;

const Title = styled.h2`
  color: #fff;

  font-family: Inter;
  font-size: 30px;
  font-weight: 700;
  line-height: 33px;
  text-align: left;
`;
const Blocks = styled.div`
  display: flex;
  gap: 1rem;
  padding-top: 30px;
`;
const Nav = styled.div`
  width: 350px;
  height: 500px;
  display: flex;
  gap: 14rem;

  background: white;
  .Section {
    font-family: Inter;
    font-size: 20px;
    font-weight: 800;
    line-height: 22px;
    text-align: left;
    margin-left: 2rem;
    padding-top: 20px;
  }
  .num {
    font-family: Inter;
    font-size: 40px;
    font-weight: 800;
    padding-top: 20px;
    height: 88px;
    color: rgba(245, 59, 73, 1);
  }
  .photo {
    background-image: url(${Photo});
    height: 500px;
    width: 350px;
    margin-left: -2rem;
    background-repeat: no-repeat;
  }
`;
const MyButton =styled.div`
 width:180px;
 height:40px;
 border:4px solid grey;
 color:white;
 padding-top:12px;
 padding-left:50px;
 margin-top:30px;
 margin-left:3rem;

`
const MyCard = styled.div`
  width: 350px;
  height: 500px;
  border: 1px solid yellow;

  background: white;
  .Content {
    color:rgba(245, 59, 73, 1);
    font-family: Raleway;
font-size: 20px;
font-weight: 900;
line-height: 22px;
text-align: left;

    margin-left: 2rem;
    padding-top: 20px;
    
  }
  .ContentText{
    font-family: Raleway;
font-size: 20px;
font-weight: 900;
line-height: 22px;
text-align: left;
color:black;
margin-left: 2rem;
padding-top: 10px;
  }
  .ContentImage{
    background-image: url(${Image17});
    height: 500px;
    width: 350px;
    margin-left: 2rem;
    margin-top:10px;
    background-repeat: no-repeat;
  }
  .Image19{
    background-image: url(${Image19});
    height: 500px;
    width: 320px;
    margin-left: 2rem;
    margin-top:30px;
    background-repeat: no-repeat;
  }
`;
const BoxSection = styled.div`
  display: flex;
  gap: 5rem;
  margin-top: 100px;
`;

const Index = () => {
  return (
    <FlexBox>

      <Title>Идеи и подборки</Title>
      <div className="DivCard">
        <div className="Card">
          <div className="New">
            Лучшие тренажеры <br /> для <br /> жиросжигания
          </div>
          <div>
            <Blocks>
              <div className="Image"></div>
              <div className="ImageText">
                Тренировка <br /> всего <br />
                14 минут
              </div>
            </Blocks>
            <div className="Max"></div>
          </div>
          <div className="HeaderImage"></div>
        </div>
        <BoxSection>
          <Nav>
            <div className="Section">
              Кардио-силовая <br /> тренировка
              <div className="num">
                2 в 1<div className="photo"></div>
              </div>
            </div>
          </Nav>

          <MyCard>
            <div className="Content">Беговая <br /> дорожка </div>
            <div className="ContentText">для подготовки <br /> к марафону</div>
           
            <div className="Image19">
            <div className="ContentImage">
            </div>
            </div>
           
          </MyCard>
        </BoxSection>
      </div>
      <MyButton>Полная подборка</MyButton>
    </FlexBox>
  );
};

export default Index;
