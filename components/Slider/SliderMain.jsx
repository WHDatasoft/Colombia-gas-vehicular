import React, { useState, useEffect, useRef } from "react";

const SliderMain = ({ slideList, top, id, sizeScreen }) => {

    const [img, setImg] = useState(0);
    const [direccion, setDireccion] = useState(true);

    const touchStart = useRef(0);


    useEffect(() => {

        const tiempo = setTimeout(() => {
            setDireccion(dir => {
                if (dir) {
                    if (img >= slideList.length - 1) return false
                    setImg(img + 1)
                    return dir
                } else {
                    if (img <= 0) return true
                    setImg(img - 1)
                    return dir
                }
            })
        }, 7000)

        return () => {
            clearTimeout(tiempo)
        }
    }, [img]);

    //Para evitar que se desfase el slider
    useEffect(() => {
        if (img <= 0) setImg(0)
        if (img > slideList.length - 1) setImg(slideList.length - 1)
    }, [img]);




    const onTouchStart = (e) => {
        touchStart = e.touches[0].pageX
    }

    const onTouchEnd = (e) => {
        const touchEnd = e.changedTouches[0].pageX
        if (touchStart <= touchEnd) {
            setImg(i => i - 1)
        } else {
            setImg(i => i + 1)
        }
    }

    const onClickRight = () => {
        setImg(img => img + 1)
    }

    const onClickLeft = () => {
        setImg(img => img - 1)
    }

    return (
        <div className="content" id={id}>
            {
                img === 0
                    ?
                    null
                    :
                    <button className="left" onClick={onClickLeft}>
                        <svg viewBox="0 0 89.39 47.12"><polyline points="0.81 1.49 44.62 23.39 88.72 1.34" /><polyline points="0.67 23.53 44.48 45.44 88.58 23.39" /></svg>
                    </button>
            }
            {
                img === slideList.length - 1
                    ?
                    null
                    :
                    <button className="right" onClick={onClickRight}>
                        <svg viewBox="0 0 89.39 47.12"><polyline points="0.81 1.49 44.62 23.39 88.72 1.34" /><polyline points="0.67 23.53 44.48 45.44 88.58 23.39" /></svg>
                    </button>
            }

            <ul onTouchEnd={onTouchEnd} onTouchStart={onTouchStart}>

                {
                    slideList.map(slide => (
                        <li key={Math.random()} >
                            {slide}
                        </li>
                    ))
                }

            </ul>

            <style jsx>{`
                ul {
                    margin-left: -${img}00%;
                }
            `}</style>

            <style jsx>{`

                .content {
                    height: ${sizeScreen ? 'calc(100vh - 8rem)' : '40rem'};
                    position: relative;
                    overflow: hidden;
                }

                .content > ul {
                    display: grid;
                    width: ${slideList.length}00%;
                    grid-template-columns: repeat(${slideList.length}, 1fr);
                    transition: margin-left 1.5s ease;
                    height: 100%;
                }

                .content > ul > li {
                    list-style: none;
                    height: 100%;
                    position: relative;
                    
                }

                button {
                    position: absolute;
                    top: ${top ? '20%' : '50%'};
                    z-index: 3;
                    background-color: unset;
                }

                svg {
                    height: 2rem;
                    fill: none;
                    stroke: white;
                    stroke-miterlimit: 10;
                    stroke-width: 6px;
                }

                .right {
                    right: 4rem;
                    transform: translateY(-50%) rotate(-90deg);
                }

                .right:hover {
                    transform: translateY(-50%) rotate(-90deg) scale(1.1);
                }

                .left {
                    left: 4rem;
                    transform: translateY(-50%) rotate(90deg);
                }

                .left:hover {
                    transform: translateY(-50%) rotate(90deg)  scale(1.1);
                }


                @media screen and (max-width: 1070px) {

                   

                }

                @media screen and (max-width: 730px) {

                    button {
                        display: none;
                    }

                }
                

            `}</style>
        </div>
    );
};

export default SliderMain;
