import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import React from 'react';
import { NavLink}  from "react-router-dom";

import styled from 'styled-components'
import Start from "../../assets/svg/start.jsx";
import Shop from "../../assets/svg/Shop.jsx";
import img_1 from "../../assets/img.png"
import img from "../../assets/img-1.png"
import InputBtn from "../../assets/svg/InputBtn.jsx";
import Percent from "../../assets/svg/percent.jsx";
import Like from "../../assets/svg/like.jsx";
import New from "../../assets/svg/new.jsx";
import Level from "../../assets/svg/Level.jsx";
import Favorite from "../../assets/svg/Favorite.jsx";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Sale = () => {

    const CustomFontComponent = styled.div`
        font-family: 'Inter', sans-serif;
    `;

    const Container = styled.div`
 max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
`
const Title = styled.div`
    /* h2/h2 desktop */
    
    color: #828282;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0;
    //text-align: left;
    height: 40px;
    max-width: 500px;
    transition: .2s;
    &:hover {
        color:#1A1A25;
        font-size: 26px;
        font-weight: 700;
    }
`
    const DivFlexGap = styled.div`
        display: flex;
        align-items: center;
        gap: 50px;
    `
    const DivFlex = styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 20px;
    `
    const DivFlexNotMargin = styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
    `
    const GreenP = styled.div`
        color: #2FC509;
        font-size: 12px;
        font-weight: 500;

    `
    const BlueP = styled.div`
        color: #4B7EE8;
        font-size: 12px;
        font-weight: 500;

    `
    const BigP = styled.div`
        color: #1A1A25;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        margin: 10px 0;
    `
    const MinP = styled.div`
        color: #909CB5;
        font-size: 12px;
        font-weight: 500;
    `
    const StarBtn =styled.button `
    background-color: transparent;
        outline: none;
        border: none;
    `
    const JContent = styled.div `
    display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
    `
    const BtnBuy = styled.div `
    background-color: #F53B49;
        color: #fff;
        border-radius: 4px;
        display: flex;
align-items: center;
        font-size: 14px;
        font-weight: 700;
        padding: 12px 20px;
        margin-top: 10px;
    `

    const  Block  =styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        margin-top: 15px;

    `
    const  FDrectionFlex  =styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;

    `
    const  H4 = styled.div`
    font-weight: 700;
        font-size: 17px;
    `
    const  PP = styled.div`
    font-weight: 400;
        font-size: 16px;
    `
    const  Card  =styled.div `
  width: 300px;
        height: 500px;
        box-shadow: rgba(100, 100, 111, 0.2) 0 7px 29px 0;
        padding: 20px;
        position: relative;

        &:hover{
            opacity: 20;
            
        }
          `
    const Absolute = styled.div`
    position: absolute;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 120px;
        margin-top: 5px;
    `
    const ThreeIconTop = styled.div`
        display: flex;
        align-items: center;
        gap: 2px;
    `
    const SwiperDiv = styled.div `
        //display: flex;
        align-items: center;
        gap: 30px;
        border: 1px solid red;
        
    `


    return (
     <CustomFontComponent>
         <Container>
             <DivFlexGap>
                 {/*<Title>Акция</Title>*/}
                 <ul>
                     <li>
                         <NavLink to="/"> <Title>Акция</Title></NavLink>
                     </li>
                     <li>
                         <NavLink to="/contact"> <Title>Новинки</Title>
                         </NavLink>
                     </li>
                     <li>
                         <NavLink to="/page"> <Title>Мы рекомендуем</Title>
                         </NavLink>
                     </li>

                 </ul>
                 {/*<Title>Новинки</Title>*/}
                 {/*<Title>Мы рекомендуем</Title>*/}
             </DivFlexGap>
             <Swiper
                 slidesPerView={3}
                     spaceBetween={50}
                     pagination={{
                         clickable: true,
                     }}
                     breakpoints={{
                         640: {
                             slidesPerView: 2,
                             spaceBetween: 20,
                         },
                         768: {
                             slidesPerView: 4,
                             spaceBetween: 40,
                         },
                         1024: {
                             slidesPerView: 3,
                             spaceBetween: 50,
                         },
                     }}
                     modules={[Pagination]}
                     className="mySwiper"
                 >

                     <SwiperDiv>

                         <SwiperSlide>
                             <Card>
                                 <img src={img_1} alt="img"/>
                                 <DivFlex>
                                     <GreenP>В наличии</GreenP>
                                     <DivFlexNotMargin>
                                         <InputBtn/>
                                         <InputBtn/>
                                         <InputBtn/>
                                     </DivFlexNotMargin>
                                     <BlueP>Есть в шоу-руме</BlueP>
                                 </DivFlex>
                                 <BigP>Беговая дорожка CardioPower S35</BigP>
                                 <DivFlex>
                                     <MinP>Рейтинг</MinP>
                                     <div>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/> </StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                     </div>
                                 </DivFlex>
                                 <JContent>
                                     <Block>
                                         <H4>1 134 900 ₽</H4>
                                         <PP>1 134 900 ₽</PP>
                                     </Block>
                                     <BtnBuy><Shop/> Купить</BtnBuy>
                                 </JContent>
                                 <Absolute>

                                     <ThreeIconTop>
                                         <Percent/>
                                         <Like/>
                                         <New/>
                                     </ThreeIconTop>

                                     <DivFlexNotMargin>
                                         <Level/>
                                         <Favorite/>
                                     </DivFlexNotMargin>
                                 </Absolute>
                             </Card>
                         </SwiperSlide>
                         <SwiperSlide>
                             <Card>
                                 <img src={img_1} alt="img-"/>
                                 <DivFlex>
                                     <GreenP>В наличии</GreenP>
                                     <DivFlexNotMargin>
                                         <InputBtn/>
                                         <InputBtn/>
                                         <InputBtn/>
                                     </DivFlexNotMargin>
                                     <BlueP>Есть в шоу-руме</BlueP>
                                 </DivFlex>
                                 <BigP>Беговая дорожка CardioPower S35</BigP>
                                 <DivFlex>
                                     <MinP>Рейтинг</MinP>
                                     <div>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/> </StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                     </div>
                                 </DivFlex>
                                 <JContent>
                                     <Block>
                                         <H4>1 134 900 ₽</H4>
                                         <PP>1 134 900 ₽</PP>
                                     </Block>
                                     <BtnBuy><Shop/> Купить</BtnBuy>
                                 </JContent>
                                 <Absolute>

                                     <ThreeIconTop>
                                         <Percent/>
                                         <Like/>
                                         <New/>
                                     </ThreeIconTop>

                                     <DivFlexNotMargin>
                                         <Level/>
                                         <Favorite/>
                                     </DivFlexNotMargin>
                                 </Absolute>
                             </Card>
                         </SwiperSlide>
                         <SwiperSlide>
                             <Card>
                                 <img src={img_1} alt="img"/>
                                 <DivFlex>
                                     <GreenP>В наличии</GreenP>
                                     <DivFlexNotMargin>
                                         <InputBtn/>
                                         <InputBtn/>
                                         <InputBtn/>
                                     </DivFlexNotMargin>
                                     <BlueP>Есть в шоу-руме</BlueP>
                                 </DivFlex>
                                 <BigP>Беговая дорожка CardioPower S35</BigP>
                                 <DivFlex>
                                     <MinP>Рейтинг</MinP>
                                     <div>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/> </StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                     </div>
                                 </DivFlex>
                                 <JContent>
                                     <Block>
                                         <H4>1 134 900 ₽</H4>
                                         <PP>1 134 900 ₽</PP>
                                     </Block>
                                     <BtnBuy><Shop/> Купить</BtnBuy>
                                 </JContent>
                                 <Absolute>

                                     <ThreeIconTop>
                                         <Percent/>
                                         <Like/>
                                         <New/>
                                     </ThreeIconTop>

                                     <DivFlexNotMargin>
                                         <Level/>
                                         <Favorite/>
                                     </DivFlexNotMargin>
                                 </Absolute>
                             </Card>
                         </SwiperSlide>
                         <SwiperSlide>
                             <Card>
                                 <img src={img_1} alt="img"/>
                                 <DivFlex>
                                     <GreenP>В наличии</GreenP>
                                     <DivFlexNotMargin>
                                         <InputBtn/>
                                         <InputBtn/>
                                         <InputBtn/>
                                     </DivFlexNotMargin>
                                     <BlueP>Есть в шоу-руме</BlueP>
                                 </DivFlex>
                                 <BigP>Беговая дорожка CardioPower S35</BigP>
                                 <DivFlex>
                                     <MinP>Рейтинг</MinP>
                                     <div>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/> </StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                     </div>
                                 </DivFlex>
                                 <JContent>
                                     <Block>
                                         <H4>1 134 900 ₽</H4>
                                         <PP>1 134 900 ₽</PP>
                                     </Block>
                                     <BtnBuy><Shop/> Купить</BtnBuy>
                                 </JContent>
                                 <Absolute>

                                     <ThreeIconTop>
                                         <Percent/>
                                         <Like/>
                                         <New/>
                                     </ThreeIconTop>

                                     <DivFlexNotMargin>
                                         <Level/>
                                         <Favorite/>
                                     </DivFlexNotMargin>
                                 </Absolute>
                             </Card>
                         </SwiperSlide>
                         <SwiperSlide>
                             <Card>
                                 <img src={img_1} alt="img"/>
                                 <DivFlex>
                                     <GreenP>В наличии</GreenP>
                                     <DivFlexNotMargin>
                                         <InputBtn/>
                                         <InputBtn/>
                                         <InputBtn/>
                                     </DivFlexNotMargin>
                                     <BlueP>Есть в шоу-руме</BlueP>
                                 </DivFlex>
                                 <BigP>Беговая дорожка CardioPower S35</BigP>
                                 <DivFlex>
                                     <MinP>Рейтинг</MinP>
                                     <div>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/> </StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                     </div>
                                 </DivFlex>
                                 <JContent>
                                     <Block>
                                         <H4>1 134 900 ₽</H4>
                                         <PP>1 134 900 ₽</PP>
                                     </Block>
                                     <BtnBuy><Shop/> Купить</BtnBuy>
                                 </JContent>
                                 <Absolute>

                                     <ThreeIconTop>
                                         <Percent/>
                                         <Like/>
                                         <New/>
                                     </ThreeIconTop>

                                     <DivFlexNotMargin>
                                         <Level/>
                                         <Favorite/>
                                     </DivFlexNotMargin>
                                 </Absolute>
                             </Card>
                         </SwiperSlide>
                         <SwiperSlide>
                             <Card>
                                 <img src={img_1} alt="img"/>
                                 <DivFlex>
                                     <GreenP>В наличии</GreenP>
                                     <DivFlexNotMargin>
                                         <InputBtn/>
                                         <InputBtn/>
                                         <InputBtn/>
                                     </DivFlexNotMargin>
                                     <BlueP>Есть в шоу-руме</BlueP>
                                 </DivFlex>
                                 <BigP>Беговая дорожка CardioPower S35</BigP>
                                 <DivFlex>
                                     <MinP>Рейтинг</MinP>
                                     <div>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/> </StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                     </div>
                                 </DivFlex>
                                 <JContent>
                                     <Block>
                                         <H4>1 134 900 ₽</H4>
                                         <PP>1 134 900 ₽</PP>
                                     </Block>
                                     <BtnBuy><Shop/> Купить</BtnBuy>
                                 </JContent>
                                 <Absolute>

                                     <ThreeIconTop>
                                         <Percent/>
                                         <Like/>
                                         <New/>
                                     </ThreeIconTop>

                                     <DivFlexNotMargin>
                                         <Level/>
                                         <Favorite/>
                                     </DivFlexNotMargin>
                                 </Absolute>
                             </Card>
                         </SwiperSlide>
                         <SwiperSlide>
                             <Card>
                                 <img src={img_1} alt="img"/>
                                 <DivFlex>
                                     <GreenP>В наличии</GreenP>
                                     <DivFlexNotMargin>
                                         <InputBtn/>
                                         <InputBtn/>
                                         <InputBtn/>
                                     </DivFlexNotMargin>
                                     <BlueP>Есть в шоу-руме</BlueP>
                                 </DivFlex>
                                 <BigP>Беговая дорожка CardioPower S35</BigP>
                                 <DivFlex>
                                     <MinP>Рейтинг</MinP>
                                     <div>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/> </StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                     </div>
                                 </DivFlex>
                                 <JContent>
                                     <Block>
                                         <H4>1 134 900 ₽</H4>
                                         <PP>1 134 900 ₽</PP>
                                     </Block>
                                     <BtnBuy><Shop/> Купить</BtnBuy>
                                 </JContent>
                                 <Absolute>

                                     <ThreeIconTop>
                                         <Percent/>
                                         <Like/>
                                         <New/>
                                     </ThreeIconTop>

                                     <DivFlexNotMargin>
                                         <Level/>
                                         <Favorite/>
                                     </DivFlexNotMargin>
                                 </Absolute>
                             </Card>
                         </SwiperSlide>
                         <SwiperSlide>
                             <Card>
                                 <img src={img_1} alt="img"/>
                                 <DivFlex>
                                     <GreenP>В наличии</GreenP>
                                     <DivFlexNotMargin>
                                         <InputBtn/>
                                         <InputBtn/>
                                         <InputBtn/>
                                     </DivFlexNotMargin>
                                     <BlueP>Есть в шоу-руме</BlueP>
                                 </DivFlex>
                                 <BigP>Беговая дорожка CardioPower S35</BigP>
                                 <DivFlex>
                                     <MinP>Рейтинг</MinP>
                                     <div>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/> </StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                     </div>
                                 </DivFlex>
                                 <JContent>
                                     <Block>
                                         <H4>1 134 900 ₽</H4>
                                         <PP>1 134 900 ₽</PP>
                                     </Block>
                                     <BtnBuy><Shop/> Купить</BtnBuy>
                                 </JContent>
                                 <Absolute>

                                     <ThreeIconTop>
                                         <Percent/>
                                         <Like/>
                                         <New/>
                                     </ThreeIconTop>

                                     <DivFlexNotMargin>
                                         <Level/>
                                         <Favorite/>
                                     </DivFlexNotMargin>
                                 </Absolute>
                             </Card>
                         </SwiperSlide>
                         <SwiperSlide>
                             <Card>
                                 <img src={img_1} alt="img"/>
                                 <DivFlex>
                                     <GreenP>В наличии</GreenP>
                                     <DivFlexNotMargin>
                                         <InputBtn/>
                                         <InputBtn/>
                                         <InputBtn/>
                                     </DivFlexNotMargin>
                                     <BlueP>Есть в шоу-руме</BlueP>
                                 </DivFlex>
                                 <BigP>Беговая дорожка CardioPower S35</BigP>
                                 <DivFlex>
                                     <MinP>Рейтинг</MinP>
                                     <div>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/> </StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                     </div>
                                 </DivFlex>
                                 <JContent>
                                     <Block>
                                         <H4>1 134 900 ₽</H4>
                                         <PP>1 134 900 ₽</PP>
                                     </Block>
                                     <BtnBuy><Shop/> Купить</BtnBuy>
                                 </JContent>
                                 <Absolute>

                                     <ThreeIconTop>
                                         <Percent/>
                                         <Like/>
                                         <New/>
                                     </ThreeIconTop>

                                     <DivFlexNotMargin>
                                         <Level/>
                                         <Favorite/>
                                     </DivFlexNotMargin>
                                 </Absolute>
                             </Card>
                         </SwiperSlide>
                         <SwiperSlide>
                             <Card>
                                 <img src={img_1} alt="img"/>
                                 <DivFlex>
                                     <GreenP>В наличии</GreenP>
                                     <DivFlexNotMargin>
                                         <InputBtn/>
                                         <InputBtn/>
                                         <InputBtn/>
                                     </DivFlexNotMargin>
                                     <BlueP>Есть в шоу-руме</BlueP>
                                 </DivFlex>
                                 <BigP>Беговая дорожка CardioPower S35</BigP>
                                 <DivFlex>
                                     <MinP>Рейтинг</MinP>
                                     <div>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/> </StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                     </div>
                                 </DivFlex>
                                 <JContent>
                                     <Block>
                                         <H4>1 134 900 ₽</H4>
                                         <PP>1 134 900 ₽</PP>
                                     </Block>
                                     <BtnBuy><Shop/> Купить</BtnBuy>
                                 </JContent>
                                 <Absolute>

                                     <ThreeIconTop>
                                         <Percent/>
                                         <Like/>
                                         <New/>
                                     </ThreeIconTop>

                                     <DivFlexNotMargin>
                                         <Level/>
                                         <Favorite/>
                                     </DivFlexNotMargin>
                                 </Absolute>
                             </Card>
                         </SwiperSlide>
                         <SwiperSlide>
                             <Card>
                                 <img src={img_1} alt="img"/>
                                 <DivFlex>
                                     <GreenP>В наличии</GreenP>
                                     <DivFlexNotMargin>
                                         <InputBtn/>
                                         <InputBtn/>
                                         <InputBtn/>
                                     </DivFlexNotMargin>
                                     <BlueP>Есть в шоу-руме</BlueP>
                                 </DivFlex>
                                 <BigP>Беговая дорожка CardioPower S35</BigP>
                                 <DivFlex>
                                     <MinP>Рейтинг</MinP>
                                     <div>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/> </StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                     </div>
                                 </DivFlex>
                                 <JContent>
                                     <Block>
                                         <H4>1 134 900 ₽</H4>
                                         <PP>1 134 900 ₽</PP>
                                     </Block>
                                     <BtnBuy><Shop/> Купить</BtnBuy>
                                 </JContent>
                                 <Absolute>

                                     <ThreeIconTop>
                                         <Percent/>
                                         <Like/>
                                         <New/>
                                     </ThreeIconTop>

                                     <DivFlexNotMargin>
                                         <Level/>
                                         <Favorite/>
                                     </DivFlexNotMargin>
                                 </Absolute>
                             </Card>
                         </SwiperSlide>
                         <SwiperSlide>
                             <Card>
                                 <img src={img_1} alt="img"/>
                                 <DivFlex>
                                     <GreenP>В наличии</GreenP>
                                     <DivFlexNotMargin>
                                         <InputBtn/>
                                         <InputBtn/>
                                         <InputBtn/>
                                     </DivFlexNotMargin>
                                     <BlueP>Есть в шоу-руме</BlueP>
                                 </DivFlex>
                                 <BigP>Беговая дорожка CardioPower S35</BigP>
                                 <DivFlex>
                                     <MinP>Рейтинг</MinP>
                                     <div>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/> </StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                         <StarBtn><Start/></StarBtn>
                                     </div>
                                 </DivFlex>
                                 <JContent>
                                     <Block>
                                         <H4>1 134 900 ₽</H4>
                                         <PP>1 134 900 ₽</PP>
                                     </Block>
                                     <BtnBuy><Shop/> Купить</BtnBuy>
                                 </JContent>
                                 <Absolute>

                                     <ThreeIconTop>
                                         <Percent/>
                                         <Like/>
                                         <New/>
                                     </ThreeIconTop>

                                     <DivFlexNotMargin>
                                         <Level/>
                                         <Favorite/>
                                     </DivFlexNotMargin>
                                 </Absolute>
                             </Card>
                         </SwiperSlide>
                     </SwiperDiv>


                 </Swiper>

         </Container>
     </CustomFontComponent>
    );
};

export default Sale;