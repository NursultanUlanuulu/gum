import React from 'react';
import styled from "styled-components";
import glasses from "../../assets/img/Eyeglasses 2 1.png"
import redBlock from "../../assets/img/Rectangle 208.png"
import pen from "../../assets/img/Pen.png"
import group from "../../assets/img/Group 740.png"


const Wrapper = styled.section`
  height: 396px;
  width: 1410px;
  margin: 0 auto;
  border-radius: 6px;
  background: rgb(26, 26, 37);
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
  margin-top: 80px;
`;
const RedImg = styled.img`
  width: 288px;
  height: 309px;
  color: red;
  position: absolute;
  bottom: 0;
  left: 195px;
`
const Glasses = styled.img`
  position: absolute;
  width: 290px;
  height: 260px;
  left: 90px;
  bottom: 110px;
  transform: rotate(0deg);
`
const Pen = styled.img`
  position: absolute;
  width: 220px;
  height: 200px;
  left: 130px;
  bottom: 0;
  transform: rotate(0deg);
`
const Group = styled.img`
  position: absolute;
  width: 253px;
  height: 200px;
  bottom: 0;
  left: 290px;
`
const Block = styled.div`

`
const P = styled.p`
  position: absolute;
  font-size: 36px;
  font-weight: 500;
  bottom: 90px ;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 30px;
  color: white;
  margin-bottom: 30px;
`
const Button1=styled.button`
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  position: absolute;
  bottom: 50px;
  margin-left: 30px;
  padding: 12px 20px 13px 20px;
  border: 1px solid white;
  background: rgba(245, 59, 73, 0);;

`

const Partner = () => {
    return (
        <div>
            <Wrapper>

                <Block>
                    <RedImg src={redBlock} alt="redImg"/>
                    <Glasses src={glasses}/>
                    <Pen src={pen}/>
                    <Group src={group}/>

                    <div>
                        <P>Станьте нашим партнером
                            и  <br/> получите возможность <span>представлять нашу
                            продукцию </span>  в вашем регионе.</P>

                        <Button1>Стать партнером</Button1>
                    </div>
                </Block>


            </Wrapper>
        </div>
    );
};

export default Partner;