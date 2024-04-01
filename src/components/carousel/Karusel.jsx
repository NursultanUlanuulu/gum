import React from 'react';
// import {Swiper, SwiperSlide} from 'swiper/react';
// import 'swiper/css';
import ImgOne from "../../assets/img/karusel 1.png"
import ImgTwo from "../../assets/img/Rectangle 6.png"
import ImgThree from "../../assets/img/Rectangle 6 (1).png"
import ImgFour from "../../assets/img/Rectangle 6 (2).png"
import styled from "styled-components";
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {Pagination, Navigation} from 'swiper/modules';


const Section = styled.section`
  width: 1410px;
  margin: 0 auto;
`
const ImgClock = styled.img`
  width: 250px;
  height: 250px;
`
const DivSwiper = styled.div`
  width: 250px;
  border-radius: 10px;
  text-align: left;
`
const H1 = styled.h1`
  color: rgb(56, 66, 85);
  font-size: 20px;
  font-weight: 800;
  text-align: left;
  padding-bottom: 10px;
`
const P1 = styled.p`
  color: rgb(56, 66, 85);
  font-size: 16px;
  font-weight: 400;
  text-align: left;
`
const P2 = styled.p`
  color: rgb(56, 66, 85);
  font-size: 16px;
  font-weight: 400;
  text-align: left;
`
const H2 = styled.h2`
  color: rgb(26, 26, 37);
  font-size: 30px;
  font-weight: 700;
  text-align: left;
`
const Pblog = styled.p`
  color: rgb(130, 130, 130);
  font-size: 20px;
  font-weight: 800;
  text-align: left;
  margin-left: 30px;
`
const NewsDiv = styled.div`
  display: flex;
  align-items: center;

`
const Button = styled.button`
  color: rgb(245, 59, 73);
  font-size: 14px;
  font-weight: 700;
  padding: 12px 20px 13px 20px;
  border-radius: 5px;
  border: 1px solid red;
  margin-top: 30px;
  margin-bottom: 60px;
`
const Ptrenajor=styled.p`
  text-align: left;
  padding-bottom: 10px;
  color: rgb(56, 66, 85);
  font-size: 16px;
  font-weight: 400;
`
const Pdata=styled.p`
  color: rgb(56, 66, 85);
  font-size: 16px;
  font-weight: 400;
`

const Karusel = () => {
    return (
        <Section>
            <NewsDiv>
                <H2>Новости</H2>
                <Pblog>Блог</Pblog>
            </NewsDiv>

            <>
                <Swiper
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper">


                    <SwiperSlide>
                        <DivSwiper>
                        <ImgClock src={ImgOne}/>
                                <H1>В продажу поступили тренажеры Nautilus</H1>
                                <Ptrenajor>Представляем тренажеры <br/> Nautilus 626 серии.</Ptrenajor>
                                <Pdata>2021.07.18</Pdata>

                    </DivSwiper>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DivSwiper>
                        <ImgClock src={ImgTwo}/>
                                <H1>В продажу поступили тренажеры Nautilus</H1>
                                <Ptrenajor>Представляем тренажеры <br/> Nautilus 626 серии.</Ptrenajor>
                                <Pdata>2021.07.18</Pdata>

                    </DivSwiper>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DivSwiper>
                        <ImgClock src={ImgThree}/>
                                <H1>В продажу поступили тренажеры Nautilus</H1>
                                <Ptrenajor>Представляем тренажеры <br/> Nautilus 626 серии.</Ptrenajor>
                                <Pdata>2021.07.18</Pdata>

                    </DivSwiper>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DivSwiper>
                        <ImgClock src={ImgFour}/>
                                <H1>В продажу поступили тренажеры Nautilus</H1>
                                <Ptrenajor>Представляем тренажеры <br/> Nautilus 626 серии.</Ptrenajor>
                                <Pdata>2021.07.18</Pdata>

                    </DivSwiper>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DivSwiper>
                        <ImgClock src={ImgOne}/>
                                <H1>В продажу поступили тренажеры Nautilus</H1>
                                <Ptrenajor>Представляем тренажеры <br/> Nautilus 626 серии.</Ptrenajor>
                                <Pdata>2021.07.18</Pdata>

                    </DivSwiper>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DivSwiper>
                        <ImgClock src={ImgTwo}/>
                                <H1>В продажу поступили тренажеры Nautilus</H1>
                                <Ptrenajor>Представляем тренажеры <br/> Nautilus 626 серии.</Ptrenajor>
                                <Pdata>2021.07.18</Pdata>

                    </DivSwiper>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DivSwiper>
                        <ImgClock src={ImgThree}/>
                                <H1>В продажу поступили тренажеры Nautilus</H1>
                                <Ptrenajor>Представляем тренажеры <br/> Nautilus 626 серии.</Ptrenajor>
                                <Pdata>2021.07.18</Pdata>

                    </DivSwiper>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DivSwiper>
                        <ImgClock src={ImgFour}/>
                                <H1>В продажу поступили тренажеры Nautilus</H1>
                                <Ptrenajor>Представляем тренажеры <br/> Nautilus 626 серии.</Ptrenajor>
                                <Pdata>2021.07.18</Pdata>

                    </DivSwiper>
                    </SwiperSlide>

                </Swiper>

            </>

            <Button>Все новости</Button>

        </Section>
    );
};

export default Karusel;
