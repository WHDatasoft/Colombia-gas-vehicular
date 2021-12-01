import { useState, useEffect } from "react";

const SliderMain = ({ slideList, top }) => {

    const [img, setImg] = useState(0);
    const [direccion, setDireccion] = useState(true);

    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    useEffect(() => {
        console.log('inicio')
        const tiempo = setTimeout(() => {
            console.log('se ejecuto')
            if (direccion) {
                setImg(i => i + 1)
                if (img >= slideList.length - 1) setDireccion(!direccion)
            } else {
                setImg(i => i - 1)
                if (img <= 0) setDireccion(!direccion)
            }
        }, 4000)

        return () => {
            clearTimeout(tiempo)
        }
    }, []);

    //Para evitar que se desfase el slider
    useEffect(() => {
        if (img <= 0) setImg(0)
        if (img > slideList.length - 1) setImg(slideList.length - 1)
    }, [img]);

    useEffect(() => {
        console.log(touchStart, touchEnd)
        if (touchStart < touchEnd) {
            setImg(i => i - 1)
        } else {
            setImg(i => i + 1)
        }

    }, [touchEnd])

    const onTouchStart = e => {
        console.log('pres')
        setTouchStart(e.touches[0].pageX)
    }

    const onTouchEnd = e => {
        console.log('pres end')
        console.log(e.changedTouches[0].pageX)
        setTouchEnd(e.changedTouches[0].pageX)
    }

    const onClickRight = () => {
        setImg(img => img + 1)
    }

    const onClickLeft = () => {
        setImg(img => img - 1)

    }

    return (
        <div className="content">

            <button className="left" onClick={onClickLeft}>
                <svg viewBox="0 0 89.39 47.12"><polyline points="0.81 1.49 44.62 23.39 88.72 1.34" /><polyline points="0.67 23.53 44.48 45.44 88.58 23.39" /></svg>
            </button>
            <button className="right" onClick={onClickRight} >
                <svg viewBox="0 0 89.39 47.12"><polyline points="0.81 1.49 44.62 23.39 88.72 1.34" /><polyline points="0.67 23.53 44.48 45.44 88.58 23.39" /></svg>
            </button>

            <ul  >

                {
                    slideList.map(slide => (
                        <li key={Math.random()} onTouchEnd={onTouchEnd} onTouchStart={onTouchStart} onTouchMove={() => console.log('hola')}>
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
                    min-height: 850px;
                    height: 80vh;
                    position: relative;
                }

                .content > ul {
                    display: grid;
                    height: 100%;
                    width: ${slideList.length}00%;
                    grid-template-columns: repeat(${slideList.length}, 1fr);
                    transition: margin-left 1.5s ease;
                }

                .content > ul > li {
                    min-height: 850px;
                    list-style: none;
                    height: 80vh;
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

                    .content, .content > ul > li {
                        height: 70vh;
                    }

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
