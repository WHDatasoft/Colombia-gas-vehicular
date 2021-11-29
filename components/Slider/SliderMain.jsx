import React, { useState, useEffect } from "react";
/* import Portada from './Portada'
import Portada2 from './Portada2' */

const SliderMain = () => {

    const [img, setImg] = useState(1);
    const [direccion, setDireccion] = useState(true);

    useEffect(() => {
        /* const tiempo = setTimeout(() => {
            if (direccion) {
                setImg(img + 1)
                if (img >= 1) setDireccion(!direccion)
            } else {
                setImg(img - 1)
                if (img <= 1) setDireccion(!direccion)
            }
        }, 4000)
        console.log();
        return () => {
            clearTimeout(tiempo)
        } */
    }, [img]);

    //Para evitar que se desfase el slider
    useEffect(() => {
        if (img < 0) setImg(0)
        if (img > 2) setImg(2)
    }, [img]);

    //Mover el slider
    const move = (num) => {
        setImg(num)
    }

    const filling = (num) => {
        return {
            background: num === img ? "var(--light-green)" : "",
        };
    }

    return (
        <div className="content">
            <div className="select">
                <button
                    onClick={() => move(0)}
                    style={filling(0)}
                ></button>
                <button
                    onClick={() => move(1)}
                    style={filling(1)}
                ></button>
                <button
                    onClick={() => move(2)}
                    style={filling(2)}
                ></button>
            </div>

            <ul>
                <li>
                    <img src="/img/colombiagas/primera.jpg" alt="" loading="eager" />
                </li>
                <li>
                    <img src="/img/colombiagas/segunda.jpg" alt="" />
                    <div className="fondo">
                        <p>Somos un centro especializado en instalación de gas
                            natural vehicular, con más de 15 años de trayectoria,
                            pertenecemos a la red de talleres de GAS VANTI y estamos
                            certificados por BUREAUVERITAS e ICONTEC.
                            Lo que nos hace una marca segura, de calidad y
                            comprometida con sus clientes.
                        </p>
                    </div>
                </li>
                <li>
                    <img src="/img/colombiagas/tercera.jpg" alt="" loading="lazy" />
                    <div className="fondo">
                        <h2>OBJETIVOS CLAVES</h2>
                        <div className="icons">
                            <div>
                                <img className="icon" src="/icon/car.svg" alt="" />
                                <h4>Garantía</h4>
                            </div>
                            <div>
                                <img className="icon" src="/icon/money.svg" alt="" />
                                <h4>Ahorro</h4>
                            </div>
                            <div>
                                <img className="icon" src="/icon/green.svg" alt="" />
                                <h4>Cuidado</h4>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>

            <style jsx>{`
                ul {
                    margin-left: ${img === 0 ? "0%" : img === 1 ? "-100%" : img === 2 ? '-200%' : '-300%'};
                }
            `}</style>

            <style jsx>{`
                .content {
                    height: 80vh;
                    position: relative;
                    
                }

                .select {
                    position: absolute;
                    border-radius: 2rem;
                    background-color: var(--blue-transparent);
                    bottom: 5%;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 30;
                    padding: 1rem;
                }

                .content > ul {
                    display: grid;
                    height: 100%;
                    width: 400vw;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    transition: margin-left 1.5s ease;
                }

                .content > ul > li {
                    list-style: none;
                    width: 100vw;
                    height: 80vh;
                    position: relative;
                    
                }

                button {
                    width: 25px;
                    height: 25px;
                    cursor: pointer;
                    border: 2px solid var(--light-green);
                    border-radius: 50%;
                    outline: none;
                    background: none;
                    transition: background .5s;
                    margin: 3px 6px;
                }

                button:hover {
                    background: var(--dark-green);
                }

                img {
                    width: 100vw;
                    height: 100%;
                    object-fit: cover;
                }

                .icon {
                    display: block;
                    margin: auto;
                    height: 15rem;
                    width: auto;
                }

                .icons {
                    box-sizing: border-box;
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    justify-items: center;
                    padding-bottom: 3%;
                    padding-top: 2rem;
                    width: 80vw;
                    
                }

                h2 {
                    padding-top: 3%;
                    text-align: center;
                }

                .fondo {
                    padding: 0;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    position: absolute;
                    z-index: 3;
                    background-color: var(--blue-transparent);
                    color: white;
                    font-size: 2rem;
                    text-align: justify
                }

                p {
                    box-sizing: border-box;

                    padding: 10% 15%;
                    width: 80vw;
                    
                }

                h4 {
                    text-align: center;
                    margin-top: 1rem;
                }

                @media screen and (max-width: 1300px) {
                    .icon {
                        height: 11rem;
                    }
                }

                @media screen and (max-width: 1070px) {

                    .icon {
                        height: 10rem;
                    }

                    .content, .content > ul > li {
                        height: 70vh;
                    }

                    .select {
                        bottom: -15%;
                    }

                    .fondo {
                        font-size: 1.7rem;
                        line-height: 1.5rem;
                    }

                }

                @media screen and (max-width: 730px) {

                    .fondo {
                        font-size: 1.3rem;
                        font-weight: 600;
                    }

                    .icon {
                        height: 6rem;
                    }

                }

                @media screen and (max-width: 730px) {

                    .fondo {
                        font-size: 1rem;
                        font-weight: 600;
                    }

                }

                @media screen and (max-width: 500px) {

                    .icon {
                        height: 4.5rem;
                    }

                    .icons {
                        grid-template-columns: 1fr;
                        padding-top: 1rem;
                        grid-row-gap: 1rem;
                    }

                }

                

            `}</style>
        </div>
    );
};

export default SliderMain;
