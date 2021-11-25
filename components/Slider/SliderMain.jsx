import React, { useState, useEffect } from "react";
/* import Portada from './Portada'
import Portada2 from './Portada2' */

const SliderMain = () => {

    const [img, setImg] = useState(0);
    const [direccion, setDireccion] = useState(true);

    useEffect(() => {
        const tiempo = setTimeout(() => {
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
        }
    }, [img]);

    //Para evitar que se desfase el slider
    useEffect(() => {
        if (img < 0) setImg(0)
        if (img > 3) setImg(3)
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
                <button
                    onClick={() => move(3)}
                    style={filling(3)}
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
                <li>
                    <img src="/img/colombiagas/cuarta.jpg" alt="" loading="lazy" />
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
                    width: 100%;
                    height: 80vh;
                    overflow: hidden;
                    position: relative;
                    max-height: 630px;
                }

                .select {
                    border-radius: 2rem;
                    background-color: var(--blue-transparent);
                    bottom: 1rem;
                    left: 50%;
                    transform: translateX(-50%);
                    position: absolute;
                    z-index: 30;
                    padding: 1rem;
                }

                .content > ul {
                    display: grid;
                    height: 400vw;
                    width: 100%;
                    grid-template-columns: 1fr 1fr 1fr 1fr;
                    transition: margin-left 1.5s ease;
                }

                .content > ul > li {
                    list-style: none;
                    width: 100%;
                    height: 80vh;
                    position: relative;
                }

                button {
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                    border: 2px solid var(--light-green);
                    border-radius: 50%;
                    outline: none;
                    background: none;
                    transition: background .5s;
                    margin: 3px;
                }

                button:hover {
                    background: var(--dark-green);
                }

                img {
                    width: 100vw;
                    object-fit: cover;
                }

                .icon {
                    display: block;
                    margin: auto;
                    height: 10rem;
                    width: auto;
                }

                .icons {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    grid-column-gap: 5rem;
                    justify-items: center;
                }

                h2 {
                    text-align: center;
                }

                .fondo {
                    padding: 6rem 8rem;
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
                    min-width: 60rem;
                }

            `}</style>
        </div>
    );
};

export default SliderMain;
