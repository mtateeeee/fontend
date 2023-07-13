import menubar from "assets/menubar.svg"
import logo from "assets/logo.svg"
import account from "assets/account.svg"
import notification from "assets/notification.svg"
import mandobackbround from "assets/mandobackbround.svg"
import disneylogo from "assets/disneylogo.svg"
import MandoLogo from "assets/MandoLogo.svg"
import imgtrailer from "assets/imgtrailer.svg"
import dot from "assets/dot.svg"
import Line4 from "assets/Line4.svg"
import React from "react";
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import { slidesToScrollPlugin } from '@brainhubeu/react-carousel';
import { Img } from "components/Img"
import { CardVideoTrailer } from "components/CardVideoTrailer"
import filmLalaLand from "assets/film-lala-land.svg";


import '@brainhubeu/react-carousel/lib/style.css';
//import "./styles.css";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Slider from "react-slick";

import styled from 'styled-components';



const StyleInfoPage = styled.div`
background-image: url(${mandobackbround});
background-size: cover;

    
`
const Header = styled.div`
    position: relative;
    padding: 20px;
    display:flex;
    justify-content: space-between;

    .account{
        display: flex;
        gap: 10px;
    }
`
const Trailer = styled.div`
    height: 100vh;
    margin-left: 50px;
    width: 50%;
    //background-color: red;
    .season{
        font-family: 'Blinker';
        color: white;
        padding-top: 5px;

    }
    .logo{
        display: flex;
        justify-content: center;
        //background-color: green;
        width: 100%;
        
    }
    .name{
        display: flex;
        justify-content: center;
        scale: 0.95;
    }
    .trailer{
        display: flex;
        padding-bottom: 15px;
        padding-top: 10px;
        justify-content: space-between;
        font-family: 'Blinker';
        font-size: 15px;
        gap: 50px;
        .categorytxt{
            display: flex;
            flex-direction: column;
            //background-color: yellow;
            width: 40%;
            justify-content: center;
            
            .yearcategory{
                color: white;
                display: flex;
                gap:10px;
                justify-content: center;
            }


        }
        .year{

        }
        .dot{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .category
        {

        }
        .trailervideo{
            width: 380px;
            height: 200px;
            border-radius: 25px;
            /* Đặt giá trị border-radius theo ý muốn */
            /* overflow: hidden; */
            /* scale: 1; */

            
                

            }
            
        
        }
        .line{
            display: flex;
            width: 100%;
            justify-content: center;
        }
        .test {
            border: 5px solid red;
        }
        
        .BrainhubCarouselItem--active {
            .watchFilm {
                display: inline;
            }
            img {
                /* scale: 1.2; */
            }
        }
        .carousel, .BrainhubCarousel {
            height: 200px;
        }
        .BrainhubCarousel__arrowRight{
            border-radius: 50px;
            margin-left: 10px;
            background-color: red;
        }
        .BrainhubCarousel__arrowLeft{
            border-radius: 50px;
            margin-right: 10px;
            background-color: red;
        }
`


const InfoPage = () => {
    return (
        <StyleInfoPage>
            <Header>
                <div>
                    <img src={menubar}></img>
                </div>
                <div>
                    <img src={logo}></img>
                </div>
                <div className="account">
                    <div>
                        <img src={account}></img>
                    </div>
                    <div>
                        <img src={notification}></img>
                    </div>
                </div>

            </Header>
            <Trailer>

                <div class="logo">

                    <img src={disneylogo}></img>
                </div>
                <div class="name">
                    <img src={MandoLogo}></img>
                </div>
                <div class="trailer">
                    <div className="categorytxt">
                        <div className="yearcategory">
                            <div className="year">
                                2019
                            </div>
                            <div className="dot">
                                <img width="2px" height="2px" src={dot}></img>

                            </div>
                            <div className="category">
                                SCIENCE FICTION, ADVENTURE, ACTION

                            </div>
                        </div>
                    </div>
                    <div >
                        <iframe className="trailervideo" src="https://www.youtube.com/embed/aOC8E8z_ifw">
                        </iframe>

                    </div>

                </div>
                <div class="line">
                    <img src={Line4}></img>
                </div>


                {/* <Slider dots={true}>{renderSlides()}</Slider> */}
                <div className="season">
                SEASON 1
                </div>
                
                <div className="carousel">
                    <Carousel
                        plugins={[
                            'centered',
                            'infinite',
                            'arrows',
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 2,
                                },
                            },
                        ]}
                    >

                        {/* <Img srcLink={"https://drive.google.com/uc?export=download&id=16wJvfbbSZlu8YkFlbbTTDOThOC9SQR8x"} /> */}
                        {/* <Img srcLink={"https://drive.google.com/uc?export=download&id=1MVIcUcwyBDdgGr_YPD9UUg3vP2jSxeT7"}/> */}
                        {/* <Img srcLink={"https://drive.google.com/uc?export=download&id=1mVsDYTHnC2uPhUTHnRGqeVvuclGF6uAe"}/> */}
                        {/* <img src={imgtrailer} />
                    <img src={imgtrailer} /> */}
                        <CardVideoTrailer srcLink={filmLalaLand} movieName={'EPISODE 01'} />
                        <CardVideoTrailer srcLink={filmLalaLand} movieName={'EPISODE 02'} />
                        <CardVideoTrailer srcLink={filmLalaLand} movieName={'EPISODE 03'} />
                    </Carousel>
                </div>
                


            </Trailer>






        </StyleInfoPage>

    )
}

export default InfoPage;