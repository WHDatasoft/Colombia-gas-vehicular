import { useState, useEffect } from "react";

const SliderMain = () => {
    const [slide, setSlide] = useState(2);

    /* useEffect(() => {
        const time = setTimeout(() => {
            let direction = 'right'
            if (slide <= 0) {
                direction = 'right'
            } else if (slide >= 3) {
                direction = 'left'
            }

            if (direction === 'right') {
                setSlide(slide + 1);
            } else if (direction === 'left') {
                setSlide(slide - 1);
            }

        }, 5000);
        return () => {
            clearTimeout(time);
        };
    }, [slide]); */

    const selectSlide = (num) => {
        setSlide(num)
    }

    const filling = (num) => {
        return {
            background: num === slide ? "white" : "",
        };
    }

    const toLeft = () => {
        setSlide(currentSlide => {
            if (currentSlide > 0) {
                console.log(currentSlide)
                return currentSlide - 1
            }

            return currentSlide
        })
    }

    const toRight = () => {
        setSlide(currentSlide => {
            if (currentSlide < 3) {
                return currentSlide + 1
            }
            return currentSlide
        })
    }

    return (
        <div className="content">
            <div className="select">
                <button
                    onClick={() => selectSlide(0)}
                    style={filling(0)}
                ></button>
                <button
                    onClick={() => selectSlide(1)}
                    style={filling(1)}
                ></button>
                <button
                    onClick={() => selectSlide(2)}
                    style={filling(2)}
                ></button>
                <button
                    onClick={() => selectSlide(3)}
                    style={filling(3)}
                ></button>
            </div>

            <button className="row-button-left" onClick={toLeft}>
                <img src="/icon/row-slider-main.svg" alt="" />
            </button>

            <button className="row-button-right" onClick={toRight}>
                <img src="/icon/row-slider-main.svg" alt="" />
            </button>

            <ul>
                <li>
                    <div className="slide slide-1">
                        <h3>CONVERSIONES <br /> DESDE <br /> $500</h3>
                    </div>
                </li>
                <li>
                    <div className="slide slide-2">
                        <h3>CONVERSIONES <br /> DESDE <br /> $500</h3>
                    </div>
                </li>
                <li>
                    <div className="slide slide-3">
                        <h3>APORTA A LA <br />DESCONTAMINACIÓN <br /> DEL AIRE</h3>
                    </div>
                </li>
                <li>
                    <div className="slide slide-4">
                        <h3>AHORRO,  <br /> COMBUSTIBLE Y <br /> FINANCIACIÓN</h3>
                    </div>
                </li>
            </ul>

            <style jsx>{`
                ul {
                    margin-left: -${slide}00%;
                }
            `}</style>

            <style jsx>{`
                .content {
                    width: 100%;
                    height: calc(90vh - 10rem);
                    position: relative;
                    transform: skewX(15deg) translateX(-15%);
                    background-size: cover;
                    position: relative;
                }

                .select {
                    bottom: 0;
                    left: 35%;
                    position: absolute;
                    z-index: 30;
                    padding: 35px;
                }

                .row-button-left {
                    bottom: 2rem;
                    left: 10%;
                    position: absolute;
                    z-index: 30;
                    border: none;
                    width: 2rem;
                    height: 2rem;
                    transform: rotate(180deg)
                }

                .row-button-right {
                    bottom: 2rem;
                    right: 20%;
                    position: absolute;
                    z-index: 30;
                    border: none;
                    width: 2rem;
                    height: 2rem;
                }

                .content > ul {
                    display: grid;
                    height: calc(90vh - 10rem);
                    width: 400%;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    transition: margin-left 1.5s ease;
                }

                .content > ul > li {
                    list-style: none;
                    height: calc(90vh - 10rem);
                }

                button {
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                    border: 2px solid white;
                    border-radius: 50%;
                    outline: none;
                    background: none;
                    transition: background .5s;
                    margin: 3px;
                    z-index: 1;
                }

                .slide {
                    position: relative;
                    height: calc(90vh - 10rem);
                    width: 100%;
                    background-size: cover ;
                    background-position-x: right;
                    background-repeat: no-repeat;
                }

                .slide-1 {
                    background-image: url("/slider/slide-1.png");
                }

                .slide-2 {
                    background-image: url("/slider/slide-2.png");
                }

                .slide-3 {
                    background-image: url("/slider/slide-3.png");
                }

                .slide-4 {
                    background-image: url("/slider/slide-4.png");
                }

                button:hover {
                    background: var(--mainColorClaro);
                }

                h3 {
                    position: absolute;
                    right:20%;
                    top: 50%;
                    transform: translateY(-50%);
                    color: white;
                    font-size: 3.5rem;
                    font-weight: 600;
                    text-align: right;
                    line-height: 4rem;
                    
                }

                .rows {
                    position: absolute;
                    left:0;
                    bottom: 0;
                    height: 5rem;
                    width: 5rem;
                }

            @media screen and (max-width: 1500px) {
                h3 {
                    font-size: 3rem;
                }
            }

            @media screen and (max-width: 1250px) {
                .content, .content > ul, .content > ul > li, .slide {
                    height: calc(80vh - 10rem);
                }

                h3 {
                    font-size: 2.5rem;
                }

                .select {
                    left: 30%;
                }
            }

            @media screen and (max-width: 1050px) {

                .content, .content > ul, .content > ul > li, .slide {
                    height: calc(70vh - 10rem);
                }

                h3 {
                    font-size: 2rem;
                }

            }

            @media screen and (max-width: 900px) {

                .content, .content > ul, .content > ul > li, .slide {
                    height: calc(60vh - 10rem);
                }

                h3 {
                    font-size: 1.7rem;
                    line-height: 2.5rem;
                }
                
            }

            @media screen and (max-width: 750px) {

                .content, .content > ul, .content > ul > li, .slide {
                    height: calc(50vh - 10rem);
                }

                h3 {
                    font-size: 1.4rem;
                    line-height: 2rem;
                }

                .select {
                    left: 25%;
                }

                .row-button-left, .row-button-right {
                    height: 1.5rem;
                    width: 1.5rem;
                }
            }

            @media screen and (max-width: 600px) {

                .content, .content > ul, .content > ul > li, .slide {
                    height: calc(40vh - 10rem);
                }

                h3 {
                    font-size: 1rem;
                    line-height: 1.6rem;
                }

                .select {
                    left: 20%;
                }

                .select > button {
                    height: 15px;
                    width: 15px;
                }

                .row-button-left, .row-button-right {
                    height: 1.2rem;
                    width: 1.2rem;
                }
                
            }

            @media screen and (max-width: 500px) {
                .select {
                    left: 17%;
                }

                .select > button {
                    height: 10px;
                    width: 10px;
                }
            }

            @media screen and (max-width: 450px) {

                .content, .content > ul, .content > ul > li, .slide {
                    height: calc(35vh - 10rem);
                }

                h3 {
                    font-size: 0.9rem;
                    line-height: 1.4rem;
                }

                .select > button {
                    height: 10px;
                    width: 10px;
                }

                .select {
                    padding-bottom: 1rem;
                }

                .row-button-left, .row-button-right {
                    height: .8rem;
                    width: .8rem;
                    bottom: 1rem;
                }
                
            }

            @media screen and (max-width: 400px) {

                .content, .content > ul, .content > ul > li, .slide {
                    height: calc(30vh - 10rem);
                }

                h3 {
                    font-size: 0.7rem;
                    line-height: 1.2rem;
                }

                .select {
                    left: 10%;
                }

            }

            @media screen and (max-width: 350px) {

                .content, .content > ul, .content > ul > li, .slide {
                    height: calc(30vh - 10rem);
                }

                h3 {
                    font-size: 0.7rem;
                    line-height: 1.2rem;
                }

                .select {
                    left: 6%;
                }

            }

            `}</style>
        </div>
    );
};

export default SliderMain;
